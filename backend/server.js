import express from 'express';
import data from './data';
//connect mongodb
import dotenv from 'dotenv';
//check input
import bodyParser from 'body-parser';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';

//connect MONGODB
dotenv.config();

const mongodbURL = config.MONGODB_URL;
mongoose.connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch((error) => console.log(error.reason));

//Node server
const app = express();
app.use(bodyParser.json());
//user
app.use("/api/users", userRoute);
//create product (database)
app.use('/api/products', productRoute);


//product list
// app.get("/api/products", (req, res) => {
//     res.send(data.products);
// });

//product details
// app.get("/api/products/:id", (req, res) => {
//     const productID = req.params.id;
//     const product = data.products.find(x => x._id === productID);
//     if (product) {
//         res.send(product);
//     }
//     else {
//         res.status(404).send({ msg: "Error!!" });
//     }

// });

app.listen(5000, () => { console.log("Server Start http://localhost:5000") });