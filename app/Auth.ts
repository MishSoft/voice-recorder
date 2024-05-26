// const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

router.post(
  "/register",
  async (
    req: { body: { email: any; password: any } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        send: {
          (arg0: { message?: string; error?: string }): void;
          new (): any;
        };
      };
    }
  ) => {
    const { email, password } = req.body;
    try {
      const user = new User({ email, password });
      await user.save();
      res.status(201).send({ message: "User registered successfully" });
    } catch (error) {
      res.status(400).send({ error: "Email already exists" });
    }
  }
);

router.post(
  "/login",
  async (
    req: { body: { email: any; password: any } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        send: { (arg0: { error: string }): any; new (): any };
      };
      send: (arg0: { token: any }) => void;
    }
  ) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ error: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ error: "Invalid email or password" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.send({ token });
  }
);

module.exports = router;
