import React, { useState } from 'react';
import './Login.scss';
import Images from '../../constants/Images';
import PropTypes from 'prop-types';
import Auth from '../../apis/Auth';
import { useHistory } from 'react-router';

Login.propTypes = {
    handleSetAuth: PropTypes.func,
};
Login.defaultPropTypes = {
    handleSetAuth: null
}

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConFirm, setPasswordConFirm] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const submitLogin = async (e) => {
        e.preventDefault();
        if (password === passwordConFirm) {
            try {
                const requestAuth = await Auth.login({email, password});
                if (requestAuth.status === 200 && requestAuth.data.success == true) {
                    localStorage.setItem('token', requestAuth.data.token);
                    setTimeout(() => {
                        history.push('/');
                    }, 1000)
                } else {
                    setMessage(requestAuth.data.message)
                }
            } catch (error) {
                setMessage('Thất bại, Thử lại!!')
            }
        } else {
            setMessage('Confirm password không chính xác!');
        }
    }
 
    return (
        <div className="auth">
            <div className="grid wide">
                <div className="row container-form">
                    <div className="col l-4 m-8 c-12">
                        <form className="auth__form" onSubmit={submitLogin}>
                            <div className="header">
                                <img className="header__img" src={Images.LOGO_LOGIN} />
                                <h3>Admin Dasboard</h3>
                            </div>
                            <p className="error-message">{message ? message : null}</p>
                            <div className="body">
                                <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
                                <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
                                <input type="password" placeholder="Confirm Password" required value={passwordConFirm} onChange={e => setPasswordConFirm(e.target.value)} />
                                <div className="remember">
                                    <input type="checkbox" />
                                    <label>remember me</label>
                                </div>
                                <button type="submit">SIGN IN</button>
                                <a className="forgot-pass">forgot password</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;