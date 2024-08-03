// components/Transcription.jsx
import React from 'react';
import useStore from '../store/useStore';

const Transcription = () => {
  const { transcription } = useStore();

  return (
    <div>
      {transcription.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

export default Transcription;
