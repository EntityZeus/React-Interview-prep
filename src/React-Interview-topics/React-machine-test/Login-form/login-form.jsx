import { useState, useContext} from 'react';
import './login-form.css';
import {loginApi} from '../Fake-api/login-form-api';
import { UserLoginContext } from '../../../context/userLoginContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const [useDatail, setUserDetail] = useContext(UserLoginContext);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const target = e.target;
        const formData = new FormData(target);
        try {
            const res = await loginApi({email, password});
            alert('Login Success');
            setUserDetail({email, password});
            navigate('/react-machine-test/login-success');
        } catch (e) {
            setError(e);
        }
    };

    return (
        <div className="login-form-container">
            <h3>Login Form</h3>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" 
                    aria-describedby="emailHelp" name="user-email" required
                    value = {email} onChange={(e) => setEmail(e.target.value)}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" 
                    id="exampleInputPassword1" name="user-password" required
                    value = {password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            { error.length > 0 ? 
                <div className="alert alert-danger" role="alert">
                    {error}
                </div> : ''
            }
        </div>
    )
}

export default LoginForm;