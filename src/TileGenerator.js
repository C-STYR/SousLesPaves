import React, {useEffect} from 'react';


const TileGenerator = (props) => {

  //a random assortment of colors and a random number generator to select a color
  const colors = ["#353535", "#b3b3b3", "#919191", "#5e5e5e", "#464646"]
  const colorKey = () => Math.floor(Math.random()*5)

  //creates an array of tiles and assigns each a random color
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
  
  //adds/removes a class to the tiles to hide them, based on their position
  const hideTiles = () => {
    const divList = document.querySelectorAll('.tile');
    const PYO = window.pageYOffset;
    const IH = window.innerHeight;
    
    //checks the position of each tile to determine if it is completely within the viewport
    divList.forEach(tile => {

      const TOT = tile.offsetTop;
      const TOH = tile.offsetHeight;

      if ((TOT > PYO + 85) && (IH + PYO > TOT + TOH)) tile.classList.remove("hiddenTile")
      else tile.classList.add("hiddenTile")
    })
  }

  // hides/unhides tiles after first render, when scrolling, when resizing screen
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