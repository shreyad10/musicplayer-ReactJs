
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/LoginPage';
import Verify from './components/VerifyPage';
import Dashboard from './components/DashBoardPage';

function App() {
  return (
    <div className="App">
      {/* <h1>Hi</h1> */}
     <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/verify" element={<Verify />} />
            <Route exact path="/dashboard" element={<Dashboard />} />


          </Routes>
        </Router>
    </div>
  );
}

export default App;
