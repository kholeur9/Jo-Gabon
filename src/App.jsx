import * as React from 'react';
import './App.css';
import CallColor from './components/CallColor';



function App() {
  
  const [uiColor, setUiColor] = React.useState(null);

  const getColor = (color) => {
    setUiColor(color)
  }
  
  return (
    <div className="App">
      <div className="App-color" style={{ background: `${uiColor}` }}>
      </div>
      <CallColor getColor={getColor} />
    </div>
  )
}

export default App;