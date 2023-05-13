import React from 'react';


const MySpinner = () => {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Cargando...</span>
        </div>
      </div>
    );
  };

export default MySpinner;