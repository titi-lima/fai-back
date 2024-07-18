import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import { createUserSchema } from "../DTOs";
import { UserRepository } from "../repositories";

class UserController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, name, password } = createUserSchema.parse(req.body);

      const userAlreadyExists = await UserRepository.findByEmail(email);

      if (userAlreadyExists) {
        return res.status(409).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 6);

      const user = await UserRepository.create({
        email,
        name,
        password: hashedPassword,
      });

      return res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
