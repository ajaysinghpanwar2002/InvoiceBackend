const express = require('express');
const router = express.Router();
const Invoice = require('../models/invoicelist');

router.get('/', async (req, res) => {
    try {
        const skip = parseInt(req.query.skip) || 0;
        const limit = parseInt(req.query.limit) || 10;
        const searchText = req.query.searchText || '';

        const regexSearchText = new RegExp(searchText, 'i');

        const query = {
            $or: [
                { invoiceNumber: regexSearchText },
                { amount: regexSearchText },
                { account: { $in: await Account.find({ name: regexSearchText }).distinct('_id') } }
            ]
        };

        const invoices = await Invoice.find(query)
            .skip(skip)
            .limit(limit);

        res.json({
            success: true,
            data: invoices
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
})

module.exports = router