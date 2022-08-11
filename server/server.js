const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//import routes
/*---import routes here---*/

//app
const app = express();

//db

//middlewares
app.use(cors());
app.use(bodyParser.json());

//route middleware

//port
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));