import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import { createUseStyles } from "react-jss";
import Button from '../components/Button'
import cx from 'classnames';
import bgImage from '../img/bg-img.jpg'
import bgImageMweb from '../img/bg-img-mweb.jpg'
import Lottie from 'react-lottie'
import animationData from '../img/ornament.json'
import Line from './Line'

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
        marginRight: '40vw',
        zIndex: 2,
        "@media (max-width: 720px)": {
            minWidth: '80vw',
            height: '50vh',
            marginRight: '0px',
            marginLeft: '0px',
            width: 'calc(100vw - 40px)',
            maxHeight: '50vh',
            marginTop: '10vh'
        }
    },
    landing: {
        height: '100vh',
        width: '100vw',
        margin: 'inherit',
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'bottom',
        "@media (max-width: 720px)": {
            backgroundSize: 'auto 80vh',
            backgroundRepeat: 'no-repeat',
            maxHeight: 'unset',
            backgroundImage: `url(${bgImageMweb})`,
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
        color: '#1E1110',
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
        left: 'calc(50% + 80px)',
        fontSize: '92px',
        position: 'absolute',
        textShadow: '2px 2px #504747',
        zIndex: '5',
        height: '100%',
        background: 'rgba(0 ,0 ,0 ,0.5)',
        padding: '0 30px',
        textAlign: 'center',
        "@media (max-width: 720px)": {
            height: 'unset',
            width: '100%',
            top: '0',
            left: '0',
            padding: 0,
            fontSize: '48px'
        }
    },
    gradient: {
        position: 'absolute',
        width: '100vw',
        height: '40vh',
        background: 'rgba(0,0,0,0.5)',
        zIndex: 1,
        "@media (max-width: 720px)": {
            bottom: 0,
            height: '100vh'
        }
    },
    subHead: {
        fontFamily: 'Quicksand, sans-serif',
        fontSize: '2rem',
        marginTop: '20px',
        "@media (max-width: 720px)": {
            fontSize: '1.2rem'
        }
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

function Image({ event = {}, isLanding }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const scrollThreshold = window.screen.width > 720 ? 300 : -40
    const y = useParallax(scrollYProgress, scrollThreshold);
    const { cardStyle = {} } = event

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const classes = useStyles({});
    return (
        <section className={classes.sectionWrapper}>
            <div ref={ref} className={isLanding ? cx(classes.imgWrapper, classes.landing) : classes.imgWrapper} style={cardStyle}>
            </div>
            <div className={classes.gradient}></div>
            {isLanding ?
                <div className={classes.landingHead}>
                    <Lottie options={defaultOptions}
                        height={86}
                        width={"100%"}
                        style={{marginTop: '70px'}}
                    />
                    <div className={classes.head}>Ayesha & Prem</div>
                    <div className={classes.subHead}>14th Feb 2023</div>
                    {/* <motion.div className="progress" animate={{ transition: {scaleX: '1'} }} initial={{ scaleX: '0' }}/> */}
                    <Line/>
                </div>
                :
                <motion.h2 style={{ y }} className="parallaxImg">
                    <CardContent {...event} classes={classes} />
                </motion.h2>
            }
        </section>
    );
}

export default function Parallax({ eventConfig = [] }) {
    return (
        <>
            <Image isLanding={true} />
            {eventConfig.map((event) => (
                <Image event={event} />
            ))}
        </>
    );
}
