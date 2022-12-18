import React from "react";
import { createUseStyles } from "react-jss";
import Lottie from 'react-lottie'
import animationData from './img/flowers.json'
import saveTheDate from './img/lottieSave.json'


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
    }
});


const SelectComponent = () => {

    const classes = useStyles({});
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: saveTheDate,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return <>

        <div className={classes.centerContent}>
            <div className={classes.textLottie}>
                <Lottie options={defaultOptions1}
                    height={330}
                    width={330}
                    speed={0.3}
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
                height={410}
                width={410}
                speed={0.4}
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
    </>
}

export default SelectComponent