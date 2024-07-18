import app from "./app";

import "dotenv/config";
import "./database";

app.listen(process.env.SERVER_PORT || 3001, () => {
  console.log(`Server is running 🚀 ${process.env.SERVER_PORT}`);
});
