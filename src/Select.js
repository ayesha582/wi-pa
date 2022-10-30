import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { motion } from 'framer-motion';
import cx from 'classnames';
import Lottie from 'react-lottie'
import animationData from './img/flowers.json'

const useStyles = createUseStyles({
    fab: {
        color: '#A6695B',
        lineHeight: '115px',
        cursor: 'pointer',
        display: 'inline',
    },
    fabContainer: {
        display: 'flex',
        flexDirection: 'column',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: 'absolute',
        zIndex: '60'
    },
    centerContent: {
        position: 'fixed',
        fontSize: '40px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: '40'
    },
    circle: {
        background: 'wheat',
        borderRadius: '50%',
        width: '244px',
        height: '244px',
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
    guest: {
        fontSize: '40px',
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
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
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
        setEventConfig(type)
        const element = document.body;
        element.style.overflow = 'unset';
        setTimeout(
            ()=>{
                setAnimate(true)
            },
            3000
        );
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

        {!shouldAnimate && <div className={classes.centerContent}>
            <div className={classes.circle}></div>
            <div className={classes.dot}></div>
            <div className={classes.fabContainer}>
                <motion.div whileHover={{ scale: 1.2 }}  className={classes.fab} onClick={() => onFabClick('BRIDE')}>
                    Bride
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}  className={classes.fab} onClick={() => onFabClick('GROOM')}>
                    Groom
                </motion.div>
            </div>
            <Lottie options={defaultOptions}
                height={410}
                width={410}
                style={{
                    position: 'fixed',
                    top: '50%%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) scale(1.1)',
                    zIndex: '30',
                    margin: '0 0 0 7px',
                    top: '50%'
                }}
            />
        </div>}

        <motion.div className={cx(classes.topHalf, classes.half)}
            animate={shouldAnimate ? 'hide' : 'show'}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            variants={variants}
        >
            <div className={classes.guest}>I am a guest of the...</div>
        </motion.div>
        <motion.div className={cx(classes.BottomHalf, classes.half)}
            animate={shouldAnimate ? 'hide' : 'show'}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            variants={variants2}
        >
        </motion.div>
    </>
}

export default SelectComponent