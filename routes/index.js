import express from 'express';
import * as dealershipController from '../controllers/dealershipController.js';
import * as ratingController from '../controllers/ratingController.js';
import * as featureController from '../controllers/featureController.js';

const router = express.Router();

router.post('/dealership', dealershipController.createDealership);
router.post('/dealership/user', dealershipController.assignUserToDealership);
router.post('/dealership/:dealershipId/car', dealershipController.addCarToDealership);
router.get('/dealerships', dealershipController.getAllDealershipsSorted);
router.get('/dealership/:id', dealershipController.getDealershipDetails);

router.post('/rating', ratingController.rateCar);

router.post('/car/feature', featureController.addFeatureToCar);
router.delete('/car/feature', featureController.removeFeatureFromCar);

export default router;