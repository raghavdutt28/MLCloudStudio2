// components/FaqLayout.js
import React from 'react';
import Accordion from './Accordion';

const FaqLayout = ({ handleClick, isSomeActive, data, turn, setTurn }) => {
  return (
    <div className='items-center flex flex-col w-full my-10 px-4'>
      <div className='flex items-center w-full justify-between w-full mb-6'>
        <span className='item-center justify-between text-3xl px-6 py-3 text-dark rounded-md text-subhead'>
          Frequently Asked Questions
        </span>
        <button
          className="text-dark secondary_btn "
          onClick={handleClick}
        >
          <span className="text-dark min-w-fit"> {!isSomeActive ? "Open All" : "Close All"}</span>
          <div
            className={
              "relative transition-all ease-in-out duration-200 " +
              (isSomeActive ? " rotate-180" : "rotate-0")
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
            </svg>
          </div>
        </button>
      </div>
      {data.map((el, i) => (
        <div className='w-full' key={"questions" + i}>
          <Accordion
            question={el.question}
            answer={el.answer}
            turn={turn}
            setTurn={setTurn}
            idx={el.idx}
          />
        </div>
      ))}
    </div>
  );
};

export default FaqLayout;
