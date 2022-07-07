import React from 'react';


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

const SignIn = () => {

return(
  <form className="form-signin">
    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label for="inputEmail" className="sr-only">Email address</label>
    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
    <label for="inputPassword" className="sr-only">Password</label>
    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    <p className="mt-5 mb-0 text-muted">&copy; 2017-2020</p>
    <p className="mb-3 text-muted">- Meghanandan</p>
  </form>
)
}

export default SignIn;