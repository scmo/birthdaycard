import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { useGoogleLogin, useGoogleLogout } from 'react-google-login';
import Button from '@material-ui/core/Button';

// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';

const clientId = process.env.REACT_APP_CLIENT_ID

function Login({ token, setToken }) {

    const onLoginSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        //alert('Logged in successfully welcome {res.profileObj.name} 😍. \n See console for full profile object.');
        setToken(res);
        refreshTokenSetup(res);
    };

    const onLoginFailure = (res) => {
        console.log('Login failed: res:', res);
        alert('Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz');
    };
    const { signIn } = useGoogleLogin({
        onSuccess: onLoginSuccess,
        onFailure: onLoginFailure,
        clientId: clientId,
        isSignedIn: true,
        accessType: 'offline',
        // responseType: 'code',
        // prompt: 'consent',
    });

    const onLogoutSuccess = (res) => {
        console.log('Logged out Success');
        alert('Logged out Successfully ✌');
        setToken(null)
    };

    const onLogoutFailure = () => {
        console.log('Handle failure cases');
        alert('Handle failure cases');
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onLogoutFailure,
    });

    if (!token) {
        return (
            <Button color="inherit" onClick={signIn} >Login</Button>
        );
    } else {
        return (
            <Button color="inherit" onClick={signOut} >Logout</Button>
        );
    }

}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

export default Login;