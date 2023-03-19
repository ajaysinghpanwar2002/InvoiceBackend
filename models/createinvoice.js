const mongoose = require('mongoose')
const { Schema } = mongoose

const accountSchema = new Schema({
    accountId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    amount: { type: Number, required: true }
});

const invoiceSchema = new Schema({
    date: { type: Date, required: true },
    customerId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    accountArray: {
        type: [accountSchema], required: true, validate: {
            validator: function (arr) {
                let total = 0;
                arr.forEach(function (obj) {
                    total += obj.amount;
                });
                return total === this.totalAmount;
            },
            message: 'Account array total should be equal to total amount'
        }
    },
    totalAmount: { type: Number, required: true },
    invoiceNumber: { type: String, required: true },
    year: { type: String, required: true },
});

// Unique index on invoice number and year
invoiceSchema.index({ invoiceNumber: 1, year: 1 }, { unique: true });

module.exports = mongoose.model('Invoice', invoiceSchema);