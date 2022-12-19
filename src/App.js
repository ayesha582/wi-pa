import React, { useEffect, useState } from 'react'
import './App.css';
import Audio from './components/Audio';
import Parallax from './sections/Parallax';

const useQuery = () =>
  new URLSearchParams(new URL(window.location).search);

const RSVP_FORM_URL = 'https://forms.gle/e5hhHddtzpmeEXSo6';

const PATRATU_RESORT_LOCATION = 'https://www.google.com/maps/place/Patratu+Lake+Resort/@23.6100753,85.2810746,15z/data=!4m8!3m7!1s0x0:0xf2cfa8cca411ddad!5m2!4m1!1i2!8m2!3d23.6101263!4d85.2810261';

const GEL_CHURCH_RANCHI_LOCATION = 'https://www.google.com/maps/place/Gossner+Evangelical+Lutheran+Church+in+Chotanagpur+%26+Assam/@23.3542664,85.3204027,15.37z/data=!4m18!1m12!4m11!1m3!2m2!1d85.3346629!2d23.3586329!1m6!1m2!1s0x39f4e1a7b5024dc3:0x84f02c99dd82aac1!2sH.R.D.C.,+Premises,+G.E.L.+Church+Compound,+Mahatma+Gandhi+Main+Rd,+Ranchi,+Jharkhand+834001!2m2!1d85.324958!2d23.3566025!3m4!1s0x39f4e1a7b5024dc3:0x84f02c99dd82aac1!8m2!3d23.3566025!4d85.324958';
const HaldiImg = "https://lh3.googleusercontent.com/wsXhB-lL006W3hEDW7i7lGiO-7WLTCZLZgjr9PubvZMUs0FtN6bJ6zxycg4uIAcq6ME=w2400"
const WeddingImg1 = "https://lh6.googleusercontent.com/CjzIajIaSC0D_HFnmHQEKJ3iiTsvznOHJ2Xd-BYG-4PDby1Wr3LZo8fxNuCVGKq0qcQ=w2400"
const ReceptionImg = "https://lh6.googleusercontent.com/i92lq02zic_HxKSr9migXGbUrdNbhRMQceOei_mWnMCLzlCWxiQwadnzY15vIR_GuwE=w2400"

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

function App() {
  const [eventConfig] = useState('GROOM');

  useEffect(()=>{
    var userAgent = window.navigator.userAgent;

    if ((userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) && window.screen.availWidth < 600)) {
      document.body.style.backgroundImage = 'url(https://lh3.googleusercontent.com/2flfNB7n0632oUpBC6QAqgNJkOsClLHwG3PKTPHMF_WC3SHoFKGMc8k8A9ayrBjzr1E=w2400)'
    }
  })

  let config = eventConfig ? EVENTS_CONFIGS_BY_TYPE[eventConfig] : [];

  const query = useQuery();
  const showHaldi = query.get('haldi');

  if (showHaldi) config = [HALDI_EVENT, ...config];


  return (
    <div className="App">
      {eventConfig && <Parallax eventConfig={config} />}
      <Audio />
    </div>
  );
}

export default App;
