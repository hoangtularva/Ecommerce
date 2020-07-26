import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { savePayment } from '../actions/cartActions';


function PaymentScreen(props) {

    const [paymentMethod, setPaymentMethod] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePayment({ paymentMethod }));
        props.history.push('placeorder');
    };
    return (
        <div>

            {/* Start Checkout */}
            <section className="shop checkout section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-12">
                            <div className="checkout-form">
                            </div>
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="order-details">
                                {/*/ End Order Widget */}
                                {/* Order Widget */}
                                <form onSubmit={submitHandler}>
                                    <div className="single-widget">
                                        <h2>Payments</h2>
                                        <div className="content">
                                            <div className="checkbox">
                                                <input type="radio" name="paymentMethod" id="paymentMethod" value="master cart" onChange={(e) => setPaymentMethod(e.target.value)}></input> Master Cart
                                            </div>
                                            <div className="checkbox">
                                                <input type="radio" name="paymentMethod" id="paymentMethod" value="visa" onChange={(e) => setPaymentMethod(e.target.value)}></input> Visa
                                            </div>
                                            <div className="checkbox">
                                                <input type="radio" name="paymentMethod" id="paymentMethod" value="paypal" onChange={(e) => setPaymentMethod(e.target.value)}></input> PayPal
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Order Widget */}
                                    {/* Payment Method Widget */}
                                    <div className="single-widget payement">
                                        <div className="content">
                                            <img src="images/payment-method.png" alt="#" />
                                        </div>
                                    </div>
                                    {/*/ End Payment Method Widget */}
                                    {/* Button Widget */}
                                    <div className="single-widget get-button">
                                        <div className="content">
                                            <div className="button">
                                                <button type="submit" className="btn">Place Order</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {/*/ End Button Widget */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*/ End Checkout */}
        </div>

    );
};

export default PaymentScreen;