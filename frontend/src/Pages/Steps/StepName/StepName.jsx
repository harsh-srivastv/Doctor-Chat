import React from 'react';

const StepName = ({ OnNext }) => {
  return (
    <>
        <div>Name Component</div>
        <button onClick={OnNext}>Next</button>
    </>
  );
};

export default StepName;