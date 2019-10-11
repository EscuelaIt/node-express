const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: Number,
    name: {type:String, required:true}, //Obligatorio
    username: String,
    email: String
});

module.exports = mongoose.model("user", userSchema);