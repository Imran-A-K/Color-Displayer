import React from 'react'
import colorNames from 'colornames';

const Input = ({ colorValue, setColorValue, setHexValue,
   isDarkText, setIsDarkText }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="">Add Color Name:</label>
        <input
        autoFocus
        type="text"
        placeholder='Add Color Name' 
        required
        value={colorValue}
        onChange={(event) => {
          setColorValue(event.target.value);
          setHexValue(colorNames(event.target.value));
          }}/>
          <button
            type="button"
            onClick={() => setIsDarkText(!isDarkText)}
            style={{
              color: isDarkText ? "#000" : "papayawhip",
              backgroundColor: isDarkText ? "#Fff" :"#000" ,
      }}
          >
            Toggle Text Color
          </button>
    </form>
  )
}

export default Input