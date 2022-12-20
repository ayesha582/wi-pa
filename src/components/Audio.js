import React, { useEffect } from 'react';
import audioFile from '../audio.mp3';

const AudioComponent = ({play}) => {
  useEffect(() => {
    if(play) document.getElementById("myAudio").play();
  }, [play]);

  return <>
    <audio id="myAudio" style={{visibility: 'hidden'}}>
      <source src={audioFile} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </>
};

export default AudioComponent