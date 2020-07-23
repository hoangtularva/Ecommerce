import React from 'react';
//Link data
import data from '../data'

function HomeScreen (props) {
    return (
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
                        data.products.map (product => <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src= {product.image} alt="#" />
                                <img className="hover-img" src= {product.image} alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">{product.name}</a></h3>
                              <div className="product-price">
                                <span>{product.price}</span>
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
    );
};

export default HomeScreen;