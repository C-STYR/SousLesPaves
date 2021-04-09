import React, { useState } from 'react';

const TileInput = (props) => {
  const [num, setNum] = useState();

  const onChange = (e) => setNum(e.target.value);

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