const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findAllBuildings = () => prisma.building.findMany({});

module.exports = {
    findAllBuildings,
};
