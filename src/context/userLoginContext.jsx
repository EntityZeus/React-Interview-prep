import { createContext, useState } from 'react';

const UserLoginContext = createContext({});

const UserLoginContextProvider = ({children}) => {
    const [userData, setUserData] = useState({});

    return (
        <UserLoginContext value={[userData, setUserData]}>
            {children}
        </UserLoginContext>
    )
}

export {UserLoginContextProvider, UserLoginContext};