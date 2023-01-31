// import bodyParser from "body-parser";
// import express from "express";
// import pg from "pg";

// // Connect to the database using the DATABASE_URL environment
// //   variable injected by Railway
// const pool = new pg.Pool();

// const app = express();


const server = require('./app.js');
const { conn } = require('./db.js');

const port = process.env.PORT || 3332;


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port, '0.0.0.0')
  server.listen(port, () => {
    console.log(`%s listening at ${port} `); // eslint-disable-line no-console
  });
});



// app.use(bodyParser.json());
// app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
// app.use(bodyParser.text({ type: "text/html" }));

// app.get("/", async (req, res) => {
//   const { rows } = await pool.query("SELECT NOW()");
//   res.send(`Hello, World! The time from the DB is ${rows[0].now}`);
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
