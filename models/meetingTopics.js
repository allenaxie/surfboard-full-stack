const mongoose = require('mongoose');

const meetingTopicsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title'],
        maxlength: [50, 'Title can not contain more than 50 characters'],
    },
    timeEstimate: {
        type: Number,
        required: [true, 'Please enter a time estimate'],
    },
    description: {
        type: String,
        required: [true, 'Please enter a description of the meeting'],
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('MeetingTopics', meetingTopicsSchema);