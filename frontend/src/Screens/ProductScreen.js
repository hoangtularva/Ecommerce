import React, { useEffect, useState } from 'react';
//import data from '../data'
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {
    // const product = data.products.find(x => x._id === props.match.params.id);

    //Add redux
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        };
    }, [])

    //Link to cart
    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
    }

    return loading ?
        <div>{/* Preloader */}
            <div className="preloader">
                <div className="preloader-inner">
                    <div className="preloader-icon">
                        <span />
                        <span />
                    </div>
                </div>
            </div>
            {/* End Preloader */}
        </div> : error ? <div> {error} </div> :
            (
                <div>

                    <div className="row no-gutters">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            {/* Product Slider */}
                            <div className="product-gallery">
                                <img className="img-fluid" src={product.image} alt="#" />
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
                                        {product.countInStock > 0 ? 
                                            <span><i className="fa fa-check-circle-o" /> in stock</span>
                                            :
                                            <span> out stock </span>
                                        }
                                       
                                    </div>
                                </div>
                                <h3>${product.price}</h3>
                                <div className="quickview-peragraph">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam.</p>
                                </div>

                                <div className="quantity">
                                    Quantity: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                       {[...Array(product.countInStock).keys()].map(x=>
                                            <option key={x + 1} value={x + 1 }>{x + 1}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="add-to-cart">
                                    {product.countInStock > 0 &&
                                        <a onClick={handleAddToCart} className="btn">Add to cart</a>
                                    }

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