import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    saveProduct
} from '../actions/productActions';

function ProductsScreen(props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');

    const productSave = useSelector((state) => state.productSave);
    const {
        loading: loadingSave,
        success: successSave,
        error: errorSave,
    } = productSave;

    const dispatch = useDispatch();

    useEffect(() => {

        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveProduct({
                name,
                price,
                image,
                brand,
                category,
                countInStock,
                description,
            })
        );
    };

    return (

        <div className="content content-margined">
            <section className="shop checkout section">
                <div className="container">
                    <div className="checkout-form">
                        <h2>Create Product</h2>

                        {/* Form */}
                        <form className="form" onSubmit={submitHandler}>
                            <h4>
                                {loadingSave && <div>Loading...</div>}
                                {errorSave && <div>{errorSave}</div>}
                            </h4>
                            <div className="row">

                                <div className="col-lg-7 col-md-6 col-6">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="name" id="name" name={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-6 col-6">
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input type="text" name="price" value={price} id="price" onChange={(e) => setPrice(e.target.value)}></input>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-6 col-6">
                                    <div className="form-group">
                                        <label htmlFor="image">Image</label>
                                        <input type="text" name="image" value={image} id="image" onChange={(e) => setImage(e.target.value)}></input>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-6 col-6">
                                    <div className="form-group">
                                        <label htmlFor="brand">Brand</label>
                                        <input type="text" name="brand" value={brand} id="brand"onChange={(e) => setBrand(e.target.value)}></input>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-6 col-6">
                                    <div className="form-group">
                                        <label htmlFor="countInStock">CountInStock</label>
                                        <input type="text" name="countInStock" value={countInStock} id="countInStock" onChange={(e) => setCountInStock(e.target.value)}></input>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-6 col-6">
                                    <div className="form-group">
                                        <label htmlFor="description">Category</label>
                                        <input type="text" name="category" value={category} id="category" onChange={(e) => setCategory(e.target.value)} ></input>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-6 col-6">
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea name="description" value={description} id="description" onChange={(e) => setDescription(e.target.value)}></textarea>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="btn">Create Product</button>
                                </div>
                            </div>
                        </form>
                        {/*/ End Form */}
                    </div>
                </div>
            </section>
            {/*/ End Checkout */}

        </div>
    );
}
export default ProductsScreen;
