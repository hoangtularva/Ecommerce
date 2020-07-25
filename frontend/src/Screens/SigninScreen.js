import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';


function SigninScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {

        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }
    return (
        <div>
            <section className="shop checkout section">
                <div className="container">
                    <div className="checkout-form">
                        <h2>Sign-In</h2>
                        {/* Form */}
                        <form className="form" onSubmit={submitHandler}>
                            <div className="row">
                                <div className="col-lg-7 col-md-6 col-6">
                                    <div className="form-group">
                                        <label>Email<span>*</span></label>
                                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-6 col-6">
                                    <div className="form-group">
                                        <label>Password<span>*</span></label>
                                        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="btn">Signin</button>
                                </div>
                                <div className="col-12">
                                    <Link to="/register">Don't have an account? Sign Up</Link>
                                </div>
                            </div>
                        </form>
                        {/*/ End Form */}
                    </div>
                </div>
            </section>
            {/*/ End Checkout */}

        </div>
    );
};
export default SigninScreen;