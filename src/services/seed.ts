import { prisma } from "./prisma.js"

async function main() {
    return await prisma.character.createMany({
        data: [
            {
                id: "waldo",
                name: "Waldo",
                coorX: 1200,
                coorY: 45,
                tolerance: 50,
            },
            {
                id: "oldaw",
                name: "Oldaw",
                coorX: 1149,
                coorY: 455,
                tolerance: 40,
            },
            {
                id: "wenda",
                name: "Wenda",
                coorX: 352,
                coorY: 536,
                tolerance: 40,
            },
            {
                id: "wizard",
                name: "Wizard",
                coorX: 371,
                coorY: 325,
                tolerance: 55,
            }
        ]
    })
}

main()