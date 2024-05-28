// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   // CREATE USER
//   const user = await prisma.user.create({
//     data: {
//       name: 'Sandra', // Changed username to name
//       email: 'test@test.se',
//       isAdmin: false,
//       password: 'password123', // Add password field
//     },
//   });
//   console.log(user);

// //   // CREATE POST
// //   const post = await prisma.post.create({
// //     data: {
// //       title: 'en titel',
// //       content: 'content',
// //       authorId: user.id, // Use user.id from the created user
// //     },
// //   });
// //   console.log(post);

// //   // READ ALL USERS
// //   const users = await prisma.user.findMany({
// //     include: {
// //       posts: true, // Correct relation field from Post to posts
// //     },
// //   });

// //   console.log(users);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    // CREATE USER
    const user = await prisma.user.create({
      data: {
        username: 'Sandra',
        email: 'test@test.se',
        password: 'password123',
      },
    });
    console.log(user);

    // DISCONNECT PRISMA CLIENT
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    // DISCONNECT PRISMA CLIENT IN CASE OF ERROR
    await prisma.$disconnect();
    process.exit(1);
  }
}

// CALL MAIN FUNCTION
main();
