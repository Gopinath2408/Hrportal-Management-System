const mongoose = require('mongoose');

const NewleaveSchema = new mongoose.Schema({
    check_in: {
        type: Date,
        default: Date.now
    },
    check_out: {
        type: Date,
        default: null
    }
});


NewleaveSchema.methods.updateCheckOut = function() {
    this.check_out = new Date(); 
    return this.save(); 
};

module.exports = mongoose.model("Attendance", NewleaveSchema);


// const mongoose = require('mongoose');

// const NewleaveSchema = new mongoose.Schema({
//     check_in:
//     {type: Date,
//     default:Date.now
//     } ,

//     check_out: {
//         type: Date,
//         default: Date.now 
//     }
// });

// module.exports = mongoose.model("Attendance", NewleaveSchema);
