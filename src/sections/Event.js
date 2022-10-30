import React, { useRef } from "react";
import { createUseStyles } from "react-jss";
import { motion, useInView } from 'framer-motion';
import cx from 'classnames';
import Button from '../components/Button'

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
        display: 'flex',
        alignItems: 'center'
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
        color: '#2A4C59',
        '& button': {
            background: '#2A4C59',
            color: 'white'
        }
    },
    wedding: {
        background: 'linear-gradient(-45deg, #011640, #021F59);',
    },
    reception: {
        background: 'linear-gradient(-45deg, #592202, #260B01);',
    },
    cardsContainer: {
        marginLeft: '10vw',
        position: 'relative',
        maxWidth: 'fit-content',
    },
    topCard: {
        // background: '#F28705',
        position: 'absolute',
        left: '120px',
        top: '30px'
    },
    cardContent: {
        fontSize: '16px',
        flex: '1'
    },
    descTitle: {
        fontSize: '4rem',
        marginBottom: '20px'
    },
    desc: {
        margin: '10px 0',
        fontFamily: 'Quicksand, sans-serif',
        fontSize: '1.4rem'
    },
    flipContainer: {
        marginRight: '26vh',
    },
    viewMap: {
        border: 'none',
        padding: '11px 14px',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        fontFamily: 'Quicksand, sans-serif',
        marginTop: '30px'
    },
    flip: {
        flexDirection: 'row-reverse'
    },
    address: {
        fontSize: '1.4rem',
        lineHeight: '34px'
    }
});



const CardsArea = ({ primaryColor, seconDaryColor, cardStyle = {}, isFlipped }) => {
    const classes = useStyles({})

    const ref = useRef(null)
    const ref2 = useRef(null)
    const inView = useInView(ref, {
        once: false
    });

    const variants = {
        visible: { opacity: 1, scale: 1, transform: 'rotate(-12deg)' },
        hidden: {
            opacity: 0,
            scale: 0.65
        }
    };

    const variants2 = {
        visible: { scale: 1, transform: 'rotate(12deg)' },
        hidden: {
            scale: 0.65
        }
    };

    return (
        <div className={cx(classes.cardsContainer, isFlipped ? classes.flipContainer : '')}>
            <motion.div
                animate={inView ? 'visible' : 'hidden'}
                variants={variants}
                transition={{ duration: 1, ease: 'easeOut' }}
                ref={ref}
                className={classes.appearCard}
                style={{ background: seconDaryColor }}
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
            </motion.div>

        </div>
    )
}


const Event = ({ eventConfig }) => {
    const classes = useStyles({})

    const viewOnMap = location => () => window.open(location, '_blank');


    return eventConfig.map(e =>
        <section className={cx(classes[`${e.containerClass}`], classes.selectionContainer, e.isFlipped ? classes.flip : '')} key={e.containerClass}>
            <CardsArea {...e} />
            <div className={classes.cardContent}>
                <div className={classes.descTitle}>{e.name}</div>
                <div className={classes.desc}>{`${e.date}`}</div>
                <div className={classes.desc}>{`${e.time} onwards`}</div>
                {
                    e.address.map(a => {
                        return <div className={classes.address}>{a}</div>
                    })
                }
                <Button onClick={viewOnMap(e.location)} className={classes.viewMap}>
                    View on Map
                </Button>
            </div>
        </section>
    )
}

export default Event
