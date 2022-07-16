import logo from './logo.svg';
import './App.css';
import { app, analytics, auth } from './firebase';

function App() {
  return (
    <>
    <div className="main">
      <Dashboard></Dashboard>
    </div>
    </>
  );
}

export default App;
