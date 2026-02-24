const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const tasksRouter = require('./routes/tasks');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/tasks', tasksRouter);

if (require.main === module) {
  sequelize.sync().then(() => {
    const port = process.env.PORT || 4000;
    app.listen(port, () => console.log(`Server running on ${port}`));
  });
}

module.exports = app;
