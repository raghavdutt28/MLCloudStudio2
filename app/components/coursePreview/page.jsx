// PreviewButton.js
import React from 'react';

const PreviewButton = ({ data, icon, handleOnClick }) => {
  return (
    <button className='secondary_btn'>
      {data}
      {icon && icon}
    </button>
  );
};

export default PreviewButton;