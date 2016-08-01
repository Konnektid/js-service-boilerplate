import express from "express";
import { PORT, ENV } from "./config";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, () => {
    console.log(`service listening on port ${PORT}, environment ${ENV}`);
});
