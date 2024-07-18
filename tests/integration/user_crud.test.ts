import request from "supertest";
import { connection } from "../helper/database.config";
import app from "../../src/app";

describe("CRUD User", () => {
  beforeAll(async () => {
    connection.create();
  });

  beforeEach(async () => {
    await connection.clear();
  });

  afterAll(async () => {
    connection.clear();
    connection.close();
  });

  const user = {
    name: "John Doe",
    email: "johndoe@email.com",
    password: "12345678",
  };

  it("should be able to create a new user", async () => {
    const response = await request(app).post("/users").send(user);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("should not be able to create a new user with an email that already exists", async () => {
    await request(app).post("/users").send(user);

    const response = await request(app).post("/users").send(user);

    expect(response.status).toBe(409);
    expect(response.body).toEqual({ message: "User already exists" });
  });
});
