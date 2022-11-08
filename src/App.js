import React, { useEffect, useState } from 'react'
import './App.css';
import Select from './Select';
import Parallax from './sections/Parallax'


const PATRATU_RESORT_LOCATION = 'https://www.google.com/maps/place/Patratu+Lake+Resort/@23.6100753,85.2810746,15z/data=!4m8!3m7!1s0x0:0xf2cfa8cca411ddad!5m2!4m1!1i2!8m2!3d23.6101263!4d85.2810261';

const GEL_CHURCH_RANCHI_LOCATION = 'https://www.google.com/maps/place/Gossner+Evangelical+Lutheran+Church+in+Chotanagpur+%26+Assam/@23.3542664,85.3204027,15.37z/data=!4m18!1m12!4m11!1m3!2m2!1d85.3346629!2d23.3586329!1m6!1m2!1s0x39f4e1a7b5024dc3:0x84f02c99dd82aac1!2sH.R.D.C.,+Premises,+G.E.L.+Church+Compound,+Mahatma+Gandhi+Main+Rd,+Ranchi,+Jharkhand+834001!2m2!1d85.324958!2d23.3566025!3m4!1s0x39f4e1a7b5024dc3:0x84f02c99dd82aac1!8m2!3d23.3566025!4d85.324958';
const HaldiImg = "https://lh3.googleusercontent.com/wsXhB-lL006W3hEDW7i7lGiO-7WLTCZLZgjr9PubvZMUs0FtN6bJ6zxycg4uIAcq6ME=w2400"
const WeddingImg1 = "https://lh6.googleusercontent.com/CjzIajIaSC0D_HFnmHQEKJ3iiTsvznOHJ2Xd-BYG-4PDby1Wr3LZo8fxNuCVGKq0qcQ=w2400"
const ReceptionImg = "https://lh6.googleusercontent.com/i92lq02zic_HxKSr9migXGbUrdNbhRMQceOei_mWnMCLzlCWxiQwadnzY15vIR_GuwE=w2400"

const EVENTS_CONFIGS_BY_TYPE = {
  BRIDE: [
    {
      name: 'Haldi',
      date: '13th FEB 2022',
      time: '1PM onwards',
      address: 'Sarovar Vihar Patratu resort',
      primaryColor: '#F28705',
      seconDaryColor: '#F20574',
      containerClass: 'haldi',
      location: PATRATU_RESORT_LOCATION,
      cardStyle: {
        backgroundImage: `url(${HaldiImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
      },
      address: [
        'Sarovar Vihar, Patratu Lake Resort',
        'Kodram, Patratu, Jharkhand - 829119'
      ]
    },
    {
      name: 'The Wedding',
      date: '14th FEB 2022',
      time: '9AM',
      address: 'G.E.L Church, Main Road - Ranchi',
      isFlipped: true,
      primaryColor: '#F2E7DC',
      seconDaryColor: '#656773',
      containerClass: 'wedding',
      cardStyle: {
        backgroundImage: `url(${WeddingImg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
      },
      location: GEL_CHURCH_RANCHI_LOCATION,
      address: [
        'Gossner Evangelical Lutheran Church',
        'Main Rd, Ranchi, Jharkhand - 834001'
      ]
    },
    {
      name: 'Lunch & Reception',
      date: '14th FEB 2022',
      time: '1PM onwards',
      address: 'Sarovar Vihar Patratu resort',
      primaryColor: '#8C4303',
      seconDaryColor: '#BF3604',
      containerClass: 'reception',
      location: PATRATU_RESORT_LOCATION,
      cardStyle: {
        backgroundImage: `url(${ReceptionImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
      },
      address: [
        'Sarovar Vihar, Patratu Lake Resort',
        'Kodram, Patratu, Jharkhand - 829119'
      ]
    },
  ],
  GROOM: [
    {
      name: 'The Wedding',
      date: '14th FEB 2022',
      time: '9AM',
      address: 'G.E.L Church, Main Road - Ranchi',
      isFlipped: true,
      primaryColor: '#F2E7DC',
      seconDaryColor: '#656773',
      containerClass: 'wedding',
      cardStyle: {
        backgroundImage: `url(${WeddingImg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
      },
      location: GEL_CHURCH_RANCHI_LOCATION,
      address: [
        'Gossner Evangelical Lutheran Church',
        'Main Rd, Ranchi, Jharkhand - 834001'
      ]
    },
    {
      name: 'Lunch & Reception',
      date: '14th FEB 2022',
      time: '1PM onwards',
      address: 'Sarovar Vihar Patratu resort',
      primaryColor: '#8C4303',
      seconDaryColor: '#BF3604',
      containerClass: 'reception',
      location: PATRATU_RESORT_LOCATION,
      cardStyle: {
        backgroundImage: `url(${ReceptionImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
      },
      address: [
        'Sarovar Vihar, Patratu Lake Resort',
        'Kodram, Patratu, Jharkhand - 829119'
      ]
    },
  ]
}


function App() {
  const [eventConfig, setEventConfig] = useState('')

  return (
    <div className="App">
      <Select setEventConfig={setEventConfig} />
      {eventConfig && <Parallax eventConfig={EVENTS_CONFIGS_BY_TYPE[eventConfig]}/>}
    </div>
  );
}

export default App;
