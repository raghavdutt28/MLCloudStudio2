"use client"
import React, { useState } from 'react';
import FaqLayout from './FaqLayout';
import data from "./data/data";

const Faq = () => {
  const [active, setActive] = useState([true, true, false, false, false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false, false])
      : setActive([true, true, true, true, true, true]);
  };

  return (
    <div className='grid place-items-center w-full'>
            <FaqLayout
              handleClick={handleClick}
              isSomeActive={isSomeActive}
              data={data}
              turn={active}
              setTurn={setActive}
            />
          </div>
  );
}

export default Faq;
