// models/dua.js
import mongoose from "mongoose";

const duaSchema = new mongoose.Schema({
  your_name: {
    type: String,
  },
  baby_name: {
    type: String,
  },
  dua: {
    type: String,
  },
});

const Dua = mongoose.model("Task", duaSchema);

export default Dua;
