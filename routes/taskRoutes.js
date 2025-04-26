import express from "express";
import Dua from "../models/task.js";

const router = express.Router();

// GET all duas
router.get("/", async (req, res) => {
  try {
    const duaList = await Dua.find({}).sort({ _id: -1 });
    res.status(200).json({ message: "Dua list retrieved", duaList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST new dua
router.post("/new", async (req, res) => {
  try {
    const task = await Dua.create(req.body);
    res.status(201).json({ message: "Dua Submitted Successfully", data: task });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

export default router;
