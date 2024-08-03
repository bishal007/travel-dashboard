// components/AudioPlayer.jsx
import React, { useRef } from 'react';
import useStore from '../store/useStore';
import sample1 from '../assets/audio/sample1.mp3';
import data from '../data/data.json';

const AudioPlayer = () => {
  const { setCurrentAudio, addTranscription, setKeywords, setRecommender, reset } = useStore();
  const audioRef = useRef(null);
  const intervalRef = useRef(null);

  const handlePlay = () => {
    reset();
    const audio = new Audio(sample1);
    setCurrentAudio(audio);
    audioRef.current = audio;
    audio.play();
    audio.ontimeupdate = () => {
      const currentTime = Math.floor(audio.currentTime * 1000);
      data.forEach((item) => {
        if (item.time === currentTime) {
          addTranscription(item.text);
          setKeywords(item.keyword);
          setRecommender(item.recommender);
        }
      });
    };
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      reset();
    }
  };

  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default AudioPlayer;
