import React from 'react';
// import data from './data';
// Link route
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
//Link screen
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen'
import SigninScreen from './Screens/SigninScreen';
import { useSelector, useDispatch } from 'react-redux';
import RegisterScreen from './Screens/RegisterScreen';
import ProductsScreen from './Screens/ProductsScreen';
import { logout } from './actions/userActions';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';

function App() {

  //view profile and role admin
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <BrowserRouter>
      <div>

        {/* Header */}
        <header className="header shop">
          {/* Topbar */}
          <div className="topbar">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-12 col-12">
                  {/* Top Left */}
                  <div className="top-left">
                    <ul className="list-main">
                      <li><i className="ti-headphone-alt" /> +060 (800) 801-582</li>
                      <li><i className="ti-email" /> hoangtu@shophub.com</li>
                    </ul>
                  </div>
                  {/*/ End Top Left */}
                </div>
                <div className="col-lg-8 col-md-12 col-12">
                  {/* Top Right */}
                  <div className="right-content">
                    <ul className="list-main">
                      <li><i className="ti-location-pin" /> 53 Vo Van Ngan, Thu Duc, HCM</li>
                      <li><i className="ti-alarm-clock" /> <a href="#">Daily deal</a></li>
                      <li><i className="ti-user" />
                        {userInfo ? (
                          <Link to="/profile">{userInfo.name}</Link>
                        ) : (
                            <Link to="/signin">Sign In</Link>
                          )}
                      </li>
                      {userInfo &&
                      <li><i className="ti-power-off" />
                          <Link onClick={handleLogout}>Logout</Link>
                      </li>}
                      {/* Role user and admin */}
                      {userInfo && userInfo.isAdmin && (
                        <li>
                          Admin: 
                          <Link to="/products"> Manage Products</Link>
                        </li>
                      )}

                    </ul>
                  </div>
                  {/* End Top Right */}
                </div>
              </div>
            </div>
          </div>
          {/* End Topbar */}
          <div className="middle-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-12">
                  <div className="mobile-nav" />
                  </div>
              </div>
            </div>
          </div>
          {/* Header Inner */}
          <div className="header-inner">
            <div className="container">
              <div className="cat-nav-head">
                <div className="row">
                  <div className="col-lg-9 col-12">
                    <div className="menu-area">
                      {/* Main Menu */}
                      <nav className="navbar navbar-expand-lg">
                        <div className="navbar-collapse">
                          <div className="nav-inner">
                            <ul className="nav main-menu menu navbar-nav">
                              <li className="active">
                                <Link to="/">Home</Link>
                              </li>
                              <li><a href="#">Categories<i className="ti-angle-down" /></a>
                                <ul className="dropdown">
                                  <li><Link to="/category/Adidas">Adidas</Link></li>
                                  <li><Link to="/category/Pants">Crumpler</Link></li>
                                  <li><Link to="/category/Nike">Nike</Link></li>
                                  <li><Link to="/category/Jansport">Jansport</Link></li>
                                </ul>
                              </li>
                              <li><a href="/">Service</a></li>
                              <li><a href="/">Pages</a></li>
                              <li><Link to="/">Contact</Link></li>
                              <li><Link to="/cart">Carts</Link></li>
                            </ul>
                          </div>
                        </div>
                      </nav>
                      {/*/ End Main Menu */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ End Header Inner */}
        </header>
        {/*/ End Header */}

        <Route path="/payment" component={PaymentScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/category/:id" component={HomeScreen} />
        <Route path="/products" component={ProductsScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/" exact={true} component={HomeScreen} />

        {/* Start Shop Services Area */}
        <section className="shop-services section home">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="ti-rocket" />
                  <h4>Free shiping</h4>
                  <p>Orders over $100</p>
                </div>
                {/* End Single Service */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="ti-reload" />
                  <h4>Free Return</h4>
                  <p>Within 30 days returns</p>
                </div>
                {/* End Single Service */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="ti-lock" />
                  <h4>Sucure Payment</h4>
                  <p>100% secure payment</p>
                </div>
                {/* End Single Service */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="ti-tag" />
                  <h4>Best Peice</h4>
                  <p>Guaranteed price</p>
                </div>
                {/* End Single Service */}
              </div>
            </div>
          </div>
        </section>
        {/* End Shop Services Area */}

        {/* Start Footer Area */}
        <footer className="footer">
          <div className="copyright">
            <div className="container">
              <div className="inner">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="left">
                      <p>Copyright © 2020 <a href="#" target="_blank">HoangTuIT</a></p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="right">
                      <img src="images/payments.png" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* /End Footer Area */}

      </div>
    </BrowserRouter>
  )
}

export default App;
