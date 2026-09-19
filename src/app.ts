import express from "express";
import cors from "cors"
import gameRouter from "./routes/gameRoute.js";
const app = express();

app.use(express.json());
app.use(cors())

app.use(`/assets`, express.static("src/assets"))

app.use("/api/game", gameRouter)

const port = process.env.PORT || 3000

app.listen(port, () => { console.log("El puerto 3000 se está escuchando") })