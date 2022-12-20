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
const HaldiImg = "https://lh3.googleusercontent.com/tugsIX3BNmZcFj1jzOYq7ScPOk0bHit194-tWzj5bXx31IZUpMYcn_PU-hHmxz9s7gHVJfHYMw2mYB8KIX3_u0yoaDSMSroTupmggSO-GFY-KBXrHb_NOgU7kTHws1_5UZJwzQq-nvY7xyIBkBZWYQtk3woHySkM1BFN8jBEc7dO1We9i3euy80caPTWNTyof0MuzFUkJ3BTsbjhCXYhCp05JV8XOJ8_t4lQhx1xJc6F0wZ628_IJGdOQHQvt5klxV3LOPGgqQt_tv3tIijAAzv894jICLTskE3UArOHofKVdIGZfdJagxPfndzGU0S_7QpdhUg-ap_4xBpqJ0pZrz3HRU-jusv2X9_hh8e_Ld3vpMD-b9gbNejKAmK99DT3FSovgq-RPKVL_G3NwfLb1LpaGp7_1rgXYc2YGMv2y7ibCYVSElG_v7GaGwtKx2hD7c6UblWzFSgYTLnZnWUdJXqXToEvuEGiNEplKC9WyKiGzONHBFAjIvuUF8KsQgxiVorryGDaCxM4Ur4gn_SCVp_IKgDJK2SJtHxTi8ruqNJQQkEbjUxmQEs9miEFLPKFH_2sHGykDIPSyitJG9WrUjHpd3X3IpthSmu8A5O1wr1SKRXum4w4xVk6DhyfYr_DHkmZaWbg-ee3Ksv5JdJCwcY_cqr9cEZa7ne-w_xE8LtmbaODqiCFlzcYZOsXakWehxIgf6SCtBqnjAISG6t58qHL75uRVKIr95XFpacnB9jA_VoiuXb7326GUvthxA0Otpuuv-txCIySYl29AFy6LyW2Wg6Tb6RxgpWHnrEYghFv5FmCRBgET6GixhvMwx-wCCROo4QYGFr8ZkU3dXNWLH_Y38URVS4JQBWMSErVCcLdcAns5KhwL5Syr5is2Nbq-LZX1bkXZ07NUg8VZgheqBYOcSKM0r42jubiqNX-DNEFzsAN=w1008-h1500-no?authuser=0"
const WeddingImg1 = "https://lh3.googleusercontent.com/buebpmdeDTEuI6frlk1cyBdtpmtDgk95rAZ_jvsDXrUdzLl1lFgDZTvRWIhiWM33-xEnpIVvDqJlNbt9cBjaj_k8_O6FEKNVrL2sI_LshFMhaF9dBhYw6v7IoAci4tE1BjG_eHfTYy6v1nW5qRYpdL3UusFHVrCENdP8UWlk335IVH9KxULFn6o4NdBOLoyhuprT2pxLIOhBuhrMuW4TeUFuJd7OE5uWlEzChLLm44GrvabW_nZF6Rnf2v7jOwkP4Vmx31DuZm35jMM7AzmP6kO18EhsK9iehsohWEUtYt0QOqFvw88IAI6kTzkym1t_0a_6jMPZXD0B-e8RceFpOUmlAmK2uxrvFFBlLK6_rkzU3sDN0QsiWRciF5ZWXb3vFnWAedXiIkEslOKbkHyQ3UiFPS_dsf18j65h-mZWyPY9TFJpq0k2gysUcM2fYLKo_OiDxdG9pUsIWGGnG0j9HkF3A34vlTZkxGEY9-20Fg176awZbDAkWngr74gXgdGSl8rIXq30cCtgI6TDi9df6_ziHq1r3SVmsVXPnkE6hn7FyisPxF619vOmiFcwKyObXyrRiuQYVZLrVrl__MzRw2mNXF391Pm78j_KWzMzxFxIPQZOZiF3iboP8dcY_LOP-9pNc10C0GPW0KkSjgInVJxnom6y3mHbykdplppYGKamkk4vEz-wHP-tIPfe_r_XTpAeIQpSR6MLOuOEWL6qWM5X7YwVUagOY8ZtsIi2_1E5MZghL310rCOU0PRy-ZTYmApdxw5zi3y95IB4BS7gT-OsaKaRlMAfBXcJblF9sY1yBFgR0OsyYy0LoFB6y25rPGqIxF6ZWLpNnxEPr2tGpCc55Nh3mBQhvh6BYVWqYL8cqdtsQlX1tevRbCXME_IHY7jCBxMXv7CXBQlsD2BQMA07qNICmzQwnWsSnDLj5297J9G3=w1010-h1510-no?authuser=0"
const ReceptionImg = "https://lh3.googleusercontent.com/alJ1mcGFMk58veTF9XPnT96NPngyfF6RkrVRaPiO2Hy41irjuP9U2IOLdZWH0kxVsS4FeLBUNaSABiu_LO3-XLda3QH0ADv8nS1ImuCnKolRIMpYqvriatmJEQlww2itPwR4p80kQgtGYIFLSOa8VKZcc8lWtw_FyfZardeZi5F0VnP-8g9FVQvRjmPHIfF8Re4QvwKEPEtgAfDX9CB8klt2Qr18jO1iKbHdi0NaGK728G-q4tNqVj_Inf7buI1lvQK1CYjKgwgvO90Kg1jbMRCDIaMnW59anGNjO1tjj5tE97KdYNCKDsVvYaThHb8cSh8d4CTyJMjNySp3BgwBsp6apP5vnHfMG57dgtLw12h9CPpApHfdkCy5ys960J9Ht-ZoxEhDxVXX-d_SpBtKrp_06i_HDaP3nEHl91DUdVKCDHNHD1m07VazK_3YOq3j3dGH9jQGrTbjLiHpetm4IxLk7bH3b-g-bcXmkX2wkrsZxrUw0mNKa0yMkyApFf7X3bxzpH8qTqE1P6oPrxIImP5oO9gYWS9ITDbRFHhvaZWdK03tOpH02L8mQgMoAAugv3qr43zbu1wPxwk5ZsgtlHcNsszO8IZ0NcF9xULsQpjMnpUvN3ul0_kf7z5jtF7FoVL39UDku-MgkcR_oRbetjr9CaeAvrZFTFiUhA-Aau73LWTbbmGvZjO3ONIK4K9uy4LIMfApDrzC1oj5C0iGgIrU7fQRBblWrXQns2rtdYWQyu6Z7PzZwQ-SPSAz4zPknLC-4oIWRb4RORbQa0Wtl3y2wKpUoznwsOAIMOkHLbhV2zG0KThH0UfiKBbHFoS1P25a_MPeynxCMZVWxONbKV2lJhnCMzHfYeisbXBPBLos-_y9Iv3Xi_9obXOT2s_Ryw6pZRwItwAYLbH6cXOK_Oy4GlqoJtCWuDaVnAsdZ8jVt4bt=w1154-h1512-no?authuser=0"

const HALDI_EVENT = {
  name: 'Haldi',
  date: '13th FEB 2022',
  time: '1PM onwards',
  location: PATRATU_RESORT_LOCATION,
  cardImg: HaldiImg,
  address: [
    'Sarovar Vihar, Patratu Lake Resort',
    'Kodram, Patratu, Jharkhand - 829119'
  ],
  button: 'View on Map'
};

const EVENTS_CONFIGS_BY_TYPE = {
  BRIDE: [
    {
      name: 'The Wedding',
      date: '14th FEB 2022',
      time: '9AM',
      cardImg: WeddingImg1,
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
  ],
  GROOM: [
    {
      name: 'The Wedding',
      date: '14th FEB 2022',
      time: '9AM',
      cardImg: WeddingImg1,
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
  const [eventConfig] = useState('GROOM');
  const [play, setPlay] = useState(false)

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if ((userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) && window.screen.availWidth < 600)) {
      document.body.style.backgroundImage = 'linear-gradient(45deg, #360033, #0b8793)'
    }
  }, [])

  let config = eventConfig ? EVENTS_CONFIGS_BY_TYPE[eventConfig] : [];

  const query = useQuery();
  const showHaldi = query.get('haldi');

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
