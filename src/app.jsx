import React, { createContext } from "react";
import Childa from "./childa";
import Childc from "./childc";

let data = createContext();
let data1 = createContext();

function App() {
  const name = "Manikanta";
  const age = "24";
  const no = "8501969943";
  return (
    <data.Provider value={name}>
      <data1.Provider value={age}>
        <Childc />
      </data1.Provider>
    </data.Provider>
  );
}

export default App;
export { data, data1 };

// <div>
//   <Childa name="Pince" age="24"  />
// </div>
  
  // between usecontext and usecontextapi
