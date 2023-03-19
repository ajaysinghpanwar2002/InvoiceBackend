const mongoose = require('mongoose');
const { Schema } = mongoose;

const AccountSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    balances: [
        {
            year: {
                type: String,
                enum: ['2022-23', '2023-24', '2024-25'],
                required: true,
            },
            balance: {
                type: Number,
                required: true,
            },
        },
    ],
});

const createaccount = mongoose.model('Account', AccountSchema);
module.exports = createaccount;