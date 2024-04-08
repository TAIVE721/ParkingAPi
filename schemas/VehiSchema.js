import z from "zod";

const vehicelschema = z.object({
  category: z.enum(["compact", "regular", "big"]),
  parking: z.number().min(1),
});

export function ValidatorVehicle(element) {
  return vehicelschema.safeParse(element);
}
