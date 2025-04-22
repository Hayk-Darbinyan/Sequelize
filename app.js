import express from "express";
import bodyParser from "body-parser";
import db from "./models/index.js";
import routes from "./routes/index.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/api", routes);

(async () => {
  try {
    await db.sync();
    await db.testConnection();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Failed to start server:", err);
  }
})();
