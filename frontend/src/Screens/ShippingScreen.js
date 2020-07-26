import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
// import CheckoutSteps from '../components/CheckoutSteps';

function ShippingScreen(props) {

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country }));
    props.history.push('payment');
  }
  return <div>
    {/* Start Checkout */}
    {/* <CheckoutSteps step1 step2 ></CheckoutSteps> */}
    <section className="shop checkout section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="checkout-form">
              <h2>Information</h2>
              {/* Form */}
              <form className="form" method="post" onSubmit={submitHandler}>
                <div className="row">

                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <label>Address<span>*</span></label>
                      <input type="text" name="address" placeholder required="required" onChange={(e) => setAddress(e.target.value)} />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <label>City<span>*</span></label>
                      <input type="text" name="city" placeholder required="required" onChange={(e) => setCity(e.target.value)} />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <label>Postal Code<span>*</span></label>
                      <input type="text" name="post" placeholder required="required" onChange={(e) => setPostalCode(e.target.value)} />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <label>Country<span>*</span></label>
                      <input type="text" name="country" placeholder required="required" onChange={(e) => setCountry(e.target.value)} />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn">Payment</button>
              </form>
              {/*/ End Form */}
            </div>
          </div>

        </div>
      </div>
    </section>
    {/*/ End Checkout */}
  </div>

}
export default ShippingScreen;