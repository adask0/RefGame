import Player from './components/Player.jsx';
import Timer from './components/Timer.jsx'

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title="Begginer" targetTime={10} />
        <Timer title="Easy" targetTime={5} />
        <Timer title="Medium" targetTime={2} />
        <Timer title="Hard" targetTime={0.5} />
      </div>
    </>
  );
}

export default App;
