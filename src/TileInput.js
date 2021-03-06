import React, { useState } from 'react';

//the mechanism to change the number of tiles
const TileInput = (props) => {
  
  //local state for the input field
  const [num, setNum] = useState();

  const onChange = (e) => {
    let value = +e.target.value;
    setNum(value);
  }

  //sets the number of tiles to the local state value
  const onClick = () => {
    props.setTiles(+num);
  }

  return (
    <div>
      <div className="inputContainer" >
        <label htmlFor="tileInput"
                style={{marginRight: "10px"}}
        >
        Please enter the number of tiles you wish to create: 
        </label>
        <input  type="text" 
                className="tileInput" 
                name="tileInput" 
                required 
                placeholder="0"
                onChange={onChange}
                style={{width: "20px", margin: "5px", textAlign: "center"}}
                ></input>
        <button onClick={onClick} style={{marginBottom: "10px"}}>Submit</button>
      </div>
    </div>
  )
}

export default TileInput;