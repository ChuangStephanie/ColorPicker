import { useState } from "react";

// Write your Color component here
const Color = ({color, setSelectedColor}) => {
  return <div 
            className={color}
            onClick={() => setSelectedColor(color)}
          ></div>
}

const Select = (select, setSelect) => {
  <div 
    className={select}
    onClick={() => setSelect(select)}></div>
}

const App = () => {

  const [selectedColor, setSelectedColor] = useState("");
  const [select, setSelect] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
        
      </div>
      <div id="colors-list">
        <Color color="orange" setSelectedColor={setSelectedColor}/>
        <Color color="green" setSelectedColor={setSelectedColor}/>
        <Color color="blue" setSelectedColor={setSelectedColor}/>
        <Select select="selected" setSelect={setSelect}/>
      </div>
    </div>
  );
};

export default App;
