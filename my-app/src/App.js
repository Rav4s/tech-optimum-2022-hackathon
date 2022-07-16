import logo from './logo.svg';
import './App.css';
import { app, analytics, auth } from './firebase';
import Dashboard from './Dashboard';
import Router from './Router';

function App() {
  return (
    <>
      <div className="main">
        <Router>
        </Router>
      </div>
    </>
  );
}

export default App;
