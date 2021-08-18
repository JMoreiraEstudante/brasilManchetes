'use strict';
// Import mongoose
const mongoose = require("mongoose");

// Declare schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
const ScreenshotSchema = new Schema({
    jornal: {
        type: String,
    },
    data: {
        type: Date,
    },
    imagem: {
        type: Buffer
    }
});

// create and export model
module.exports = mongoose.model("screenshot", ScreenshotSchema, "screenshot");