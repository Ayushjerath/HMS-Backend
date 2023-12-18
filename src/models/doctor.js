const mongoose = require('mongoose');
const { BOOLEAN } = require('sequelize');

const doctorSchema = new mongoose.Schema({
    docId : {
        type : String,
        required : true,
        unique : true,
    },
    docName : {
        type : String,
        required : true,
    },
    docDOB : {
        type : Date,
        required : true,
    },
    docGender : {
        type : String,
        required : true,
    },
    docEmail : {
        unique : true,
        type : String,
        required : true,
    },
    docPhone : {
        type : String,
        required : true,
    },
    docSpeciality : {
        type : String,
        required : true,
    },
    docCurrentStatus : {
        type : Boolean,
        required : true,
    },
    docRating : {
        type : Number,
        required : false,
    },
    docStreet : {
        type : String,
        required : false,
    },
    docCity : {
        type : String,
        required : false,
    },
    docState : {
        type : String,
        required : false,
    },
    docCountry : {
        type : String,
        required : false,
    },
    docZip : {
        type : String,
        required : false,
    },
    docImage : {
        type : String,
        required : false,
    },
    docDescription : {
        type : String,
        required : false,
    },
    docPassword : {
        type : String,
        required : true,
    },
    docActive : {
        default : true,
        type : Boolean,
        required : true,
    },
    adminRole : {
        type : Boolean,
        required : true,
    },
},{timestamps : true});

const Doctor = mongoose.model('Doctor',doctorSchema);

module.exports = Doctor;