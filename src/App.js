import './styles/App.css';
import { useState } from 'react';
import TileInput from './TileInput';
import TileGenerator from './TileGenerator';
import ErrorBoundary from './ErrorBoundary'

function App() {

  //hook for setting the number of tiles
  const [tiles, setTiles] = useState(0);

  return (
    <div className="App">
    <ErrorBoundary>
      <TileInput setTiles={setTiles} />
      <TileGenerator tiles={tiles} />
    </ErrorBoundary>
    </div>
  );
}

export default App;
