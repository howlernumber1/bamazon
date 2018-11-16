module exports = {
  development: {
    username: "mj",
    password: process.env.DB_PASS,
    database: "db",
    host: "localhost",
    port: 3306,
    dialect: "mysql"
  },
  test: {
    username: "mj",
    password: null,
    database": "Bamazon",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
use_env_variable": "JAWSDB_URL",
dialect: "mysql"
  }
}
