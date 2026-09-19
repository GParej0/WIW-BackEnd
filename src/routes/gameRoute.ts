import { Router } from "express";
import { startGame, validateCharacters, finishGame, getBoard } from "../controllers/gameControllers.js";

const gameRouter = Router();

gameRouter.post("/start", startGame);
gameRouter.post("/check-char", validateCharacters)
gameRouter.post("/finish", finishGame)
gameRouter.get("/board", getBoard)

export default gameRouter;