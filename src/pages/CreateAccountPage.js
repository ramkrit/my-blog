import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigation = useNavigate();

    const CreateNewAccount = async () => {

        if (password != confirmPassword) {
            setError("Confirm password do not match!");
            return false;
        }

        await createUserWithEmailAndPassword( getAuth(), email, password)
        .then((userCredential) =>{
            setError(`user Created succesfully ${userCredential.user}`);
            navigation('/articale-list');
        })
        .catch((error) =>{
            setError(error.message);
        })
        
    }

    return (
        <>
            <div id="add-comment-form">
                <h1>Create New Account</h1>
                {error && <p className="error-message">{error}</p>}
                <input 
                    placeholder="Your Email Address"
                    value={email} 
                    onChange={e => setEmail(e.target.value)} />
                
                <input 
                    type="password"
                    placeholder="Your Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                <input 
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}/>

                <button onClick={CreateNewAccount}>Submit</button>
                <Link to="/login">Already have account? Click here to log in</Link>
            </div>
        </>
    )
}

export default LoginPage;