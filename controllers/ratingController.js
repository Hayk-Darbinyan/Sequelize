export const rateCar = async (req, res) => {
    try {
      const { car_id, user_id, rate } = req.body;
      if (rate < 0 || rate > 5) {
        return res.status(400).json({ error: 'Rating must be between 0 and 5' });
      }
  
      const rating = await db.Rating.create({ car_id, user_id, rate });
      res.status(201).json(rating);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  