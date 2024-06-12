const mongoose = require('mongoose');

const NewempSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Position: String,
    Salary: String
});

module.exports = mongoose.model("Employee_Details", NewempSchema);