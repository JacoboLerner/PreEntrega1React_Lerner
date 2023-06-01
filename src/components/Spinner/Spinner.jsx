import React from 'react';


const MySpinner = () => {
    return (
      <div className="text-center pt-5 pb-5 spinner-wrapper ">
        <div className="spinner-grow  " role="status" style={{ width: "6rem", height: "6rem",color: "orange", }}>
        </div>
      </div>
    );
  };

export default MySpinner;