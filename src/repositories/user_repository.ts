import { Prisma } from "@prisma/client";
import prisma from "../database";

class UserRepository {
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
      },
    });

    return user;
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async findAll(filters: Prisma.UserWhereInput) {
    const users = await prisma.user.findMany({
      where: {
        name: filters.name,
      },
    });

    return users;
  }

  async update(id: string, data: Prisma.UserUpdateInput) {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data,
    });

    return user;
  }

  async delete(id: string) {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });

    return user;
  }
}

export default new UserRepository();
