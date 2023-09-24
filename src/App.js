import './App.css';
import  Dashboard  from './components/Dashboard/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Grievance from './components/Dashboard/Grievance'
import Status from './components/Dashboard/Status'
import Query from './components/Dashboard/Query';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path="/grievance" element={<Grievance/>} />
            <Route path="/status" element={<Status/>} />
            <Route path="/query" element={<Query/>} />
          </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
