import React from 'react';
import { createUseStyles } from "react-jss";


const Button = props => {

    const { children, ...rest } = props;

    return <button {...rest}>
        {children}
    </button>;
};

export default Button;