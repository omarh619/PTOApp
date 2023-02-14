
const mongoose = require('mongoose');
const ticketListSchema = new mongoose.Schema({
startDate: {
    type: String,
    required: true
},
endDate: {
    type: String,
    required: true
},
severity: {
    type: String,
    required: true
},
description: {
    type: String,
    required: false
},
employeeID: {
    type: Number,
    required: true
},
status: {
    type: String,
    default: 'Pending Approval'
},
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  firstName: {
    type: String,
    required: true
},
lastName: {
    type: String,
    required: true
},
date: {
    type: Date,
    default: Date.now
}
})
module.exports = mongoose.model('TicketList',ticketListSchema,'tickets');