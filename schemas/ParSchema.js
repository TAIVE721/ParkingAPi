import z from "zod";

const parkingschema = z.object({
  width: z.number().min(0.1).max(10),
  large: z.number().min(0.1).max(10),
  category: z.enum(["compact", "regular", "big"]),
  vehicle: z.number().min(0),
  occupied: z.boolean(),
  available: z.boolean(),
});

export function ValidatorParking(element) {
  return parkingschema.safeParse(element);
}

export function PValidatorP(element) {
  return parkingschema.partial().safeParse(element);
}
