import React from 'react';
import './Input.css';
import PropTypes from 'prop-types';


function Input({type,placeholder,name,size,error,...props}) {
    return (
        <div>

        
        <input type={type} placeholder={placeholder} name={name} className={["input",`input-${size}` ].join( ' ')} />
        <span className="error">{error}</span>
        </div>
    
    )
}

Input.propTypes = {
    type:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    size:PropTypes.string.isRequired,
    error:PropTypes.string
}

export default Input;
