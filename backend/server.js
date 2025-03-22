require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const pledgeRoutes = require("./routes/pledgeRoutes");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/pledges", pledgeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
