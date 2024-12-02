import logo from './logo.svg';
import './App.css';
import CameraOrGallery from './CarmeraOrGallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CameraOrGallery />
      </header>
    </div>
  );
}

export default App;
