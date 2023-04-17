import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const [show, setShow] = useState(false);


  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
      })
      .catch(error =>{
        console.log(error)
      })

  };
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSignin}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type={show ? "text" : "password"} name="password" id="password" required />
          <p onClick={() => setShow(!show)}>
            <small>
              {show ? <span>Hide Password</span> : <span>Show Password</span>}
            </small>
          </p>
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p>
        <small>
          New to Ema-john? <Link to="/signup">Create New Account</Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
