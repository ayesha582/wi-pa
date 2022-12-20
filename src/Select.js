import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import Lottie from 'react-lottie';
import animationData from './img/flowers.json';
import saveTheDate from './img/lottieSave.json';


const useStyles = createUseStyles({
    fab: {
        color: '#A6695B',
        lineHeight: '115px',
        cursor: 'pointer',
        display: 'inline',
    },
    centerContent: {
        position: 'fixed',
        fontSize: '40px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: '40',
        "@media (max-width: 720px)": {
            transform: 'translate(-50%,-50%) scale(0.85)',
        }
    },
    circle: {
        background: 'wheat',
        borderRadius: '50%',
        width: '244px',
        height: '244px',
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
    },
    textLottie: {
        fontSize: '50px',
        textAlign: 'center'
    },
    '@-webkit-keyframes sdb05': {
        '0%': {
            '-webkit-transform': 'rotate(-45deg) translate(0, 0)',
            opacity: '0',
        },
        '50%': {
            opacity: '1',
        },
        '100%': {
            '-webkit-transform': 'rotate(-45deg) translate(-20px, 20px)',
            opacity: '0',
        }
    },
    '@keyf,rames sdb05': {
        '0%': {
            transform: 'rotate(-45deg) translate(0, 0)',
            opacity: '0',
        },
        '50%': {
            opacity: '1',
        },
        '100%': {
            transform: 'rotate(-45deg) translate(-20px, 20px)',
            opacity: '0',
        }
    }
});


const SelectComponent = () => {

    const [animate, setAnimate] = useState(false)
    const [isStopped, stopIt] = useState(true)
    const [isStoppedFlowers, stopItFlowers] = useState(true)

    const classes = useStyles({});
    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptions1 = {
        loop: false,
        autoplay: false,
        animationData: saveTheDate,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        setAnimate(true)
        const timeout = setTimeout(() => {
            stopIt(false)
        }, 3000);
        const timeout1 = setTimeout(() => {
            stopItFlowers(false)
        }, 1000);
        return () => {
            clearTimeout(timeout)
            clearTimeout(timeout1)
        }
    }, [])

    const getlottieWH = (isFlower) => {
        if (window.screen.availWidth > 720) {
            return isFlower ? 500 : 400
        }
        return isFlower ? 410 : 330
    }

    return animate ? <>
        <div className={classes.centerContent}>
            <div className={classes.textLottie}>
                <Lottie options={defaultOptions1}
                    height={getlottieWH()}
                    width={getlottieWH()}
                    speed={0.2}
                    key={'text'}
                    isStopped={isStopped}
                    style={{
                        position: 'fixed',
                        top: '50%%',
                        left: '50%',
                        transform: 'translate(-50%, -50%) scale(1.1)',
                        zIndex: '30',
                        margin: '0 0 0 7px',
                    }}
                />
            </div>
            <Lottie options={defaultOptions}
                height={getlottieWH(true)}
                width={getlottieWH(true)}
                speed={0.4}
                key={'flowers'}
                isStopped={isStoppedFlowers}
                style={{
                    position: 'fixed',
                    top: '50%%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) scale(1.1)',
                    zIndex: '30',
                    margin: '0 0 0 7px',
                }}
            />
        </div>
    </> : <></>
}

export default SelectComponent