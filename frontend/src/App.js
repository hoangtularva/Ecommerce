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
import { useSelector } from 'react-redux';
import RegisterScreen from './Screens/RegisterScreen';
import ProductsScreen from './Screens/ProductsScreen';

function App() {

  //view profile and role admin
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

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
                      <li><i className="ti-email" /> support@shophub.com</li>
                    </ul>
                  </div>
                  {/*/ End Top Left */}
                </div>
                <div className="col-lg-8 col-md-12 col-12">
                  {/* Top Right */}
                  <div className="right-content">
                    <ul className="list-main">
                      <li><i className="ti-location-pin" /> Store location</li>
                      <li><i className="ti-alarm-clock" /> <a href="#">Daily deal</a></li>
                      <li><i className="ti-user" />
                        {userInfo ? (
                          <Link to="/profile">{userInfo.name}</Link>
                        ) : (
                            <Link to="/signin">Sign In</Link>
                          )}
                      </li>
                      <li><i className="ti-power-off" />

                      </li>
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
                  {/* Logo */}
                  <div className="logo">
                    <Link to="/"><img src="images/logo.png" alt="logo" /></Link>
                  </div>
                  {/*/ End Logo */}
                  {/* Search Form */}
                  <div className="search-top">
                    <div className="top-search"><a href="#0"><i className="ti-search" /></a></div>
                    {/* Search Form */}
                    <div className="search-top">
                      <form className="search-form">
                        <input type="text" placeholder="Search here..." name="search" />
                        <button value="search" type="submit"><i className="ti-search" /></button>
                      </form>
                    </div>
                    {/*/ End Search Form */}
                  </div>
                  {/*/ End Search Form */}
                  <div className="mobile-nav" />
                </div>
                <div className="col-lg-8 col-md-7 col-12">
                  <div className="search-bar-top">
                    <div className="search-bar">
                      <select>
                        <option selected="selected">Soft By</option>
                        <option>Newsest</option>
                        <option>Lowest</option>
                        <option>Hightest</option>
                      </select>
                      <form>
                        <input name="search" placeholder="Search Products Here....." type="search" />
                        <button className="btnn"><i className="ti-search" /></button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-12">
                  <div className="right-bar">
                    {/* Search Form */}
                    <div className="sinlge-bar">
                      <a href="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                    </div>
                    <div className="sinlge-bar">
                      <a href="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true" /></a>
                    </div>
                  </div>
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
                                  <li><a href="#">Adidas</a></li>
                                  <li><a href="#">Nike</a></li>
                                  <li><a href="#">Jansport</a></li>
                                  <li><a href="#">Crumpler</a></li>
                                </ul>
                              </li>
                              <li><a href="#">Service</a></li>
                              <li><a href="#">Pages</a></li>
                              <li><Link to="/cart">Carts</Link></li>
                              <li><a href="#">Checkout</a></li>
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
