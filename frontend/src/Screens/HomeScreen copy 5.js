import React, { useState, useEffect } from 'react';
//router-dom
import { Link } from 'react-router-dom';
//Link data
// import data from '../data'
//import axios to request HTTP
//import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions'

function HomeScreen(props) {

  //Fetch Server Data 
  // const [products, setProduct] = useState([]);
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
    // const fetchData = async () => {
    //   const {data} = await axios.get("/api/products");
    //   setProduct(data);
    // }
    // fetchData();
    return () => {
      //
    };
  }, [])

    //Link to cart
    const [qty] = useState(1);

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
          {/* Slider Area */}
          <section className="hero-slider">
            {/* Single Slider */}
            <div className="single-slider">
              <div className="container">
                <div className="row no-gutters">
                  <div className="col-lg-9 offset-lg-3 col-12">
                    <div className="text-inner">
                      <div className="row">
                        <div className="col-lg-7 col-12">
                          <div className="hero-text">
                            <h1><span>UP TO 50% OFF </span>Balo Summer</h1>
                            <div className="button">
                              <a href="#" className="btn">Shop Now!</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/ End Single Slider */}
          </section>
          {/*/ End Slider Area */}

          {/* Start Small Banner  */}
          <section className="small-banner section">
            <div className="container-fluid">
              <div className="row">
                {/* Single Banner  */}
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-banner">
                    <img src="https://www.mrvui.vn/Data/Sites/1/media/c%C3%A1c-h%C3%A3ng-balo-n%E1%BB%95i-ti%E1%BA%BFng/17-adidas-(3).jpg" alt="#" />
                  </div>
                </div>
                {/* /End Single Banner  */}
                {/* Single Banner  */}
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-banner">
                    <img src="https://www.mrvui.vn/Data/Sites/1/media/c%C3%A1c-h%C3%A3ng-balo-n%E1%BB%95i-ti%E1%BA%BFng/c%C3%A1c-h%C3%A3ng-balo-n%E1%BB%95i-ti%E1%BA%BFng-(1).jpg" alt="#" />
                  </div>
                </div>
                {/* /End Single Banner  */}
                {/* Single Banner  */}
                <div className="col-lg-4 col-12">
                  <div className="single-banner tab-height">
                    <img src="https://www.mrvui.vn/Data/Sites/1/media/c%C3%A1c-h%C3%A3ng-balo-n%E1%BB%95i-ti%E1%BA%BFng/2-eastpak-(2).jpg" alt="#" />
                    <div className="content">
                      <p>Flash Sale</p>
                      <h3>Mid Season <br /> Up to <span>40%</span> Off</h3>
                      <a href="#">Discover Now</a>
                    </div>
                  </div>
                </div>
                {/* /End Single Banner  */}
              </div>
            </div>
          </section>
          {/* End Small Banner */}

          {/* Start Product Area */}
          <div className="product-area section">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-title">
                    <h2>Products List</h2>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="product-info">
                    <div className="tab-content" id="myTabContent">
                      {/* Start Single Tab */}
                      <div className="tab-pane fade show active" id="man" role="tabpanel">
                        <div className="tab-single">
                          <div className="row">
                            {/* Render Product */}
                            {
                              products.map(product => <div key={product._id} className="col-xl-3 col-lg-4 col-md-4 col-12">
                                <div className="single-product">
                                  <div className="product-img">

                                    <Link to={'/product/' + product._id}>
                                      <img className="default-img" src={product.image} alt="#" />
                                      <img className="hover-img" src={product.image} alt="#" />
                                    </Link>

                                    <div className="button-head">
                                      <div className="product-action">
                                        <Link  title="Quick View" to={'/product/' + product._id}>
                                          <i className=" ti-eye" /><span>Quick Shop</span>
                                        </Link>
                                        <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                        <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                      </div>
                                      <div className="product-action-2">
                                      {product.countInStock > 0 ? 
                                      <Link title="Add to cart" to={'/cart/' + product._id + "?qty=" + qty}>Add to cart</Link>
                                      :
                                        <div>Out stock</div>
                                      }
                                      </div>
                                    </div>
                                  </div>
                                  <div className="product-content">
                                    <h3><Link to={'/product/' + product._id}>{product.name}</Link></h3>
                                    <div className="product-price">
                                      <span>${product.price}</span>
                                    </div>
                                    <div class="product-brand">{product.brand}</div>
                                    <div class="product-rating">{product.rating} Stars ({product.numReviews})</div>
                                  </div>
                                </div>
                              </div>
                              )}

                          </div>
                        </div>
                      </div>
                      {/*/ End Single Tab */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Product Area */}
        </div>
      );
};

export default HomeScreen;