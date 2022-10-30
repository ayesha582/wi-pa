import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { motion, useMotionValue, animate } from 'framer-motion';
import cx from 'classnames';
import Lottie from 'react-lottie'
import animationData from './img/flowers.json'


const useStyles = createUseStyles({
    fab: {
        background: 'white',
        borderRadius: '50%',
        width: '244px',
        height: '244px',
        color: '#A6695B',
        lineHeight: '115px',
        cursor: 'pointer',
        position: 'absolute',
        fontSize: '40px',
        bottom: '-15vh',
        zIndex: '40'
    },
    topHalf: {
        background: 'pink',
        flexDirection: 'column-reverse',
    },
    BottomHalf: {
        background: 'salmon',
        top: '50%',
        flexDirection: 'column'
    },
    half: {
        zIndex: '20',
        position: 'absolute',
        height: '50vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#16181F'
    },
    fabReverse: {
        bottom: 'unset',
        top: '-15vh',
        display: 'flex',
        flexDirection: 'column-reverse'
    },
    guest: {
        fontSize: '30px',
        color: '#F2E7DC',
        position: 'absolute',
        top: '30%',
    },
    dot: {
        position: 'absolute',
        zIndex: '50',
        height: '45px',
        width: '45px',
        background: '#16181F',
        top: '100%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
    },
    dotReverse: {
        left: '50%',
        transform: 'translate(-50%, -50%)',
        top: 'unset'
    }
});


const SelectComponent = ({ setEventConfig }) => {

    const [shouldAnimate, setAnimate] = useState(false)

    const variants = {
        hide: {
            top: '-50vh', opacity: 0, transitionEnd: {
                display: 'none'
            }
        },
        show: {

        }
    };

    const variants2 = {
        hide: {
            top: '100vh', opacity: 0, transitionEnd: {
                display: 'none'
            }
        },
        show: {

        }
    };

    const onFabClick = (type) => {
        setAnimate(true)
        setEventConfig(type)
    }

    const classes = useStyles({});
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return <>

        <motion.div className={cx(classes.topHalf, classes.half)}
            animate={shouldAnimate ? 'hide' : 'show'}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            variants={variants}
        >
            <div className={classes.guest}>I am a guest of the...</div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={classes.fab} onClick={() => onFabClick('BRIDE')}>Bride </motion.div>
            <Lottie options={defaultOptions}
                height={410}
                width={410}
                style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) scale(1.1)',
                    zIndex: '30',
                    margin: '0 0 0 5px'
                }}
            />
            <div className={classes.dot}></div>
        </motion.div>
        <motion.div className={cx(classes.BottomHalf, classes.half)}
            animate={shouldAnimate ? 'hide' : 'show'}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            variants={variants2}
        >
            <Lottie options={defaultOptions}
                height={410}
                width={410}
                style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translate(-50%, -50%) scale(1.1)',
                    zIndex: '30',
                    margin: '0 0 0 5px'
                }}
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={cx(classes.fab, classes.fabReverse)} onClick={() => onFabClick('GROOM')}>Groom </motion.div>
            <div className={cx(classes.dot, classes.dotReverse)}></div>
        </motion.div>
    </>
}

export default SelectComponent