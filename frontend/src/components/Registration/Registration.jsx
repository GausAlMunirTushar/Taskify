import React, {} from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
   
    return (
        <div className="container">
            <div className="row  justify-content-center">
                <div className="col-md-10 col-lg-6 center-screen">
                    <div className="card animated fadeIn w-100 p-4 mt-4">
                        <div className="card-body">
                            <h4 className='text-center'>Sign Up</h4>
                            <div className="container-fluid m-0 p-0">
                                <div className="row m-0 p-0">
                                    <div className="col-md-12 p-2">
                                        <input  placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className="col-md-12 p-2">
                                        <input  placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-12 p-2">
                                        <input  placeholder="Last Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-12 p-2"> 
                                        <input  placeholder="Mobile" className="form-control animated fadeInUp" type="mobile"/>
                                    </div>
                                    <div className="col-md-12 p-2">
                                        <input placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                    </div>

                                </div>
                                <div lassName="row mt-2 p-0">
                                    <div className="col-md-12 p-2">
                                        <button className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Complete</button>
                                    </div>
                                </div>
                                <div className="text-center w-100">
                                        <Link className="text-center  ms-3 h6 animated fadeInUp" to="/Login">Sign In </Link>
                                            <br/>    
                                        <Link className="text-center ms-3 h6 animated fadeInUp" to="/ForgetPass">Forget Password</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Registration;