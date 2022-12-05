import React from 'react';

const StepUsername = ({ OnNext }) => {
  return (
    <>
        <div>Username Component</div>
        <button onClick={OnNext}>Next</button>
    </>
  );
};

export default StepUsername;