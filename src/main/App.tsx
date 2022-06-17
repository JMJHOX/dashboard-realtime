
import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Topbar from '../commons/components/Topbar/Topbar';
import DashBoardModule from '../modules/dashboard/Dashboard';
import ConfigModule from '../modules/configuration/config';



function App() {
  
  return (
    <div className="App">
      
 <Router>
      <Topbar />
      <Routes>
        <Route  path="/" element={<DashBoardModule></DashBoardModule>} />
        <Route  path="/config" element={<ConfigModule></ConfigModule>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
