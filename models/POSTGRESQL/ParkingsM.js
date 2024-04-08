import pg from "pg";

const { Pool, types } = pg;
types.setTypeParser(types.builtins.INT8, parseInt);
types.setTypeParser(types.builtins.NUMERIC, parseFloat);
types.setTypeParser(types.builtins.FLOAT8, parseFloat);

const pool = new Pool({
  user: "papusql",
  host: "papusql",
  port: 5432,
  password: "",
  database: "parkings",
});

export class ParkingModel {
  static async GetAll() {
    const { rows } = await pool.query("SELECT * FROM parkings");
    return rows;
  }

  static async Patch({ id, input }) {
    const { rows } = await pool.query("SELECT * FROM parkings WHERE ID = $1;", [
      id,
    ]);

    const patch = {
      ...rows[0],
      ...input,
    };

    const sas = await pool.query(
      `UPDATE parkings
      SET
          category = $1,
          vehicle = $2,
          occupied = $3,
          available = $4
      WHERE
          id = $5
      RETURNING
          *;`,
      [patch.category, patch.vehicle, patch.occupied, patch.available, patch.id]
    );

    return sas.rows[0];
  }

  static async Create({ input }) {
    const sas = await pool.query(
      ` 
      INSERT INTO
      parkings (
          width, large, category, vehicle, occupied, available
      )
  VALUES (
          $1, $2, $3, $4, $5, $6
      )
      RETURNING *;`,
      [
        input.width,
        input.large,
        input.category,
        input.vehicle,
        input.occupied,
        input.available,
      ]
    );

    return sas.rows[0];
  }

  static async Delete({ id }) {
    const { rows } = await pool.query(
      `DELETE FROM parkings WHERE ID = $1 RETURNING *;`,
      [id]
    );

    return rows[0];
  }
}
