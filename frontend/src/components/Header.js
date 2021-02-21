import React, {useState} from 'react'
import { Redirect } from "react-router-dom";

export const Header = () => {
    const [redirect, setRedirect] = useState(false);

    const handleOnLogout = () => {
        localStorage.clear(); 
        setRedirect(true);

};
if (redirect) {
    return <Redirect to="/login" />;
}
    return (
        <div>
            Header
            <button onClick={handleOnLogout}>Log out</button>
}
        </div>
    )
}



export default Header;
