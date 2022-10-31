import React from "react";
import { createUseStyles } from "react-jss";
// import bgImage from '../img/landing-bg.JPG'

const useStyles = createUseStyles({
    sectionHead: {
        width: '100vw',
        height: '100vh',
        // backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover'
    },
    title: {
        fontFamily: 'Quicksand, sans-serif;',
        fontSize: '30px',
        margin: '0',
        fontWeight: '400'
    },
    centerContent: {
        position: "absolute",
        zIndex: '1',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        padding: '50px',
        width: 'calc(100vw - 100px)',
        backgroundColor: 'rgba(255,255,255,0.5)',
        color: '#2A4C59'
    },
    heading: {
        fontSize: '50px',
        margin: '30px 0',
        fontSize: '72px'
    },
    textPara:{
        fontFamily: 'Quicksand, sans-serif;',
        fontSize: '20px',
        fontWeight: '500'
    }
});

const SectionLanding = () => {
    const classes = useStyles({})
    return (
        <section className={classes.sectionHead}>
            <div className={classes.centerContent}>
                <h3 className={classes.title}>THE WEDDING OF</h3>
                <h1 className={classes.heading}>Ayesha & Prem</h1>
                <div className={classes.textPara}>14th FEB 2023</div>
            </div>
        </section>
    )
}

export default SectionLanding