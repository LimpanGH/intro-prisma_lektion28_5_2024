

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here

 // CREATE USER
//   const user = await prisma.user.create({
//     data: {
//         username: "Torsten",
//         password:"456",
//         email: "torsten@test.se"
//     }
//   })
//   console.log(user)

// CREATE POST
// const post = await prisma.post.create({
//     data: {
//         title: "en titel",
//         content: "content",
//         authorId: 2
//     }
// })

// console.log(post)

// READ ALL 
const users = await prisma.user.findMany({
    include: {
        post: true
    }
}) 
console.log(JSON.stringify(users))

// READ SPECIFIC
// const user = await prisma.user.findUnique({
//     where: {
//         email: "test@test.se"
//     }
// })
// console.log(user)

// READ FIRST OF
// const user = await prisma.user.findFirst({
//     where: {
//         username: "Sandra"
//     }
// })
// console.log(user)

// UPDATE SPECIFIC
// const user = await prisma.user.update( {

//     where: {
//         id: 2
//     },
//     data: {
//         username: "Sofia",
//        password:"456",
//          email: "torsten@test.se"
//     }
// })

// console.log(user)

// DELETE USER 
// const user = await prisma.user.delete({
//     where: {
//         id: 2
//     }
// })
// console.log(user)
// }

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })