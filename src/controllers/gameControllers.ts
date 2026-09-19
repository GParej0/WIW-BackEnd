import type { Request, Response } from "express";
import * as gameService from "../services/gameservice.js"
import * as leaderBoard from "../services/leaderBoard.js";


async function startGame(req: Request, res: Response) {

    try {
        const data = await gameService.startGame();
        res.json(data)
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" })
    }

}

async function validateCharacters(req: Request, res: Response) {

    try {
        const { characterId, x, y } = req.body

        const data = await gameService.validateCharacters(characterId, x, y);

        if (!data) res.status(404).json({ error: "Not found" })

        res.json(data)
    } catch (error) {
        res.status(400).json({ error: "Something went wrong" })
    }

}

async function finishGame(req: Request, res: Response) {

    try {
        const { sessionId, playerName } = req.body

        const data = await gameService.finishGameSession(sessionId, playerName);

        res.json(data)
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" })
    }

}

async function getBoard(req: Request, res: Response) {

    try {
        const data = await leaderBoard.getLeaderBoard()

        res.json(data)
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" })
    }
}

export {
    startGame,
    validateCharacters,
    finishGame,
    getBoard
}