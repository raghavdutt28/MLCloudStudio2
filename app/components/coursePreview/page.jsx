// PreviewButton.js
import React from 'react';

const PreviewButton = ({ data, icon, onclick }) => {
  return (
    <button className='secondary_btn' onClick={onclick}>
      {data}
      {icon && icon}
    </button>
  );
};

export default PreviewButton;