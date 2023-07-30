import TextEditor from "./Components/TextEditor";


import { useState } from "react";

const App = () => 
{
  const [value, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };

  return (
    <div className="container">
    

    <div className="verti">
      <h2>Basic Text Editor</h2>

       <div className="hori" >
        <TextEditor getValue={getValue}/>
        </div>
      
    </div>

    </div>
  )
}

export default App;