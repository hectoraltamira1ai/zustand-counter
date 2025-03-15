import './App.css';
import useStore from './store';
import useAuthStore from './authStore'; // Import the auth store
import clickSound from './click.mp3'; // Import the click sound

function App() {
  const { count, increase, decrease, reset } = useStore();
  const { isLoggedIn, role, login, logout, upgradeToPro } = useAuthStore(); // Destructure auth store

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const handleIncrease = () => {
    if (isLoggedIn) {
      playClickSound();
      increase();
    }
  };

  const handleDecrease = () => {
    if (isLoggedIn) {
      playClickSound();
      decrease();
    }
  };

  const handleReset = () => {
    if (isLoggedIn && role === 'pro') {
      playClickSound();
      reset();
    }
  };

  const handleLogin = () => {
    playClickSound();
    login();
  };

  const handleLogout = () => {
    playClickSound();
    logout();
  };

  const handleUpgradeToPro = () => {
    if (isLoggedIn) {
      playClickSound();
      upgradeToPro();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="auth-buttons">
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={handleUpgradeToPro}>Upgrade to Pro</button>
        </div>
        {isLoggedIn ? (
          <>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleReset} disabled={role !== 'pro'}>Reset</button>
          </>
        ) : (
          <p>Before you can use the app you must be logged in.</p>
        )}
        <p>{isLoggedIn ? `Logged In as ${role}` : "Logged Out"}</p>
      </header>
    </div>
  );
}

export default App;
