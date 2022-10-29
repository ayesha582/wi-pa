import React, { useRef } from "react";
import { createUseStyles } from "react-jss";
import { motion, useTransform, useViewportScroll, useInView } from 'framer-motion';
import cx from 'classnames';


const useStyles = createUseStyles({
    flexWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    fab: {
        width: 'calc(calc(100vw / 3) - 4px)',
        border: '2px white solid',
        padding: '100px 0'
    },
    selectionContainer: {
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(-45deg, #061A26, #143840);',
        color: 'white',
        overflow: 'auto',
    },
    tableHead: {
        padding: '100px 0',
        fontSize: '50px',
    },
    name: {
        fontSize: '36px'
    },
    dateTime: {
        fontFamily: 'Quicksand, sans-serif;',
    },
    card: {
        width: '150px',
        height: '150px',
        borderRadius: ' 1em',
        backgroundColor: '#f9f07e',
        margin: 'auto',
    },
    parallaxContainer: {
        height: '300vh'
    },
    appearCard: {
        height: '400px',
        width: '300px',
        // background: '#F20574',
        borderRadius: '5px',
    },
    haldi: {
        background: 'linear-gradient(-45deg, #F2CB05, #F2B705);',
    },
    wedding: {
        background: 'linear-gradient(-45deg, #011640, #021F59);',
    },
    reception:{
        background: 'linear-gradient(-45deg, #592202, #260B01);',
    },
    cardsContainer: {
        marginLeft: '10vw',
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)'
    },
    topCard: {
        // background: '#F28705',
        position: 'absolute',
        left: '120px',
        top: '30px'
    },
    cardContent: {
        transform: 'translateY(50%)',
        fontSize: '16px',
    },
    descTitle: {
        fontSize: '54px'
    },
    desc: {
        margin: '10px 0',
        fontFamily: 'Quicksand, sans-serif'
    },
    flipContainer:{
        float: 'right',
        marginLeft: 'unset',
        marginRight: '26vh',
    }
});



const EventSection = ({ primaryColor, seconDaryColor, isFlipped = false, name, date, time, cardStyle = {} }) => {
    const classes = useStyles({})

    const ref = useRef(null)
    const ref2 = useRef(null)
    const inView = useInView(ref, {
        once: false
    });

    const variants = {
        visible: { opacity: 1, scale: 1, transform: 'rotate(-20deg)' },
        hidden: {
            opacity: 0,
            scale: 0.65
        }
    };

    const variants2 = {
        visible: { scale: 1, transform: 'rotate(20deg)' },
        hidden: {
            scale: 0.65
        }
    };
    return (
        <div className={cx(isFlipped ?cx(classes.flipContainer, classes.cardsContainer) :classes.cardsContainer)}>
            <motion.div
                animate={inView ? 'visible' : 'hidden'}
                variants={variants}
                transition={{ duration: 1, ease: 'easeOut' }}
                ref={ref}
                className={classes.appearCard}
                style={{ background: seconDaryColor, ...cardStyle }}
            >

            </motion.div>
            <motion.div
                animate={inView ? 'visible' : 'hidden'}
                variants={variants2}
                transition={{ duration: 1, ease: 'easeOut' }}
                ref={ref2}
                className={cx(classes.appearCard, classes.topCard)}
                style={{ background: primaryColor, ...cardStyle }}
            >
                <div className={classes.cardContent}>
                    <div className={classes.descTitle}>{name}</div>
                    <div className={classes.desc}>{`${date}`}</div>
                    <div className={classes.desc}>{`${time} onwards`}</div>
                </div>
            </motion.div>
        </div>
    )
}


const Event = ({eventConfig}) => {
    const classes = useStyles({})

    return eventConfig.map(e =>
        <section className={cx(classes[`${e.containerClass}`], classes.selectionContainer)}>
            <EventSection {...e} />
        </section>
        )
}

export default Event
