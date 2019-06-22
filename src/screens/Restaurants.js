import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Restaurants extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid register-cont1">
                    <div className="">
                        <Navbar />
                        <div className="container px-0 register-cont1-text">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-sm"><FontAwesomeIcon icon="search" /></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="RESTAURANT NAME" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-12">
                                <div className="listing-filter">
                                    <div className="filter-heading py-2 mb-3">
                                        <h6 className="m-0"><FontAwesomeIcon style={{ color: "#9f9f9f" }} icon="utensils" className="mr-2" />Categories</h6>
                                    </div>
                                    <div>
                                        <ul className="filter-list">
                                            <li>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="apple-juice" />
                                                    <label className="custom-control-label" htmlFor="apple-juice">Apple Juice</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="bbq" />
                                                    <label className="custom-control-label" htmlFor="bbq">BB.Q</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="chicken-roast" />
                                                    <label className="custom-control-label" htmlFor="chicken-roast">Chicken Roast</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="hot-dogs" />
                                                    <label className="custom-control-label" htmlFor="hot-dogs">Hot Dogs</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="prawns" />
                                                    <label className="custom-control-label" htmlFor="prawns">Prawns</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="steam-roast" />
                                                    <label className="custom-control-label" htmlFor="steam-roast">Steam Roast</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-12">
                                <h4 className="mb-3">18 Restaurant's Found</h4>
                                <div className="container px-0">
                                    <div className="col-lg-12 col-md-12 col-sm-12 mb-4 px-0">
                                        <div className="container bg-white res-shadow p-3 px-0 mb-3">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-center">
                                                    <img alt="Natural Healthy Food" src={require("../assets/images/listing-logo03.png")} />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 px-0">
                                                    <p>
                                                        <small className="">
                                                            <FontAwesomeIcon icon="star" className="rating mr-1" />
                                                            <FontAwesomeIcon icon="star" className="rating mr-1" />
                                                            <FontAwesomeIcon icon="star" className="rating mr-1" />
                                                            <FontAwesomeIcon icon="star" className="rating mr-1" />
                                                            <FontAwesomeIcon icon="star" className="rating mr-1" />
                                                        </small>
                                                        <small>(1) Review</small>
                                                    </p>
                                                    <h5 className="">Natural Healthy Food</h5>
                                                    <p className=""><small>Apple Juice, Beef Roast, Cheese Burger</small></p>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-12 py-4 px-0">
                                                        <span style={{display: 'inline-block', textAlign: 'center', borderRadius: '3px', border: '1px solid #dddddd', padding: '4px 7px 4px 7px', marginRight: '16px'}} ><FontAwesomeIcon icon="heart" className="text-success" /></span>
                                                        <button type="button" className="btn btn-warning btn-sm text-uppercase">View Menu</button>
                                                        {/* <button type="button" className="btn btn-warning btn-sm text-uppercase">View Menu</button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">

                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}