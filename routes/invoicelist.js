const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.json({
            "success": true,
            })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
})

module.exports = router