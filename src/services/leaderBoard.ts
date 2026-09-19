import { prisma } from "./prisma.js"

async function getLeaderBoard() {
    return await prisma.leaderBoard.findMany({
        orderBy: {
            timeMs: "asc"
        }
    })
}

export { getLeaderBoard }