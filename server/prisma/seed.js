const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient()

async function seed() {
  const password = await bcrypt.hash('123', 8)

  const createdUser = await prisma.user.create({
    data: {
      email: 'mario_italy@email.com',
      password: password
    }
  })

  // const createGameProfile = await prisma.gameProfile.create({
  //   data: {
  //       userId: createdUser.id,
  //   }
  // })

  // const createItemOne = await prisma.item.create({
  // data: {
  //     gameProfileId: createGameProfile.id,
  //     name: 'Large Pillow'
  //   }
  // })

  const adminUser = await prisma.user.create({
    data: {
      email: 'deandangerous@admin.com',
      password: password,
      role: 'ADMIN'
    }
  })

  // const itemOne = await prisma.item.create({
  //   data: {
  //     name: 'Cool item'
  //   }
  // })
  // const itemTwo = await prisma.item.create({
  //   data: {
  //     name: 'Wool item'
  //   }
  // })
  // const itemThree = await prisma.item.create({
  //   data: {
  //     name: 'Sad item'
  //   }
  // })

  // const buildingOne = await prisma.building.create({
  //   data: {
  //     name: 'Cool building'
  //   }
  // })
  // const buildingTwo = await prisma.building.create({
  //   data: {
  //     name: 'Wool building'
  //   }
  // })
  // const buildingThree = await prisma.building.create({
  //   data: {
  //     name: 'Sad building'
  //   }
  // })
}

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})
