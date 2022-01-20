const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
const environment = process.env.NODE_ENV;
console.log(`Running a ${environment} environment`);
console.log(`Your port is ${port}`);
