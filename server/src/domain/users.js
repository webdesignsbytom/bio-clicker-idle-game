const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = (email, password) =>
  prisma.user.create({
    data: {
      email: email,
      password: password,
    },
  });

const findAllUsers = () => prisma.user.findMany({});

const findUserByEmail = (email) =>
  prisma.user.findFirst({
    where: {
      email: email,
    },
  });

module.exports = {
  createUser,
  findAllUsers,
  findUserByEmail,
};
