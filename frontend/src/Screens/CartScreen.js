import React, { useEffect } from 'react';
import { addToCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

function CartScreen(props) {

 //Fetch Server Data 
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

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
                    <th className="text-center">PRICE</th>
                    <th className="text-center">QUANTITY</th>
                    <th className="text-center">TOTAL</th>
                    <th className="text-center"><i className="ti-trash remove-icon" /></th>
                  </tr>
                </thead>
                {
                  cartItems.length === 0 ? <h1>Cart Emty!</h1>
                  :
                  cartItems.map(item => <tbody>
                  <tr>
                    <td className="image" data-title="No"><img src={item.image} alt="#" /></td>
                    <td className="product-des" data-title="Description">
                    <p className="product-name"><a href="#">{item.name}</a></p>
                    <p className="product-des">Category: {item.category}</p>
                    </td>
                    <td className="price" data-title="Price"><span> {item.price} </span></td>
                    <td className="qty" data-title="Qty">
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </td>
                    <td className="total-amount" data-title="Total"><span>$220.88</span></td>
                    <td className="action" data-title="Remove"><a href="#"><i className="ti-trash remove-icon" /></a></td>
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
                        <li>Cart Subtotal<span>$330.00</span></li>
                        <li>Shipping<span>Free</span></li>
                        <li>You Save<span>$20.00</span></li>
                        <li className="last">You Pay<span>$310.00</span></li>
                      </ul>
                      <div className="button5">
                        <a href="#" className="btn">Checkout</a>
                        <a href="#" className="btn">Continue shopping</a>
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