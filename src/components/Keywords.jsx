// components/Keywords.jsx
import React from 'react';
import useStore from '../store/useStore';

const Keywords = () => {
  const { keywords } = useStore();

  return (
    <div>
      {Object.entries(keywords).map(([key, value], index) => (
        <div key={index}>
          <h5>{key}</h5>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
};

export default Keywords;
