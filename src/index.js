import express from "express";
import getConfif from "./config";

const { PORT, ENV } = getConfig();
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, () => {
    console.log(`service listening on port ${PORT}, environment ${ENV}`);
});
