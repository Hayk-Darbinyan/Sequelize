import db from '../models/index.js';

export const createDealership = async (req, res) => {
  try {
    const { name, address, description } = req.body;
    const dealership = await db.Dealership.create({ name, address, description });
    res.status(201).json(dealership);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const assignUserToDealership = async (req, res) => {
  try {
    const { dealershipId, userId } = req.body;
    const dealership = await db.Dealership.findByPk(dealershipId);
    const user = await db.User.findByPk(userId);
    if (!dealership || !user) return res.status(404).json({ error: 'Dealership or User not found' });
    await dealership.addUser(user);
    res.json({ message: 'User assigned successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addCarToDealership = async (req, res) => {
  try {
    const { dealershipId } = req.params;
    const { price, year, vin, model_id } = req.body;
    const dealership = await db.Dealership.findByPk(dealershipId);
    if (!dealership) return res.status(404).json({ error: 'Dealership not found' });
    const car = await db.Car.create({ price, year, vin, model_id, dealership_id: dealershipId });
    res.status(201).json(car);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllDealershipsSorted = async (req, res) => {
  try {
    const dealerships = await db.Dealership.findAll({
      include: [{ model: db.Car }]
    });
    const sorted = dealerships.sort((a, b) => b.Cars.length - a.Cars.length);
    res.json(sorted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getDealershipDetails = async (req, res) => {
    try {
      const { id } = req.params;
      const dealership = await db.Dealership.findByPk(id, {
        include: [
          { 
            model: db.User, 
            attributes: ['username', 'email'], 
            through: { attributes: [] } 
          },
          {
            model: db.Car,
            include: [
              {
                model: db.Model,  
                include: [db.Make]
              },
              db.Feature,
              {
                model: db.Rating,
                include: [{ model: db.User, attributes: ['username'] }]
              }
            ]
          }
        ]
      });
  
      if (!dealership) {
        return res.status(404).json({ error: 'Dealership not found' });
      }
  
      // Calculate average ratings for each car
      const output = dealership.toJSON();
      output.Cars.forEach(car => {
        const ratings = car.Ratings || [];
        car.averageRating = ratings.length 
          ? ratings.reduce((sum, r) => sum + r.rate, 0) / ratings.length 
          : null;
      });
  
      res.json(output);
    } catch (err) {
      console.error("Error fetching dealership details:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  };