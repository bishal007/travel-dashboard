// components/App.jsx
import React from 'react';
import AudioPlayer from './AudioPlayer';
import Transcription from './Transcription';
import Keywords from './Keywords';
import AIRecommender from './AIRecommender';
import '../App.css';

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <AudioPlayer />
      </div>
      <div className="col-md-3">
        <Transcription />
      </div>
      <div className="col-md-3">
        <Keywords />
      </div>
      <div className="col-md-3">
        <AIRecommender />
      </div>
    </div>
  </div>
);

export default App;
