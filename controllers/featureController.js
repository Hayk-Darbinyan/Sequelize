import db from '../models/index.js';

export const addFeatureToCar = async (req, res) => {
    try {
      const { carId, featureId } = req.body;
      const car = await db.Car.findByPk(carId);
      const feature = await db.Feature.findByPk(featureId);
      if (!car || !feature) return res.status(404).json({ error: 'Car or Feature not found' });
      await car.addFeature(feature);
      res.json({ message: 'Feature added to car' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  export const removeFeatureFromCar = async (req, res) => {
    try {
      const { carId, featureId } = req.body;
      const car = await db.Car.findByPk(carId);
      const feature = await db.Feature.findByPk(featureId);
      if (!car || !feature) return res.status(404).json({ error: 'Car or Feature not found' });
      await car.removeFeature(feature);
      res.json({ message: 'Feature removed from car' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };