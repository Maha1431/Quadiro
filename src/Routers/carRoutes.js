const express = require('express');
const auth = require('../MiddleWare/auth');
const {
  createCar,
  getCars,
  getCar,
  updateCar,
  deleteCar
} = require('../Controllers/carController');
const router = express.Router();

router.post('/', auth, createCar);
router.get('/', getCars);
router.get('/:id', getCar);
router.put('/:id', auth, updateCar);
router.delete('/:id', auth, deleteCar);

module.exports = router;
