


const server = require('./app.js');
const { conn } = require('./db.js');

const port = process.env.PORT || 3332;


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log(`%s listening at ${port} `); // eslint-disable-line no-console
  });
});

