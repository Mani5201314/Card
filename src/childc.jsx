import React, { useContext } from "react";
import { data, data1 } from "./app";
function Childc() {
  let name = useContext(data);
  let age = useContext(data1);
  return (
    <h1>
      {name} <br />
      {age}
    </h1>
  );
}

export default Childc;
