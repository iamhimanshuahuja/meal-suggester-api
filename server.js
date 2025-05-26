const express = require('express');
require('dotenv').config();
const dishRoutes = require('./routes/dishRoutes');
const menuRoutes = require('./routes/menuRoutes');

const app = express();
app.use(express.json());

app.use('/api/dishes', dishRoutes);
app.use('/api/menu', menuRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
