import express, { json } from "express";
import { CreateCors } from "../middlewares/cors.js";
import { ParkingsRouter } from "../router/ParkingsR.js";
import { VehicleRouter } from "../router/VehicleR.js";
import { ParkingModel } from "../models/Production/ParkingsMP.js";
import { VehicleModel } from "../models/Production/VehicleMP.js";

export const createAppPostgres = () => {
  const app = express();
  app.use(json());
  app.use(CreateCors());
  app.disable("x-powered-by");

  app.use("/parkings", ParkingsRouter({ ParkingsM: ParkingModel }));
  app.use("/cars", VehicleRouter({ VehicleM: VehicleModel }));

  const PORT = process.env.PORT || 1234;

  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
};
