import './App.css';
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
      <div className="app-header">
        <h1>Dashboard Builder</h1>
      </div>
      <div className="dashboard-container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
