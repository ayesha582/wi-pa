import React from "react";
import { createUseStyles } from "react-jss";
import Landing from './sections/Landing'
import Event from './sections/Event'

const useStyles = createUseStyles({

});

const Layout = () => {
    const classes = useStyles({})
    return <>
       <Landing />
       <Event />
    </>
}

export default Layout