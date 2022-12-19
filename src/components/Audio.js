import React, { useEffect } from 'react';
import audioFile from '../audio.mp3';

const AudioComponent = () => {
    useEffect(() => {
      let audio = new Audio(audioFile);

      setTimeout(() => {
        // start the audio after 1 sec
        audio.play();
      }, 1000);

      return () => {
        audio.pause();
        audio.src = null;
      };
    }, []);

    return <></>;
};

export default AudioComponent