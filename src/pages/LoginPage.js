import React, {useState} from 'react';


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";


const SignIn = () => {
    const auth = getAuth(app);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert("inloggad");
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode);
                alert(errorMessage);
            });
    }

    return(
        <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email address" required autoFocus/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input onChange={(e) => setPassword((e.target.value))} type="password" className="form-control" placeholder="Password" required/>
            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                </label>
            </div>
            <button onClick={logIn} className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    )
}

export default SignIn;