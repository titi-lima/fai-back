import { DatabaseConnection } from "./database_connection";
import "dotenv/config";

const connection = new DatabaseConnection();

export { connection };
