require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());

// Connect to the database
connectDB();

// Use routes
app.use("/auth", authRoutes);

app.get("/", (req: any, res: { send: (arg0: string) => void; }) => {
  res.send("Admin Homepage");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
