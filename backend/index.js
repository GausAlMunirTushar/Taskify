const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();
const port = 8080;

app.listen(port, ()=>{
    console.log(`Server is Running on http://localhost:${port}`)
})