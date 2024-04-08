import { Router } from "express";
import { VehicleC } from "../controller/VehicleC.js";

export const VehicleRouter = ({ VehicleM }) => {
  const VehicleR = Router();

  const NewVehicle = new VehicleC({ VehicleM });

  VehicleR.post("/", NewVehicle.Create);
  VehicleR.delete("/:id", NewVehicle.Delete);

  return VehicleR;
};
