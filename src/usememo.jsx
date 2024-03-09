// import React, { useMemo, useState } from "react";

// function Use() {
//   let [add, setadd] = useState(1);
//   let [sub, setsub] = useState(100);
//   let [div, setdiv] = useState(25);
//   let mult = useMemo(
//     function () {
//       console.log("*******");
//       return add * 50;
//     },
//     [add,sub]
//   );
//   return (
//       <div>
//           <Da/>
//       <h3>{mult}</h3>
//       <h1>{add}</h1>
//       <button onClick={() => setadd(add + 1)}>Add</button>
//       <h1>{sub}</h1>
//       <button onClick={() => setsub(sub - 1)}>Sub</button>
//       <h1>{div}</h1>
//       <button onClick={() => setdiv(div / 2)}>Div</button>
//     </div>
//   );
// }

// export default Use;
import React, { useState, useReducer, useCallback } from "react";
import Usememoanother from "./usememoanother";

function Use() {
  let [add, setAdd] = useState(0);
  let fun = useCallback (() => {});

  return (
    <div>
      <Usememoanother />
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
    </div>
  );
}

export default Use;
