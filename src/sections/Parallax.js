import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import { createUseStyles } from "react-jss";
import Button from '../components/Button'
import cx from 'classnames';
import Lottie from 'react-lottie'
import animationData from '../img/ornament.json'
import Line from './Line';
import Select from '../Select';


const RSVP_FORM_URL = 'https://forms.gle/TD7NMfMuEvfttrCc8';

// const LandingMwebSrc = "https://lh6.googleusercontent.com/NBBkTzDqZvE3e6Vi4d2sXakMcfzEpn-e_FlOzXE1NUuC-pAKrz3q8Qo8shED_UqJajk=w2400"
// const LandingDwebSrc = "https://lh4.googleusercontent.com/5Aj58QzlCAzXT2IP2CmWGhNuHAGLTPZan0j-T1XZEiLvhplGMJ2-BWRMyBE5AynUAn8=w2400"

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
        // backgroundImage: `url(${LandingDwebSrc})`,
        // backgroundPosition: 'bottom',
        backgroundColor: 'unset',
        "@media (max-width: 720px)": {
            backgroundSize: 'auto 80vh',
            backgroundRepeat: 'no-repeat',
            maxHeight: 'unset',
            // backgroundImage: `url(${LandingMwebSrc})`,
            // backgroundPosition: 'center'
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
            top: '50%',
            left: '0',
            padding: 0,
            fontSize: '48px',
            transform: 'translateY(-50%)'
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
    },
    rsvpContent: {
        fontSize: '20px',
        borderRadius: '50%',
        background: '#ffbb00ab',
        maxWidth: 'fit-content',
        padding: '12px',
        margin: 'auto',
        height: '49px',
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Quicksand, sans-serif',
        textShadow: 'none',
        cursor: 'pointer',
        "@media (max-width: 720px)": {
            height: '32px',
            fontSize: '14px'
        }
    },
    rsvpWrapper: {
        margin: 'auto',
        borderRadius: '50%',
        padding: '6px',
        border: '1.5px solid #ffbb00ab',
        maxWidth: 'fit-content',
        "@media (max-width: 720px)": {
            marginBottom: '24px'
        }
    },
    parallaxImg: {
        margin: '0',
        color: 'var(--accent)',
        left: 'calc(50% + 130px)',
        fontSize: '56px',
        fontWeight: '700',
        letterSpacing: '-3px',
        lineHeight: '1.2',
        position: 'absolute',
        zIndex: '1'
    },
    rsvp: {
        left: 'unset',
        textAlign: 'center',
        fontSize: '36px',
        "@media (max-width: 720px)": {
            bottom: '50%'
        }
    },
    rsvpFont: {
        fontSize: '36px',
        "@media (max-width: 720px)": {
            fontSize: '1.6rem',
            margin: '0 20px',
            lineHeight: '34px'
        }
    }
})

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const CardContent = ({ name, date, time, address, location, classes, button, onButtonClick, isRsvp }) => {
    const viewOnMap = location => () => window.open(location, '_blank');

    return (
        <div className={cx(classes.cardContent)}>
            <div className={classes.descTitle}>{name}</div>
            {date && <div className={classes.desc}>{`${date}`}</div>}
            {time && <div className={classes.desc}>{`${time} onwards`}</div>}
            {
                address.map(a => {
                    return <div className={cx(classes.address, isRsvp ? classes.rsvpFont : '')}>{a}</div>
                })
            }
            <Button onClick={onButtonClick || viewOnMap(location)} className={classes.viewMap}>
                {button}
            </Button>
        </div>
    )
}

function Image({ event = {}, isLanding }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const scrollThreshold = window.screen.width > 720 ? 300 : -40
    const y = useParallax(scrollYProgress, scrollThreshold);
    const { cardStyle = {}, isRsvp = false } = event

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const openRSVPForm = () => window.open(RSVP_FORM_URL, '_blank');

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
                    />
                    <div className={classes.head}>Ayesha & Prem</div>
                    <div className={classes.subHead}>14th Feb 2023</div>
                    <Line />
                    <div className={classes.rsvpWrapper}>
                        <div className={classes.rsvpContent} onClick={openRSVPForm}>
                            RSVP
                        </div>
                    </div>
                </div>
                :
                <motion.h2 style={{ y }} className={cx('parallaxImg', isRsvp ? classes.rsvp : '')}>
                    <CardContent {...event} classes={classes} />
                </motion.h2>
            }
        </section>
    );
}

export default function Parallax({ eventConfig = [] }) {
    const classes = useStyles({});
    return (
        <>
            <section className={classes.sectionWrapper}>
                <Select />
            </section>
            <Image isLanding={true} />
            {eventConfig.map((event) => (
                <Image event={event} />
            ))}
        </>
    );
}
