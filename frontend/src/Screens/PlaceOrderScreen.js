import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function PlaceOrderScreen(props) {

 //Fetch Server Data 
 
  const cart = useSelector(state => state.cart);

  const { cartItems, shipping, payment } = cart;

  if (!shipping.address) {
    props.history.push("/shipping");
  } else if (!payment.paymentMethod) {
    props.history.push("/payment");
  }

  const dispatch = useDispatch();

  useEffect(() => {
  
  }, []);

  return (
    <div>
      {/* Shopping Cart */}
      <div>
          <h3>
            Shipping
          </h3>
          <div>
            {cart.shipping.address}, {cart.shipping.city},
            {cart.shipping.postalCode}, {cart.shipping.country},
          </div>
        </div>
        <div>
          <h3>Payment</h3>
          <div>
            Payment Method: {cart.payment.paymentMethod}
          </div>
        </div>

      <div className="shopping-cart section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Shopping Summery */}
              <table className="table shopping-summery">
                <thead>
                  <tr className="main-hading">
                    <th>PRODUCT</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                  </tr>
                </thead>
                {
                  cartItems.length === 0 ? <h1>Cart Emty!</h1>
                  :
                  cartItems.map(item => <tbody>
                  <tr>
                    <td className="image" data-title="PRODUCT"><img src={item.image} alt="#" /></td>
                    <td className="product-des" data-title="NAME">
                    <p className="product-name"> <Link to={'/product/' + item.product}>{item.name}</Link></p>
                    <p className="product-des">Category: {item.category}</p>
                    </td>
                    <td className="price" data-title="PRICE"><span> ${item.price} </span></td>
                    <td className="qty" data-title="QUANTITY">
                        {item.qty}
                    </td>
                  </tr>
                </tbody>)
                }
                
              </table>
              {/*/ End Shopping Summery */}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* Total Amount */}
              <div className="total-amount">
                <div className="row">
                  <div className="col-lg-4 col-md-7 col-12">
                    <div className="right">
                      <ul>
                        <li>Cart Subtotal<span>${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</span></li>
                        <li>Shipping<span>Free</span></li>
                      </ul>
                      <div className="button5">
                        <button className="btn" disabled={cartItems.length === 0}>Confirm Order</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ End Total Amount */}
            </div>
          </div>
        </div>
      </div>
      {/*/ End Shopping Cart */}

    </div>
  );
}
export default PlaceOrderScreen;