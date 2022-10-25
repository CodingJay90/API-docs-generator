import http from "http";
import express from "express";
import routes from "./routes";

const app = express();

app.use("/api/", routes);

const httpServer = http.createServer(app);

httpServer.listen(5000, () => console.log(`Server is running: 5000`));
