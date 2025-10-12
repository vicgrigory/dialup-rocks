import mongoose from "mongoose";
import modemSchema from "./modem";

mongoose.set("debug", true);

mongoose
  .connect("mongodb://localhost:27017/users", {
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
  }
  return promise;
}

function findModemById(id) {
  return modemSchema.findById(id);
}

function addModem(modem) {
  const modemToAdd = new modemSchema(modem);
  const promise = modemToAdd.save();
  return promise;
}

// Used in getModem, no need for export
function findModemByConnection(connection) {
  return modemSchema.find({ connection: connection });
}

function findModemByBitrate(bitrate) {
  return modemSchema.find({ bitrate: bitrate });
}

export default {
  addModem,
  getModems,
  findModemById,
  findModemByConnection,
  findModemByBitrate,
};
