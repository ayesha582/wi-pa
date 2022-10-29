import React from 'react';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    mapCta: {
        border: 'none',
        padding: '11px 14px',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
    },
});

const Button = props => {
    const classes = useStyles({});

    const { children, ...rest } = props;

    return <button className={classes.mapCta} {...rest}>
        {children}
    </button>;
};

export default Button;