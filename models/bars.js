const mongoose = require("./connection.js");

const barSchema = new mongoose.Schema({

    barName: {
        type: String,
        required: true
    },
    drink: {
        picture: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    walkabilityScore: {
        type: Number,
        required: true
    },
    ageRequirement: {
        type: Number,
        required: true
    }
});

const Bar = mongoose.model("Bar", barSchema);

module.exports = Bar;