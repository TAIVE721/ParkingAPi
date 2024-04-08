import pg from "pg";

const { Pool, types } = pg;
types.setTypeParser(types.builtins.INT8, parseInt);
types.setTypeParser(types.builtins.NUMERIC, parseFloat);
types.setTypeParser(types.builtins.FLOAT8, parseFloat);

process.loadEnvFile();
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

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
    const { rows } = await pool.query("SELECT * FROM parkings");

    console.log(rows);
  }
}

atp.GetAll();
