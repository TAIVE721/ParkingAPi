import { Lector } from "./utils/Rchafa.js";
const { types } = Lector("pg");
import { sql } from "@vercel/postgres";

// Sobrescribir los tipos por defecto
types.setTypeParser(types.builtins.INT8, "text", parseInt);
types.setTypeParser(types.builtins.FLOAT8, "text", parseFloat);
types.setTypeParser(types.builtins.NUMERIC, "text", parseFloat);

process.loadEnvFile();

const xd = {
  width: 3,
  large: 5.5,
  category: "compact",
  vehicle: 0,
  occupied: false,
  available: true,
};

export class atp {
  static async GetAll() {
    const { rows } = await sql`SELECT * FROM parkings WHERE ID = ${1}`;
    console.log(rows);
  }
}

atp.GetAll();
