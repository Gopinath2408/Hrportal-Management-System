// const mongoose=require('mongoose');

// const LeaveSchema=new mongoose.Schema({
//     LeaveType:String,
//     Fromdate:String,
//     Todate:String,
//     Description:String
// });

// module.exports=mongoose.model("Leave_data",LeaveSchema)

const mongoose = require('mongoose');

const LeaveSchema = new mongoose.Schema({
    LeaveType: String,
    Fromdate: String,
    Todate: String,
    Description: String
});

module.exports = mongoose.model("Leave_datas", LeaveSchema);
