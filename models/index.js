import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import MakeDef from "./make.js";
import ModelDef from "./model.js";
import FeatureDef from "./feature.js";
import CarDef from "./car.js";
import CarFeatureDef from "./carFeature.js";
import DealershipDef from "./dealership.js";
import UserDef from "./user.js";
import RatingDef from "./rating.js";
import config from "../config/config.js";

dotenv.config();


const sequelize = new Sequelize({
  dialect: 'mysql',
  host: config.development.host,
  port: config.development.port,
  username: config.development.username,
  password: config.development.password,
  database: config.development.database,
  define: {
    timestamps: false,
  },
  logging: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Make = MakeDef(sequelize);
db.Model = ModelDef(sequelize);
db.Feature = FeatureDef(sequelize);
db.Car = CarDef(sequelize);
db.CarFeature = CarFeatureDef(sequelize);
db.Dealership = DealershipDef(sequelize);
db.User = UserDef(sequelize);
db.Rating = RatingDef(sequelize);

db.Model.belongsTo(db.Make, { foreignKey: "make_id" });
db.Car.belongsTo(db.Model, { foreignKey: "model_id" });
db.Car.belongsTo(db.Dealership, { foreignKey: "dealership_id" });
db.Car.belongsToMany(db.Feature, {
  through: db.CarFeature,
  foreignKey: "car_id",
});
db.Feature.belongsToMany(db.Car, {
  through: db.CarFeature,
  foreignKey: "feature_id",
});
db.Rating.belongsTo(db.User, { foreignKey: "user_id" });
db.Rating.belongsTo(db.Car, { foreignKey: "car_id" });
db.Dealership.belongsToMany(db.User, {
  through: "dealership_users",
  foreignKey: "dealership_id",
});
db.Dealership.hasMany(db.Car, { foreignKey: "dealership_id" });
db.User.belongsToMany(db.Dealership, {
  through: "dealership_users",
  foreignKey: "user_id",
});
db.Car.hasMany(db.Rating, { foreignKey: "car_id" });

db.testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connection successful!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

db.sync = async () => {
  await sequelize.sync({ alter: true });
};

export default db;
