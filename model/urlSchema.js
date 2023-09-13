const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    siteUrl: String,
    totalRequest: [{timeStamp: Number }],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
}, { timestamps: true })

const Url = mongoose.model('urlShort', urlSchema);

module.exports = Url;