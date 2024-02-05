import React from "react";

const Loader = ({ show }) => {
  return (
    <div className={`w-100 h-100 ${show ? "d-block" : "d-none"}`}>
      <div className="w-100 h-100 d-flex  justify-content-center align-items-center">
        <img src="/images/loading-load.gif" alt="loadfing-gif" width={100} />
      </div>
    </div>
  );
};

export default Loader;
