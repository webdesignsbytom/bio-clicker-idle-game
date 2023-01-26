const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findAllItems = () => prisma.item.findMany({});
const findItemByName = (name) =>
  prisma.item.findFirst({
    where: {
      name: name,
    },
  });
const createItem = (name) => prisma.item.create({
    data: {
        name: name,
    }
})
module.exports = {
  findAllItems,
  findItemByName,createItem
};
