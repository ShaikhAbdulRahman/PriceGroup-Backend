const express = require('express');
const priceGroupRoutes = require('./src/routes/priceGroupRoutes');
const connectDB = require('./src/config/db.config');

const app = express();
const cors = require('cors');

connectDB();

app.use(express.json());
app.use(cors());

app.use('/price-group', priceGroupRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});