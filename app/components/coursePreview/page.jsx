// PreviewButton.js
import React from 'react';

const PreviewButton = ({ data, icon, onClick }) => {
  return (
    <button className='secondary_btn' onClick={onClick}>
      {data}
      {icon && icon}
    </button>
  );
};

export default PreviewButton;