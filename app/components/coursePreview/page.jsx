// PreviewButton.js
import React from 'react';

const PreviewButton = ({ data, icon, handleOnClick }) => {
  return (
    <button className='secondary_btn' onClick={handleOnClick}>
      {data}
      {icon && icon}
    </button>
  );
};

export default PreviewButton;