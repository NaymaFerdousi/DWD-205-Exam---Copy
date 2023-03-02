const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    department : {
        type: String,
        unique: true
    },
    salary : {
        type: String,
        unique: true
    },
    designation : {
        type: String,
        unique: true
    },
    employee_type : {
        type: String,
        unique: true
    },
 
})

const Employeedb = mongoose.model('employeedb', schema);
const testTables = mongoose.Connection;
console.log(testTables);

module.exports = Employeedb;