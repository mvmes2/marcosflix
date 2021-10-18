import './App.css';
import Login from './pages/Login';
import { Route } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Route exact patch="/" component={ Login } />
      <Route exact patch="/Home" component={ Home } />
    </div>
  );
}

export default App;
