import express from 'express';
import data from './data';

const app = express();

//product list
app.get("/api/products", (req, res) => {
    res.send(data.products);
});

//product details
app.get("/api/products/:id", (req, res) => {
    const productID = req.params.id;
    const product = data.products.find(x => x._id === productID);
    if (product) {
        res.send(product);
    }
    else {
        res.status(404).send({ msg: "Error!!" });
    }

});

app.listen(5000, () => { console.log("Server Start http://localhost:5000") });