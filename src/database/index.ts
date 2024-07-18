import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma
  .$connect()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Database connection error", error);
  });

export default prisma;
