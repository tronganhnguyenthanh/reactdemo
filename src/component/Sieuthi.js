import React from "react";
function Sieuthi(props) {
  //console.log(props);
  return (
    <div className="App">
      <div className="col-3">
        <h2>{props.sieuthi.name}</h2>
        <p>{props.sieuthi.address}</p>
      </div>
    </div>
  );
}
export default Sieuthi;
