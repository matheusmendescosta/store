import pg from "pg";

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  const pool = new pg.Pool({
    connectionString: "postgres://ljyqbkot:G-YnoVjCl8QX6_4obK_BYgKf-CNK4-Ew@tuffi.db.elephantsql.com/ljyqbkot",
  });
  global.connection = pool;
  return pool.connect();
}

export { connect };
