import mongoose from "mongoose";
import modemSchema from "./modem.js";

mongoose.set("debug", true);

mongoose
  .connect("mongodb://localhost:27017/speeds", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));

function getModems(connection, bitrate) {
  let promise;
  if (connection === undefined && bitrate === undefined) {
    promise = modemSchema.find();
  } else if (connection && !bitrate) {
    promise = findModemByConnection(connection);
  } else if (bitrate && !connection) {
    promise = findModemByBitrate(bitrate);
  } else if (connection && bitrate) {
    promise = findModemByBoth(connection, bitrate);
  }
  return promise;
}

// functions not used in getmodems
function findModem(id) {
  return modemSchema.findById(id);
}
function addModem(modem) {
  const modemToAdd = new modemSchema(modem);
  const promise = modemToAdd.save();
  return promise;
}
function removeModem(id) {
  return modemSchema.findByIdAndDelete(id);
}

// internal
function findModemByConnection(connection) {
  return modemSchema.find({ connection: connection });
}
function findModemByBitrate(bitrate) {
  return modemSchema.find({ bitrate: bitrate });
}
function findModemByBoth(connection, bitrate) {
  return modemSchema.find({ connection: connection, bitrate: bitrate });
}

export default {
  findModem,
  addModem,
  removeModem,
  getModems
};
