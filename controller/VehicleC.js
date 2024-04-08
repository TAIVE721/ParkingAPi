import { ValidatorVehicle } from "../schemas/VehiSchema.js";

export class VehicleC {
  constructor({ VehicleM }) {
    this.Vehicle = VehicleM;
  }

  Create = async (req, res) => {
    const validate = ValidatorVehicle(req.body);

    if (!validate.success) {
      return res
        .status(400)
        .json({ error: JSON.parse(validate.error.message) });
    }

    const vehicle = await this.Vehicle.Create({ input: validate.data });

    res.status(200).json(vehicle);
  };

  Delete = async (req, res) => {
    const { id } = req.params;

    const vehicle = await this.Vehicle.Delete({ id });

    res.status(200).json(vehicle);
  };
}
