import React, {useEffect} from 'react';

const TileGenerator = (props) => {

  const colors = ["#353535", "#b3b3b3", "#919191", "#5e5e5e", "#464646"]
  const colorKey = () => Math.floor(Math.random()*5)


  const tileCache = new Array(props.tiles)
    .fill(1)
    .map((e, i) => {
      return ( 
        <div className="tile" key={"Tile-" + i} id={"Tile-" + i} 
            style={{backgroundColor: `${colors[colorKey()]}`}}>
          <div className="innerDiv" ></div>
        </div>
      )
    });
  
  const hideTiles = () => {
    const divList = document.querySelectorAll('.tile');
    const PYO = window.pageYOffset;
    const IH = window.innerHeight;
    
    divList.forEach(tile => {
      const TOT = tile.offsetTop;
      const TOH = tile.offsetHeight;

      if ((TOT > PYO + 85) && (IH + PYO > TOT + TOH)) tile.classList.remove("hiddenTile")
      else tile.classList.add("hiddenTile")
    })
  }

  useEffect(() => hideTiles())
  window.onscroll = () => hideTiles();
  window.onresize = () => hideTiles();

  return (
    <div >
      <div className="generator">
        {tileCache}
      </div>
    </div>
  )
}

export default TileGenerator;