import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

function CartScreen(props) {

 //Fetch Server Data 
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  //Add cart
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  //Remove cart
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }

  //Checkout
  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  }

  return (
    <div>
      {/* Shopping Cart */}
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
                    <th className="text-center">QUANTITY</th>
                    <th className="text-center">REMOVE</th>
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
                      <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                        {[...Array(item.countInStock).keys()].map(x =>
                          <option key={x + 1} value={x + 1}>{x + 1}</option>
                        )}
                      </select>
                    </td>
                    <td className="action" data-title="REMOVE"><Link onClick={() => removeFromCartHandler(item.product)}><i className="ti-trash remove-icon" /></Link></td>
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
                        <button onClick={checkoutHandler} className="btn" disabled={cartItems.length === 0}>Checkout</button>
                        <Link to="/" className="btn">Continue shopping</Link>
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
export default CartScreen;