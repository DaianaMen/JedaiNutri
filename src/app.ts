import express from "express";
import { router } from "./config/routes";
const app = express();

console.clear();

app.use(express.json());
app.use(router);

app.listen(5000, () => console.log('Server running...'));