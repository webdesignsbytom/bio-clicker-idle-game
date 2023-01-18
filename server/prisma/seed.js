const { PrismaClient } = require('@prisma/client');
// import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function seed() {
  // const password = await bcrypt.hash('123', 8)

  const createdUser = await prisma.user.create({
    data: {
      email: 'notmyrealemail@email.com',
    }
  })
}

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})
