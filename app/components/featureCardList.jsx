// FeatureCardList.jsx
import React from 'react';
import FeatureCard from './FeatureCard'; // Assuming FeatureCard is in the same directory

const FeatureCardList = ({ data }) => {
  return (
    <div className="feature_layout">
      {data.map((useCase) => (
        <FeatureCard key={useCase.id} useCase={useCase} />
      ))}
    </div>
  );
};

export default FeatureCardList;
