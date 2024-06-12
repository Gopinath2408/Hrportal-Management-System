const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    ProjectName: String,
    TeamLead: String,
    ProjectDeadline: String,
    Team:String,
    TeamRole: String
});

module.exports = mongoose.model("Project_Details", ProjectSchema);