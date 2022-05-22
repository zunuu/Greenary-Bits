import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='home' element={<Homepage></Homepage>} />
      </Routes>
    </div>
  );
}

export default App;
