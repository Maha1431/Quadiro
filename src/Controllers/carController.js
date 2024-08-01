const Car = require('../Models/Car');

exports.createCar = async (req, res) => {
  const { carName, manufacturingYear, price } = req.body;
  try {
    const newCar = new Car({ carName, manufacturingYear, price });
    const car = await newCar.save();
    res.json(car);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ msg: 'Car not found' });
    }
    res.json(car);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateCar = async (req, res) => {
  const { carName, manufacturingYear, price } = req.body;
  try {
    let car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ msg: 'Car not found' });
    }

    car.carName = carName || car.carName;
    car.manufacturingYear = manufacturingYear || car.manufacturingYear;
    car.price = price || car.price;

    await car.save();
    res.json(car);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ msg: 'Car not found' });
    }
    await car.remove();
    res.json({ msg: 'Car removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
