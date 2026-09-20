import { prisma } from "./prisma.js"

async function startGame() {

    const session = await prisma.gameSession.create({
        data: {}
    })

    const characters = await prisma.character.findMany({
        where: {},
        select: {
            id: true,
            name: true
        }
    })

    return {
        sessionID: session.id,
        characters
    }

}

async function validateCharacters(characterId: string, x: number, y: number) {

    const character = await prisma.character.findUnique({
        where: {
            id: characterId
        },
        select: {
            coorX: true,
            coorY: true,
            tolerance: true
        }
    })

    if (!character) {
        throw new Error("Character not found");
    }

    const deltaX = x - character.coorX;
    const deltaY = y - character.coorY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    const isCorrect = distance <= character.tolerance

    return { isCorrect }
}

async function finishGameSession(sessionId: number, playerName: string, endedAt: number) {
    const session = await prisma.gameSession.findUnique({
        where: {
            id: sessionId
        },
        select: {
            startTime: true
        }
    })

    if (!session) throw new Error("Session not found")


    const duration = endedAt - session?.startTime.getTime()

    return await prisma.leaderBoard.create({
        data: {
            name: playerName,
            timeMs: duration,
        }
    })
}

export {
    startGame,
    validateCharacters,
    finishGameSession
}