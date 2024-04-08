import { Router } from "express";
import { ParkingsC } from "../controller/ParkingsC.js";

export const ParkingsRouter = ({ ParkingsM }) => {
  const ParkingsR = Router();

  const NewParkings = new ParkingsC({ ParkingsM });

  ParkingsR.get("/", NewParkings.GetAll);
  ParkingsR.post("/", NewParkings.Create);
  ParkingsR.patch("/:id", NewParkings.Patch);
  ParkingsR.delete("/:id", NewParkings.Delete);

  return ParkingsR;
};
