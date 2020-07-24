import React from 'react';
import data from '../data'

function ProductScreen(props) {
    const product = data.products.find(x => x._id === props.match.params.id);
    return (
        <div>

            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    {/* Product Slider */}
                    <div className="product-gallery">
                        <img src={product.image} alt="#" />
                    </div>
                    {/* End Product slider */}
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="quickview-content">
                        <h2>{product.name}</h2>
                        <div className="quickview-ratting-review">
                            <div className="quickview-ratting-wrap">
                                <div className="quickview-ratting">
                                    <i className="yellow fa fa-star" />
                                    <i className="yellow fa fa-star" />
                                    <i className="yellow fa fa-star" />
                                    <i className="yellow fa fa-star" />
                                    <i className="yellow fa fa-star" />
                                    {product.rating} Stars
                                    </div>
                                <a href="#"> ({product.numReviews} Reviews)</a>
                            </div>
                            <div className="quickview-stock">
                                <span><i className="fa fa-check-circle-o" /> in stock</span>
                            </div>
                        </div>
                        <h3>{product.price}</h3>
                        <div className="quickview-peragraph">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam.</p>
                        </div>

                        <div className="quantity">
                            Quantity: <select>
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>
                        <div className="add-to-cart">
                            <a href="#" className="btn">Add to cart</a>
                            <a href="#" className="btn min"><i className="ti-heart" /></a>
                            <a href="#" className="btn min"><i className="fa fa-compress" /></a>
                        </div>
                        <div className="default-social">
                            <h4 className="share-now">Share:</h4>
                            <ul>
                                <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                                <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                                <li><a className="youtube" href="#"><i className="fa fa-pinterest-p" /></a></li>
                                <li><a className="dribbble" href="#"><i className="fa fa-google-plus" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ProductScreen;