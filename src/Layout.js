import React from "react";
import { createUseStyles } from "react-jss";
import Landing from './sections/Landing';
import Event from './sections/Event';

import rsvp from './img/rsvp.png';

const RSVP_FORM_URL = 'https://docs.google.com/forms/d/1HN0MfGDw3bqyF3SRXkCaAVxW6hnTVYXcUQD4zGsLHhs/edit';

const useStyles = createUseStyles({
    rsvpIconWrapper: {
        position: 'fixed',
        bottom: '32px',
        left: '95%',
        maxWidth: 'fit-content',
        cursor: 'pointer',
    },
    rsvpIcon: {
        height: '64px',
    }
});

const Layout = ({ eventConfig }) => {
    const classes = useStyles({});

    const openRsvpForm = () => window.open(RSVP_FORM_URL, '_blank');

    return <div>
        <Landing />
        {eventConfig && <Event eventConfig={eventConfig} />}
        <div className={classes.rsvpIconWrapper} onClick={openRsvpForm}>
            <img src={rsvp} alt="rsvp-icon" className={classes.rsvpIcon} />
            <a href="https://www.flaticon.com/free-icons/rsvp" title="rsvp icons" style={{ display: 'none' }}>Rsvp icons created by Freepik - Flaticon</a>
        </div>
    </div>
}

export default Layout