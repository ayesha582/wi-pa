import React, { useEffect, useState } from 'react'
import './App.css';
import Audio from './components/Audio';
import Parallax from './sections/Parallax';
import Lottie from 'react-lottie';
import animationData from './img/AudioBubble.json'
import { createUseStyles } from "react-jss";

const useQuery = () =>
  new URLSearchParams(new URL(window.location).search);

const RSVP_FORM_URL = 'https://forms.gle/e5hhHddtzpmeEXSo6';

const PATRATU_RESORT_LOCATION = 'https://www.google.com/maps/place/Patratu+Lake+Resort/@23.6100753,85.2810746,15z/data=!4m8!3m7!1s0x0:0xf2cfa8cca411ddad!5m2!4m1!1i2!8m2!3d23.6101263!4d85.2810261';

const GEL_CHURCH_RANCHI_LOCATION = 'https://www.google.com/maps/place/Gossner+Evangelical+Lutheran+Church+in+Chotanagpur+%26+Assam/@23.3542664,85.3204027,15.37z/data=!4m18!1m12!4m11!1m3!2m2!1d85.3346629!2d23.3586329!1m6!1m2!1s0x39f4e1a7b5024dc3:0x84f02c99dd82aac1!2sH.R.D.C.,+Premises,+G.E.L.+Church+Compound,+Mahatma+Gandhi+Main+Rd,+Ranchi,+Jharkhand+834001!2m2!1d85.324958!2d23.3566025!3m4!1s0x39f4e1a7b5024dc3:0x84f02c99dd82aac1!8m2!3d23.3566025!4d85.324958';
const HaldiImg = "https://archive.org/download/screenshot-2022-12-19-at-9.57.52-pm/Screenshot%202022-12-19%20at%209.56.26%20PM.jpg"
const WeddingImg1 = "https://archive.org/download/screenshot-2022-12-19-at-9.57.52-pm/Screenshot%202022-12-19%20at%209.55.51%20PM.jpg"
const ReceptionImg = "https://archive.org/download/screenshot-2022-12-19-at-9.57.52-pm/Screenshot%202022-12-19%20at%209.56.03%20PM.jpg"

const HALDI_EVENT = {
  name: 'Haldi',
  date: '13th FEB 2022',
  time: '1PM onwards',
  location: PATRATU_RESORT_LOCATION,
  cardImg: HaldiImg,
  cardStyle:{
    backgroundImage:`url(${HaldiImg})`,
    backgroundSize: 'cover',
  },
  address: [
    'Sarovar Vihar, Patratu Lake Resort',
    'Kodram, Patratu, Jharkhand - 829119'
  ],
  button: 'View on Map'
};

const EVENTS_CONFIGS_BY_TYPE = {
  BASE: [
    {
      name: 'The Wedding',
      date: '14th FEB 2022',
      time: '9AM',
      cardImg: WeddingImg1,
      cardStyle:{
        backgroundImage: `url(${WeddingImg1})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
      },
      location: GEL_CHURCH_RANCHI_LOCATION,
      address: [
        'Gossner Evangelical Lutheran Church',
        'Main Rd, Ranchi, Jharkhand - 834001'
      ],
      button: 'View on Map'
    },
    {
      name: 'Lunch & Reception',
      date: '14th FEB 2022',
      time: '1PM onwards',
      location: PATRATU_RESORT_LOCATION,
      cardImg: ReceptionImg,
      cardStyle:{
        backgroundImage: `url(${ReceptionImg})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
      },
      address: [
        'Sarovar Vihar, Patratu Lake Resort',
        'Kodram, Patratu, Jharkhand - 829119'
      ],
      button: 'View on Map'
    },
    {
      name: 'RSVP',
      address: [
        'Kindly help us plan the event better by rsvping'
      ],
      button: 'RSVP to the event',
      onButtonClick: () => window.open(RSVP_FORM_URL, '_blank'),
      cardStyle: {
        background: 'transparent',
        zIndex: '0'
      },
      isRsvp: true
    },
  ]
}

const useStyles = createUseStyles({
  audioBubbleContainer:{
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    left: '50%',
  },
  audio:{
    outline: 'none',
    border: 'none',
    background: 'transparent',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    transform: 'translate(-50%,-50%)',
    fontSize: '20px',
  }
})

function App() {
  const [eventConfig] = useState('BASE');
  const [play, setPlay] = useState(false)

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if ((userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) && window.screen.availWidth < 600)) {
      document.body.style.backgroundImage = 'linear-gradient(45deg, #360033, #0b8793)'
    }
  }, [])

  let config = eventConfig ? EVENTS_CONFIGS_BY_TYPE[eventConfig] : [];

  const query = useQuery();
  const showHaldi = query.get('ha');

  if (showHaldi) config = [HALDI_EVENT, ...config];


  const playAudio = () => {
    console.log('doing move over')
    if (!play) setPlay(true)
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const classes = useStyles({});
  const lottieSize = window.screen.availWidth > 720 ? '20vw' : '45vw'

  return (
    <div className="App">
      {!play ? <div className={classes.audioBubbleContainer}>
        <Lottie options={defaultOptions}
          width={lottieSize}
        />
        <button onClick={playAudio} className={classes.audio}></button>
      </div> :
        <>
          {eventConfig && <Parallax eventConfig={config} />}
          <Audio play={play} />
        </>
      }
    </div>
  );
}

export default App;
