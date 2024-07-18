import { Router } from "express";
import userRouter from "./user_routes";

const router = Router();

router.use("/users", userRouter);
router.get("/", (_, res) => {
  res.status(200).send("Made by damattag and titi");
});

export default router;
