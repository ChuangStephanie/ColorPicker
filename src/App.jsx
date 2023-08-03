import { useState } from "react";

// Write your Color component here
const Color = ({color, select, setSelectedColor}) => {
  return <div 
            className={color == select ? color + " selected" : color}               
            onClick={() => setSelectedColor(color)}
          ></div>
}


const App = () => {

  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
        
      </div>
      <div id="colors-list">
        <Color color="orange" select={selectedColor}
          setSelectedColor={setSelectedColor}/>
        <Color color="green" select={selectedColor}
        setSelectedColor={setSelectedColor}/>
        <Color color="blue" select={selectedColor}
        setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
