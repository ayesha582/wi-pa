import React,{useEffect, useState} from 'react'
import './App.css';
import Select from './Select';
import Layout from './Layout';

const EVENTS_CONFIGS_BY_TYPE = {
  BRIDE: [
    {
        name: 'Haldi',
        date: '13th FEB 2022',
        time: '1PM onwards',
        address: 'Sarovar Vihar Patratu resort',
        primaryColor: '#F28705',
        seconDaryColor: '#F20574',
        containerClass: 'haldi'
    },
    {
        name: <><div>The</div><div>Wedding</div></>,
        date: '14th FEB 2022',
        time: '9AM',
        address: 'G.E.L Church, Main Road - Ranchi',
        isFlipped: true,
        primaryColor: '#F2E7DC',
        seconDaryColor: '#656773',
        containerClass: 'wedding',
        cardStyle:{
            color: '#734022'
        }
    },
    {
        name: 'Lunch & Reception',
        date: '14th FEB 2022',
        time: '1PM onwards',
        address: 'Sarovar Vihar Patratu resort',
        primaryColor: '#8C4303',
        seconDaryColor: '#BF3604',
        containerClass: 'reception'
    },
  ],
  GROOM: [
    {
        name: <><div>The</div><div>Wedding</div></>,
        date: '14th FEB 2022',
        time: '9AM',
        address: 'G.E.L Church, Main Road - Ranchi',
        isFlipped: true,
        primaryColor: '#F2E7DC',
        seconDaryColor: '#656773',
        containerClass: 'wedding',
        cardStyle:{
            color: '#734022'
        }
    },
    {
        name: 'Lunch & Reception',
        date: '14th FEB 2022',
        time: '1PM onwards',
        address: 'Sarovar Vihar Patratu resort',
        primaryColor: '#8C4303',
        seconDaryColor: '#BF3604',
        containerClass: 'reception'
    },
  ]
}


function App() {
  const [eventConfig, setEventConfig] = useState(null)

  return (
    <div className="App">
      <Select setEventConfig={setEventConfig}/>
      <Layout eventConfig={EVENTS_CONFIGS_BY_TYPE[eventConfig]}/>
    </div>
  );
}

export default App;
