import React, { useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isEmail, isEmpty, isMobile, errorToast } from '../../helper/FormValid';
import {registrationRequest} from '../../api/api'

const Registration = () => {

    let emailRef, firstNameRef, lastNameRef, mobileNumberRef, passwordRef = useRef();
    let navigate = useNavigate();

    const onRegistration = ()=>{
        let email = emailRef.value;
        let firstName = firstNameRef.value;
        let lastName = lastNameRef.value;
        let mobileNumber = mobileNumberRef.value;
        let password = passwordRef.value;
        
        if(isEmail(email)){
            errorToast("Valid Email Address Required")
        }
        else if(isEmpty(firstName)){
            errorToast("First Name Required")
        }
        else if(isEmpty(lastName)){
            errorToast("Last Name Required")
        }
        else if(!isMobile(mobileNumber)){
            errorToast("Valid Mobile Number Required")
        }
        else if(isEmpty(password)){
            errorToast("Password Required")
        }
        else{
            registrationRequest(email, firstName, lastName, mobileNumber, password, " ").then((result)=>{
                if(result === true){
                    navigate('/login')
                }
            })
        }

    }

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
                                        <input ref={(input)=>emailRef=input} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className="col-md-12 p-2">
                                        <input ref={(input)=>firstNameRef=input} placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-12 p-2">
                                        <input ref={(input)=>lastNameRef=input} placeholder="Last Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-12 p-2"> 
                                        <input ref={(input)=>mobileNumberRef=input} placeholder="Mobile" className="form-control animated fadeInUp" type="mobile"/>
                                    </div>
                                    <div className="col-md-12 p-2">
                                        <input ref={(input)=>passwordRef=input} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                    </div>

                                </div>
                                <div lassName="row mt-2 p-0">
                                    <div className="col-md-12 p-2">
                                        <button onClick={onRegistration} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Complete</button>
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