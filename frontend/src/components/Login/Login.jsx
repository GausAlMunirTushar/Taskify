import React, {Fragment, useRef} from 'react';
import {Link} from "react-router-dom";
import { errorToast, isEmail, isEmpty } from '../../helper/FormValid';
import {loginRequest} from '../../api/api'

const Login = () => {

    let emailRef, passRef = useRef();

    const submitLogin = ()=>{
        let email = emailRef.value;
        let password = passRef.value;
        
        if(isEmail(email)){
            errorToast("Invalid Email Address")
        }
        else if(isEmpty(password)){
            errorToast("Password Required")
        }
        else{
            loginRequest(email, password).then((result)=>{
                if(result === true){
                    window.location.href="/"
                }
            })
        }
    }
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-7 center-screen">
                        <div className="card w-90  p-4">
                            <div className="card-body">
                                <h4 className='text-center'>Sign In</h4>
                                <br/>
                                <input ref={(input)=>emailRef=input} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <input ref={(input)=>passRef=input} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <button onClick={submitLogin} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                                <hr/>
                                <div className="text-center w-100">
                                        <Link className="text-center  ms-3 h6 animated fadeInUp" to="/Registration">Sign Up </Link>
                                            <br/>    
                                        <Link className="text-center ms-3 h6 animated fadeInUp" to="/ForgetPass">Forget Password</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Login;