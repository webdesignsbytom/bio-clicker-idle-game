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

const findAllUsers = () => prisma.user.findMany({
  include: {
    gameProfile: true,
  }
});

const findUserByEmail = (email) =>
  prisma.user.findFirst({
    where: {
      email: email,
    },
    include: {
      gameProfile: true,
    }
  });

const findUserById = (userId) =>
  prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      gameProfile: true,
    }
  });

const deleteUserById = (userId) =>
  prisma.user.delete({
    where: {
      id: userId,
    },
  });

module.exports = {
  createUser,
  findAllUsers,
  findUserByEmail,
  findUserById,
  deleteUserById,
};
