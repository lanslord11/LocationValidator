const mongoose = require("mongoose");

const dataEntrySchema = new mongoose.Schema({

    latitude: {
        type: Number,
        required: [true, "Please Enter latitude"],
    },
    longitude: {
        type: Number,
        required: [true, "Please Enter longitude"],
    },
    radius: {
        type: Number,
        required: [true, "Please Enter distance"],
    },
    
});



module.exports = mongoose.model("DataEntry", dataEntrySchema);