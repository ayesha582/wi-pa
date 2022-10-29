import React from "react";
import { createUseStyles } from "react-jss";
import Landing from './sections/Landing'
import Event from './sections/Event'

const useStyles = createUseStyles({

});

const Layout = ({eventConfig}) => {
    const classes = useStyles({})
    return <>
       <Landing />
       {eventConfig && <Event eventConfig={eventConfig}/>}
    </>
}

export default Layout