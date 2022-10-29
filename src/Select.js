import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { motion } from 'framer-motion';

const useStyles = createUseStyles({
    selectionContainer: {
        position: "absolute",
        zIndex: '10',
        overflow: 'hidden',
        width: '100vw',
        height: '100vh',
        fontSize: '46px',
        background: 'linear-gradient(-45deg, #061A26, #143840);',
    },
    fab: {
        background: 'white',
        borderRadius: '30px',
        width: '150px',
        height: '150px',
        color: '#A6695B',
        lineHeight: '150px',
        cursor: 'pointer'
    },
    topHalf: {
        position: 'absolute',
        height: '50vh',
        width: '100vw',
        background: 'pink',
        zIndex: '20',
    },
    BottomHalf: {
        position: 'absolute',
        height: '50vh',
        width: '100vw',
        background: 'salmon',
        zIndex: '20',
        top: '50%'
    }
});


const SelectComponent = () => {

    const [shouldAnimate, setAnimate] = useState(false)

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

    const classes = useStyles({});
    return <div className={classes.selectionContainer}>
        <motion.div className={classes.topHalf}
            animate={shouldAnimate ? 'visible' : 'hidden'}
            transition={{ duration: 1, ease: 'easeOut' }}
            variants={variants}
        >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className={classes.fab} onClick={() => setAnimate(true)}>Bride </motion.div>
        </motion.div>
        <motion.div className={classes.BottomHalf}
            animate={shouldAnimate ? 'visible' : 'hidden'}
            transition={{ duration: 1, ease: 'easeOut' }}
            variants={variants}
        >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className={classes.fab} onClick={() => setAnimate(true)}>Groom </motion.div>
        </motion.div>
    </div>
}

export default SelectComponent