import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { createUseStyles } from "react-jss";
import Button from '../components/Button'
import cx from 'classnames';
import bgImage from '../img/landing-bg.JPG'

const useStyles = createUseStyles({
    imgWrapper: {
        width: '300px',
        height: '400px',
        position: 'relative',
        margin: '20px',
        background: 'var(--white)',
        overflow: 'hidden',
        backgroundSize: 'cover',
        borderRadius: '4px',
        height: '60vh',
        width: '400px',
        backgroundColor: 'salmon'
    },
    landing:{
        height: '95vh',
        width: '95vw',
        // backgroundImage: `url(${bgImage})`,
    },
    sectionWrapper: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        scrollSnapAlign: 'center',
        perspective: '500px',
    },
    address: {
        fontSize: '1.4rem',
        lineHeight: '34px'
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
    descTitle: {
        fontSize: '4rem',
        marginBottom: '20px'
    },
    desc: {
        margin: '10px 0',
        fontFamily: 'Quicksand, sans-serif',
        fontSize: '1.4rem'
    },
    cardContent: {
        fontSize: '16px',
        flex: '1'
    },
})

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const CardContent = ({ name, date, time, address, location, classes }) => {
    const viewOnMap = location => () => window.open(location, '_blank');

    return (
        <div className={classes.cardContent}>
            <div className={classes.descTitle}>{name}</div>
            <div className={classes.desc}>{`${date}`}</div>
            <div className={classes.desc}>{`${time} onwards`}</div>
            {
                address.map(a => {
                    return <div className={classes.address}>{a}</div>
                })
            }
            <Button onClick={viewOnMap(location)} className={classes.viewMap}>
                View on Map
            </Button>
        </div>
    )
}

function Image({ event, isLanding }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    const classes = useStyles({});
    return (
        <section className={classes.sectionWrapper}>
            <div ref={ref} className={isLanding?cx(classes.landing,classes.imgWrapper):classes.imgWrapper} style={isLanding?{}:{ ...event.cardStyle }}>
            </div>
            <motion.h2 style={{ y }}>
                {isLanding ?
                    <div>Ayesha & Prem</div>
                    :
                    <CardContent {...event} classes={classes} />
                }
            </motion.h2>
        </section>
    );
}

export default function Parallax({ eventConfig = [] }) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <Image isLanding={true} />
            {eventConfig.map((event) => (
                <Image event={event} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
        </>
    );
}
