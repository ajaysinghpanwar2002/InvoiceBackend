const express = require('express');
const router = express.Router();
const Account = require('../models/createaccount');

router.get('/', async (req, res) => {
    try {
        const accounts = await Account.find();
        res.json(accounts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
})
router.post('/', async (req, res) => {
    try {
        const { name, balances } = req.body;
        const account = await Account.create({ name, balances });
        res.json(account);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router
