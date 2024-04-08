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

export class VehicleModel {
  static async Create({ input }) {
    const park = await pool.query(
      `
    INSERT INTO vehicles ( category,parking)
    VALUES ($1, $2)
    RETURNING *;
    `,
      [input.category, input.parking]
    );

    const { rows } = await pool.query(
      `
    UPDATE parkings SET vehicle = $1 WHERE id = $2 RETURNING *;
    
    `,
      [park.rows[0].id, input.parking]
    );

    return rows[0];
  }

  static async Delete({ id }) {
    const { rows } = await pool.query(
      `
    DELETE FROM vehicles WHERE id = $1 RETURNING *;
    `,
      [id]
    );

    const { rows: park } = await pool.query(
      `
    UPDATE parkings SET vehicle = 0 WHERE vehicle = $1 RETURNING *;
    `,
      [id]
    );

    return rows[0];
  }
}
