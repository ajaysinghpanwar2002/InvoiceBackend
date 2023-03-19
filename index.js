const express = require('express')
const connectToMongo = require('./Database')
var cors = require('cors')
require('dotenv').config()
const app = express()
connectToMongo();
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const createAccountRouter = require('./routes/createaccount')
app.use('/api/createaccount', createAccountRouter)

const createInvoiceRouter = require('./routes/createinvoice')
app.use('/api/createinvoice', createInvoiceRouter)

const inVoiceRouter = require('./routes/invoicelist')
app.use('/api/invoicelist', inVoiceRouter)

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
}) 