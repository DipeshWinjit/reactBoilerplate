import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './login.css';

class Login extends Component {

    render() {
        return (
            <div className="login-wrap">
                <div className="container-fluid">
                    <div className="row  align-items-center">
                        <div className="col-sm">
                            <div className="login-logo text-center">

                            </div>
                        </div>
                        <div className="col-sm login-col">
                            <div className="login-form">
                                <h4 className="mr-b60">LOGIN</h4>
                                <form>
                                    <div className="form-group input-field mr-b50">
                                        <input type="email" name="email" autoFocus autoComplete="off" className="form-control" placeholder="Email ID*" required />

                                    </div>
                                    <div className="form-group input-field mr-b50">
                                        <div className="d-flex">
                                            <input type="password" name="password" autoComplete="off" className="form-control" placeholder="Password*" required />



                                        </div>


                                    </div>
                                    <NavLink to={'/admin/dashboard'}>
                                        <button type="button" className="login-btn">Login</button>
                                    </NavLink>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Login;
