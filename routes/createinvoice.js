const express = require('express');
const router = express.Router();
const Invoice = require('../models/createinvoice');

router.get('/', async (req, res) => {
    try {
        // Extract data from the request body
        const { date, customerId, accountArray, totalAmount, invoiceNumber, year } = req.body;

        // Validate request data
        if (!date || !customerId || !accountArray || !totalAmount || !invoiceNumber || !year) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        if (accountArray.length === 0) {
            return res.status(400).json({ message: 'Account array should have at least one object' });
        }
        // Check if all account IDs are present in the database
        const accountIds = accountArray.map((account) => account.accountId);
        const accounts = await Account.find({ _id: { $in: accountIds } });
        if (accounts.length !== accountIds.length) {
            return res.status(400).json({ message: 'Invalid account ID(s) in the account array' });
        }

        // Create a new invoice object
        const invoice = new Invoice({
            date,
            customerId,
            accountArray,
            totalAmount,
            invoiceNumber,
            year
        });

        // Save the invoice object to the database
        await invoice.save();
        res.status(201).json({ message: 'Invoice created successfully' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
})

module.exports = router
