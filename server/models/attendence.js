import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
    empId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    InTime: {
        type: Date
    },
    OutTime: {
        type: Date
    },
    hours: {
        type: Number,
        default: 0
    },
    payment: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ['in', 'out'],
        required: true,
        default: 'out'
    }
});

const AttendanceModel = mongoose.model('attendance', attendanceSchema);

export default AttendanceModel;
