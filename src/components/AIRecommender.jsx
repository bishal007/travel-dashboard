// components/AIRecommender.jsx
import React from 'react';
import useStore from '../store/useStore';

const AIRecommender = () => {
  const { recommender } = useStore();

  return (
    <div>
      {recommender.map((rec, index) => (
        <div key={index}>
          <img src={rec.image} alt="recommendation" />
          <p>{rec.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AIRecommender;
