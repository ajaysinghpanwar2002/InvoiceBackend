#Invoice Backend

The assignment we would like you to create is an invoice creator. You have to create
below APIs:
1. Create an account ( http://localhost:5000/api/createaccount ) - Account is to be
created with these fields - Name, balances (balance is an array with object with two
fields year and balance. Year being a string of years from “2022-23” till year “2024-25”,
so there will be three objects. And balance is the number field.)
2. Create an invoice ( http://localhost:5000/api/createinvoice ) - These fields should be
there in the request.
● Date
● CustomerId - this will be one of accountId.
● AccountArray - An array of objects. Each object has two fields - accountId and
amount. Amount can be negative also. There can be any number of objects from 1
to n.
● Total Amount
● Invoice number - string
● Year - String of year like “2022-23” or “2023-24”
Validations to be added before saving invoice.
● All fields are compulsory.
● Total of amount in AccountArray should be equal to Total Amount.
● Account array should have at least one object.
● All accountId should be present in DB.
● Same invoice number should not be already present for the same year.
After saving entry, the amount in all accounts in accountarray should be incremented
with the respective amount for the concerned year. For example, the year is “2022-23”,
so balances of all accounts should be updated for the year 2022-23.
3. List invoices ( http://localhost:5000/api/invoicelist ) - This api should have the
following request parameters.
● Skip
● Limit
● Search Text - This should search in invoice number, account name (of any
accountId) and any amount. Amount should also be partially matched as well.
For example, if the search text is 2000, then it should match 2000, 20000 and
20001. And if the search text is 2000.00 then also it should match 2000.
APIs should be open and do not require authorisation of any kind.

## Technology stack 
● Node js
● Express
● Mongodb
● Mongoose