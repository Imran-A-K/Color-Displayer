import Square from "./Square";
import Input from "./Input";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)
  return (
    <div className="App">
      <h1 className="Heading">
      <span></span>
  <span></span>
  <span></span>
  <span></span>
         Color Displayer</h1>
         <div className="Content" >
         <div className="container">
        <div className="ball" style={{backgroundColor: colorValue}}></div>
    </div>
         <div>
         <Square colorValue={colorValue}
     hexValue={hexValue}
     isDarkText={isDarkText}
     />
     <Input 
     colorValue={colorValue}
     setColorValue={setColorValue} 
     setHexValue={setHexValue}
     isDarkText={isDarkText}
     setIsDarkText={setIsDarkText}
     />
         </div>
         </div>
         
     
    </div>
  );
}

export default App;
