import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import logo from './logo.svg';
import './Navbar.css';


function Navbar({user,onLogin,onLogout}) {
    return (
        <header className="wrapper">
            <div>
                <img src={logo} alt=""/>
            </div>
            <div>
                {user ? (
                    <Button size="small" type="button" onClick={onLogout} label="Logout"></Button>
                ):
                (
                    <Button size="small" type="button" onClick={onLogin} label="Login"></Button>
                )}
            </div>
        </header>
    )
}

Navbar.propTypes = {
    user:PropTypes.shape({}),
    onLogin:PropTypes.func.isRequired,
    onLogout:PropTypes.func.isRequired,
}

Navbar.defaultProps = {
    user: null,
  };
export default Navbar
