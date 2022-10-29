import React,{useEffect} from 'react'
import { createUseStyles, useTheme } from "react-jss";
import cx from 'classnames';
import './App.css';
import Select from './Select';
import Layout from './Layout';

/** TODO 
 * Remove unused dependencies
 * **/

const useStyles = createUseStyles({
  
});


function App() {
  

  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className="App">
      {/* <Select/> */}
      <Layout />
    </div>
  );
}

export default App;
