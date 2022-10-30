import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { motion, useTransform, useMotionValue, animate, transform } from 'framer-motion';
import cx from 'classnames';
import { interpolate } from "flubber";

export const heart =
    "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";

export const star =
    "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

const paths = [heart, star, heart];

const colors = [
    "#ee4444",
    "#ffcc00",
    "#ee4444",
];


export const getIndex = (_, index) => index;

export function useFlubber(progress, paths) {
    return useTransform(progress, paths.map(getIndex), paths, {
        mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 })
    });
}


const useStyles = createUseStyles({
    fab: {
        background: 'white',
        borderRadius: '50%',
        width: '30vh',
        height: '30vh',
        color: '#A6695B',
        lineHeight: '150px',
        cursor: 'pointer',
        position: 'absolute',
        fontSize: '40px',
        bottom: '-15vh'
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
    scaleSvg: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) scale(0.2)',
        zIndex: '30'
    },
    guest:{
        fontSize: '30px',
        color: '#F2E7DC',
        position: 'absolute',
        top: '50%',
    }
});


const SelectComponent = ({setEventConfig}) => {

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

    const [pathIndex, setPathIndex] = useState(0);
    const progress = useMotionValue(pathIndex);
    const fill = useTransform(progress, paths.map(getIndex), colors);
    const path = useFlubber(progress, paths);

    const onFabClick = (type) =>{
        setAnimate(true)
        setEventConfig(type)
    }

    React.useEffect(() => {
        const animation = animate(progress, pathIndex, {
            duration: 1.2,
            ease: "easeInOut",
            onComplete: () => {
                if (pathIndex === paths.length - 1) {
                    progress.set(0);
                    setPathIndex(0);
                } else {
                    setPathIndex(pathIndex + 1);
                }
            }
        });
        if(shouldAnimate){
            animation.stop();
        }
        return () => animation.stop();
    }, [pathIndex, shouldAnimate]);

    const classes = useStyles({});
    return <>
    {
        !shouldAnimate &&
        <svg width="400" height="400" className={cx(classes.scaleSvg, classes.disappear)}>
            <g transform="translate(10 10) scale(17 17)">
                <motion.path fill={fill} d={path} />
            </g>
        </svg>
    }
        <motion.div className={cx(classes.topHalf, classes.half)}
            animate={shouldAnimate ? 'hide' : 'show'}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            variants={variants}
            >
            <div className={classes.guest}>I am a guest of...</div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={classes.fab} onClick={()=>onFabClick('BRIDE')}>Bride </motion.div>
        </motion.div>
        <motion.div className={cx(classes.BottomHalf, classes.half)}
            animate={shouldAnimate ? 'hide' : 'show'}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            variants={variants2}
        >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={cx(classes.fab, classes.fabReverse)} onClick={()=>onFabClick('GROOM')}>Groom </motion.div>
        </motion.div>
    </>
}

export default SelectComponent