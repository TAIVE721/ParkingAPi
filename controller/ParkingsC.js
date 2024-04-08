import { PValidatorP, ValidatorParking } from "../schemas/ParSchema.js";

export class ParkingsC {
  constructor({ ParkingsM }) {
    this.parkings = ParkingsM;
  }

  GetAll = async (req, res) => {
    const parkings = await this.parkings.GetAll();

    return res.status(200).json(parkings);
  };

  Patch = async (req, res) => {
    const { id } = req.params;
    const validate = PValidatorP(req.body);

    if (!validate.success) {
      return res
        .status(400)
        .json({ error: JSON.parse(validate.error.message) });
    }

    const parking = await this.parkings.Patch({ id, input: validate.data });
    console.log(parking);
    return res.status(200).json(parking);
  };

  Create = async (req, res) => {
    const validate = ValidatorParking(req.body);

    if (!validate.success) {
      return res
        .status(400)
        .json({ error: JSON.parse(validate.error.message) });
    }

    const parking = await this.parkings.Create({ input: validate.data });

    return res.status(200).json(parking);
  };

  Delete = async (req, res) => {
    const { id } = req.params;
    const parking = await this.parkings.Delete({ id });

    return res.status(200).json(parking);
  };
}
