import { useEffect, useRef, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useInView
} from "framer-motion";
import { createUseStyles } from "react-jss";
import Button from '../components/Button'
import cx from 'classnames';
import Lottie from 'react-lottie'
import animationData from '../img/ornament.json'
import Line from './Line';
import Select from '../Select';


const RSVP_FORM_URL = 'https://forms.gle/TD7NMfMuEvfttrCc8';

const LandingMwebSrc = "https://lh3.googleusercontent.com/N09jgy9jIhmjmvPo8NLRylR7nqjl9EnDIRp4Z15unaeXzgACAo66FzM06linDVi5WAk9aP3iHkaGoAcBcp0Po_pycXvMI0BhmwSvyHCRfJSB6jrEqpYvs3LvfyvR94yo5gUDBA4DvXmjXb1CVRqMl8j8XWPwY9l6qDK2RxSuWc13w2BeSHgL0d9sC4Bnk_nrivO25B_1K8obFaqbL2wocj_hqb0vVtqSJcBreJ_SnNQD1veqdPLmfCswjJt6wM4LLc4VSJlvOzMgj8-WQ5AaxcHsVoS3Lfy3C3nJ9ElgxuOuEA-dOuBQQffsS6N5J3zhaHEM4bCXrxIirSJnPtVsTF0HT79AoA2Ztqpv4JnjCr6a9l-Fi3ob4VMdrwLGbQlB1U5l8Bz-4mNMWjpQO2twPcCj9gcuA6EeQw3j-uMTXqHn77joeMA6d7N7N3CRKQTrSZEAc0EypElMNxaomqcfYu94Aj3YsoUYMIqGXsOWBqtK-T2Xjf74FguLoIyD6JT9vpWJeRJjqH2AEaqyBTB8U8DuRko6xfjGDrN5sQnW1McSZUCOwAO6SFDx08zY5gRyZ6keCcREhy43MDb2-3Y0TuJQR_gULCrCYA8VQ1Y8-xqIkAvvs77FM5d0DH2OJHQ8nI73BE_Qtn3Xi_JdpZaDqItrbewZ3zUwwKVbokxRNXA2zgwTLWy7sY_IooZOcoSUrw6E7mEDgNvg4DfsplLDGc3-RQpuez-KxQzmOUgjSlRgtdN_20ovhpHSTr9AlXiDCen14eMiBEcB4LnMVg9_f4NpYcvpv8TLwT28hDTxiGn6Aq0i7JoTTexQ2FCvu0ctafMFBlHmU9T9Oqp-AA88_8UInZj_jE3Zjzp5XZzlSm7oRLp9WqfPC6y13yrOUXQhD9lZlgoJUtAxcaRbLx3L8cX22Y_bqL1EE1K9492dtZnLSGm_=w1062-h1510-no?authuser=0"
const LandingDwebSrc = "https://lh3.googleusercontent.com/1vjUTuXrOLx3N7QiUCn6GpDYzwhZBCqEmruad8cGg2LlgOmq2TU3K8QWgR1v_mtPSMW5vYdSe8R1rCQRuROLTzJ0yGWV97SErTPfRuDIyubP9zGkj07JqoZ5s5NmDnB25R0WOjD0v3IoJBOn8k46Ghl9Z1FAz2Knnbl2-b4O13duoLQCwIOz4JWe5QPBsA0Yyrubla6oJeqkl-WdPTspZv9lrFRy6jQvP-yOh8hflwe2zCXJHCHwQCJJ5lwNTf2im_SHlYPuJiPdLn9tLmhQ0vQFAdAZsBIeEiQbokwEksdJhhRiJOeNv2fAgtRwgFurNxjyR_Bj8BqEvBNFnEfGXozwDQh-y_0w2ugmUms-q4FNq4JlHsWWsq8HxvxG0n_URUKsmDq5WgRonG_gcRiFRIp0Mfg2ojf9YdN-Y-z53_-WvNrQcu7O8ZbqFC0xjYt3GAzBlpNTWx8tLFrGNXZpKXABrCZC8-2kewcBAirOm0X10kjVNQ8M_ND7okbVxj67hRxNu6Xsm1lmZCQgESzVlvlPyrQKAUVHx5slZQMJLHwlvPJAzr-4gzHatORoy2hxTr-9j6RcaQbDTWnebPvgvmDAvzzn9MtbA99UoYtZ4fglJrsu2SXlEGs7RYPW61E3WElciIvILCsUnTN1aJVs3Z0_Guo9SNNK_HflsEoYgryqEROod_RwQLJ9HlC7zTnNMafrqHBLpWRqoUbw-nPE3Bz1Z1InFzdl4KC2FKLN9DI0JRKS1d5untEngzj9mfqZGf6TUIkdC43hvHInpQOy_NCYTWyxNgSSSg9Wu0uAiSRmMSJrNs0f4Xh3yPrN8EZlb6aVHiqBRrdBprxUF1LUqsWlY7CLY7PUJ7B_Tt76S4dRsKLw4Mxhm-jUdevhNhvcyyY_eknESkjDWe4J9jCN65PDVYpE8em5zvd8X5xlZbJkqhQI=w2264-h1512-no?authuser=0"

const useStyles = createUseStyles({
    imgWrapper: {
        width: '40vw',
        height: '80vh',
        position: 'relative',
        margin: '20px',
        overflow: 'hidden',
        borderRadius: '8px',
        marginRight: '40vw',
        border: '3px solid #9d8403',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        zIndex: 20,
        "@media (max-width: 720px)": {
            width: '80vw',
            height: '40vh',
            marginRight: '0px',
            marginLeft: '0px',
            marginTop: '10vh'
        }
    },
    cardImg:{
        objectPosition: 'bottom',
        width: '100%',
    },
    landing: {
        height: '100vh',
        width: '100vw',
        margin: 'inherit',
        backgroundColor: 'unset',
        backgroundImage: `url(${LandingDwebSrc})`,
        backgroundPosition: 'bottom',
        maxWidth: 'unset',
        maxHeight: 'unset',
        border: 'none',
        "@media (max-width: 720px)": {
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            maxHeight: 'unset',
            backgroundImage: `url(${LandingMwebSrc})`,
        }
    },
    sectionWrapper: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        scrollSnapAlign: 'center',
        perspective: '100vw',
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
        zIndex: '40',
        height: '100%',
        background: 'rgba(0 ,0 ,0 ,0.5)',
        padding: '0 30px',
        textAlign: 'center',
        "@media (max-width: 720px)": {
            height: 'unset',
            width: '100%',
            top: '30%',
            left: '0',
            padding: 0,
            fontSize: '48px',
            transform: 'translateY(-50%)',
            background: 'rgba(0 ,0 ,0 ,0.5)'
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
    },
    rsvpOverride:{
        border: 'none'
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
    const lottieRef = useRef(null);
    const isInView = useInView(lottieRef)

    const [isStopped, stopIt] = useState(true)

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

    useEffect(()=>{
        if(isInView && isStopped){
            stopIt(false)
        }
    },[isInView])

    const openRSVPForm = () => window.open(RSVP_FORM_URL, '_blank');

    const classes = useStyles({});
    return (
        <section className={classes.sectionWrapper}>
            <div ref={ref} className={isLanding ? cx(classes.imgWrapper, classes.landing) : isRsvp? cx(classes.imgWrapper, classes.rsvpOverride) : classes.imgWrapper} style={cardStyle}>
            </div>
            <div className={classes.gradient}></div>
            {isLanding ?
                <div className={classes.landingHead}>
                    <Lottie options={defaultOptions}
                        height={86}
                        width={"100%"}
                        isStopped={isStopped}
                    />
                    <div className={classes.head} ref={lottieRef}>Ayesha & Prem</div>
                    <div className={classes.subHead}>14th Feb 2023</div>
                    {!isStopped && <Line />}
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
