import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";// Switch -> Routes (react-router-dom v6)
import Home from './pages/Home';
import Products from './pages/Products';
import Report from './pages/Report';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/reports' element={<Report />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
