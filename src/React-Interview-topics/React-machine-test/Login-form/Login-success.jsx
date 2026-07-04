import {useContext} from 'react';
import { UserLoginContext } from '../../../context/userLoginContext';

const LoginSuccess = () => {
    const [userData, setUserData] = useContext(UserLoginContext);
    return (
        <div style = {{ display: 'flex', flexDirection: 'column', padding: '20px'}}>
            <h3>Login Successful</h3>
            <p>Welcome, {userData.email}!</p>
        </div>       
    )
}

export default LoginSuccess;