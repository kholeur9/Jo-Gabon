import * as React from 'react';

const CallColor = ({ getColor }) => {

  const [myColor, setMyColor] = React.useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setMyColor(value);
    getColor(value);
  }
  
  return (
    <input 
      type="text"
      ari-label="color"
      value={myColor}
      onChange={handleChange}
    />
  );
};
  
export default CallColor;