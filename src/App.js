import './styles/App.css';
import { useState } from 'react';
import TileInput from './TileInput';
import TileGenerator from './TileGenerator';

function App() {
  const [tiles, setTiles] = useState(0);

  return (
    <div className="App">
      <TileInput tiles={tiles} setTiles={setTiles} />
      <TileGenerator tiles={tiles} setTiles={setTiles} />
    </div>
  );
}

export default App;
