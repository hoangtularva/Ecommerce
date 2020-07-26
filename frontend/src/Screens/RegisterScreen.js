import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function RegisterScreen(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  }
  return (
    <div>
      <section className="shop checkout section">
        <div className="container">
          <div className="checkout-form">
            <h2>Sign Up</h2>

            {/* Form */}
            <form className="form" onSubmit={submitHandler}>
              <h4>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
              </h4>
              <div className="row">

                <div className="col-lg-7 col-md-6 col-6">
                  <div className="form-group">
                    <label>Name<span>*</span></label>
                    <input type="name" id="name" name="name" onChange={(e) => setName(e.target.value)} />
                  </div>
                </div>
                
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

                <div className="col-lg-7 col-md-6 col-6">
                  <div className="form-group">
                    <label>Comfirm Password<span>*</span></label>
                    <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)} />
                  </div>
                </div>

                <div className="col-12">
                  <button type="submit" className="btn">Signup</button>
                </div>
                <div className="col-12">
                  <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect}> Already have an account? Sign In</Link>
                </div>
              </div>
            </form>
            {/*/ End Form */}
          </div>
        </div>
      </section>
      {/*/ End Register */}

    </div>
  );
}
export default RegisterScreen;