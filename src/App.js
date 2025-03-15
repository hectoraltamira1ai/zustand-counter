import './App.css';
import useStore from './store';
import clickSound from './click.mp3'; // Import the click sound

function App() {
  const { count, increase, decrease, reset } = useStore();

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const handleIncrease = () => {
    playClickSound();
    increase();
  };

  const handleDecrease = () => {
    playClickSound();
    decrease();
  };

  const handleReset = () => {
    playClickSound();
    reset();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
      </header>
    </div>
  );
}

export default App;
