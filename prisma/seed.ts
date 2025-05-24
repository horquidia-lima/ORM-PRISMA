import {prisma} from "@/prisma"

async function seed(){
    await prisma.user.createMany({
        data: [
            {
                name: "quida",
                email: "quida@quida"
            }
        ]
    })
}

seed().then(() => {
    console.log("Database seeded")
    prisma.$disconnect
})
