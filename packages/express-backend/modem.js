import mongoose from "mongoose";

const ModemSchema = new mongoose.Schema(
  {
    connection: {
      type: String,
      required: true,
      trim: true,
    },
    bitrate: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (!value.includes("kbit/s")||!value.includes("baud"))
          throw new Error("Invalid speed! Enter in kbit/s or baud.");
      },
    },
  },
  { collection: "users_list" }
);

const Modem = mongoose.model("Modem", ModemSchema);

export default Modem;
