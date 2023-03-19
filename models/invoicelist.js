const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoicelistSchema = new Schema({
    invoiceNumber: {
        type: String,
        required: true
    },
    account: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

const Invoicelist = mongoose.model('Invoicelist', invoicelistSchema);
module.exports = Invoicelist;
