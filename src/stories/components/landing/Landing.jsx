import React from 'react'
import LandingImg from './149573.webp';
import './Landing.css';
import Navbar from '../Navbar/Navbar';
import PropTypes from 'prop-types';



function Landing({user,onLogin,onLogout}) {
    return (
        <div>

            <Navbar user={user} onLogin={onLogin} onLogout={onLogout} ></Navbar>
        
            <div className="landing">
                <img src={LandingImg} alt="" className="landing-img" />
            </div>
        </div>
    )
}

Landing.propTypes = {
    user:PropTypes.shape({}),
    onLogin:PropTypes.func.isRequired,
    onLogout:PropTypes.func.isRequired,
}

Landing.defaultProps = {
    user: null,
  };

export default Landing;
