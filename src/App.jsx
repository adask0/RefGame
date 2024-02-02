import Player from './components/Player.jsx';
import Timer from './components/Timer.jsx'

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title="Begginer" targetTime={0.5} />
        <Timer title="Easy" targetTime={2} />
        <Timer title="Medium" targetTime={5} />
        <Timer title="Hard" targetTime={10} />
      </div>
    </>
  );
}

export default App;
