const express = require('express');
const UserService = require('./../services/user.service');
const {updateUserSchema, createUserSchema,getUserSchema} = require('./../schemas/user.schema');

const router = express.Router();
const service = new UserService();

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});
router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
});

module.exports = router;
