import logo from './logo.svg';
import './App.css';
import { app, analytics, auth } from './firebase';
import Dashboard from './Dashboard';

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
