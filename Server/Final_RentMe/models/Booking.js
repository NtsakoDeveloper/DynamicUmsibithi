const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Room = require('../models/Room')

//boking Schema
const bookingSchema = new Schema({

    endAt: {
        type: Date, 
        required: 'Ending Date is required!'
    },

    startAt: {type: Date, 
             required: 'Start Date is required!'
            },
    totalPrice: Number,
    days: Number,
    guests: Number,
    createdAt: {
        type: Date,
         default: Date.now
        },
    user: {
        type: Schema.Types.ObjectId, ref: 'user'
    },

    roomId:{type:Schema.Types.ObjectId, ref:'room'}

})

//validation to ensure that a room cannot be doule booked
bookingSchema.path('startAt').validate(function(value) {
    //get the room id from the booking
    let roomId = this.roomId;

    //convert the booking dates to a number value
    let newStartAt = value.getTime();
    let newEndAt = this.endAt.getTime();

    //function that checks for double bookings
    let clashesWithExisting = (currentStartAt, currentEndAt, newStartAt, newEndAt) => {
        if(newStartAt >= currentStartAt && newStartAt < currentEndAt ||
            currentStartAt >= newStartAt && currentStartAt < newEndAt){
                throw new Error(
                    `Booking could not be made, there is a clash with a current booking from ${moment(currentStartAt).format('HH:mm')} to ${moment(currentEndAt).format('HH:mm on LL')}`
               )
            }
            return false;
    }

    return Room.findById(roomId)
     .then(room => {
        return room.bookings.every(booking => {
          let currentStartAt = new Date(booking.startAt).getTime();
          let currentEndAt = new Date(booking.endAt).getTime();

          //check for clashes in the booking
          return !clashesWithExisting(currentStartAt,currentEndAt,
            newStartAt,newEndAt)
        })
})

})

const booking = (module.exports= mongoose.Schema('booking',bookingSchema))
