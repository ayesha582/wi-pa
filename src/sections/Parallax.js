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
import bgImage from '../img/landing-bg-new.jpg'
import HaldiImg from '../img/haldi-card.jpeg';


const useStyles = createUseStyles({
    imgWrapper: {
        minWidth: '600px',
        height: '80vh',
        position: 'relative',
        margin: '20px',
        background: 'var(--white)',
        overflow: 'hidden',
        backgroundSize: 'cover',
        borderRadius: '4px',
        backgroundColor: 'black',
        marginRight:'40vw',
        "@media (max-width: 720px)": {
            minWidth: '80vw',
            height: '55vh',
            marginRight: '0px',
            marginLeft: '0px',
        }
    },
    landing: {
        height: '100vh',
        width: '100vw',
        margin: 'inherit',
        backgroundImage: `url(${bgImage})`,
        "@media (max-width: 720px)": {
            backgroundImage: `url(${HaldiImg})`,
            backgroundPosition: 'center'
        }
    },
    sectionWrapper: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        scrollSnapAlign: 'center',
        perspective: '500px',
        "@media (max-width: 720px)": {
            alignItems: 'flex-start'
        }
    },
    address: {
        fontSize: '1.4rem',
        lineHeight: '34px',
        letterSpacing: '1px',
        "@media (max-width: 720px)": {
            fontSize: '1rem',
            lineHeight: '28px',
        }
    },
    viewMap: {
        border: 'none',
        padding: '11px 14px',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        fontFamily: 'Quicksand, sans-serif',
        marginTop: '30px',
        "@media (max-width: 720px)": {
            marginTop: '15px',
        }
    },
    descTitle: {
        fontSize: '4rem',
        marginBottom: '20px',
        "@media (max-width: 720px)": {
            fontSize: '2.5rem',
            letterSpacing: '0px'
        }
    },
    desc: {
        margin: '10px 0',
        fontFamily: 'Quicksand, sans-serif',
        fontSize: '1.4rem',
        letterSpacing: '1px',
        "@media (max-width: 720px)": {
            fontSize: '1rem'
        }
    },
    cardContent: {
        fontSize: '16px',
        flex: '1'
    },
    landingHead: {
        left: 'unset',
        right: 'calc(50% + 130px)',
        fontSize: '70px',
        top: '50px',
        position: 'absolute',
        left: '50px'
    }
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
    const scrollThreshold = window.screen.width > 720 ? 300 : -20
    const y = useParallax(scrollYProgress, scrollThreshold);

    const classes = useStyles({});
    return (
        <section className={classes.sectionWrapper}>
            <div ref={ref} className={isLanding ? cx(classes.landing, classes.imgWrapper) : classes.imgWrapper} style={isLanding ? {} : { ...event.cardStyle }}>
            </div>
            {isLanding ?
                <div className={classes.landingHead}>Ayesha & Prem</div>
                :
                <motion.h2 style={{ y }} className="parallaxImg">
                    <CardContent {...event} classes={classes} />
                </motion.h2>
            }
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
            {/* <motion.div className="progress" style={{ scaleX }} /> */}
        </>
    );
}
