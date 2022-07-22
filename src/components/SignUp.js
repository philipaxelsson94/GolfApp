import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, {useState} from "react";
import app from "../firebase";


const SignUp = () => {


    const auth = getAuth(app);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                alert("created an account");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode);
                alert(errorMessage);
                // ..
            });
    }

    return(
        <div className="form-signin">
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
            <button onClick={signUp} className="btn btn-lg btn-primary btn-block">Sign up</button>
        </div>
    )
}

export default SignUp;