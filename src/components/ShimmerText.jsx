import React from 'react';
import './ShimmerText.css';

const ShimmerText = ({ text, className = "" }) => {
  return (
    <div className={`shimmer-wrapper ${className}`}>
      <span className="shimmer-text">
        {text}
      </span>
    </div>
  );
};

export default ShimmerText;
