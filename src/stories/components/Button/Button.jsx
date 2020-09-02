import React from 'react'
import './Button.css';
import PropTypes from 'prop-types';

function Button({color,backgroundColor,size,label,type,onClick,...props}) {
    return (
        <button type={type} className={['btn',`btn-${size}`,`btn-${color}`, `btn-${backgroundColor}`].join( ' ')}  
        onClick={onClick}>
            {label}
        </button>
    )
}

Button.propTypes = {
    color:PropTypes.string,
    backgroundColor:PropTypes.string,
    size:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired
}

Button.defaultProps = {
    size:'medium',
    onClick:undefined
}

export default Button;
