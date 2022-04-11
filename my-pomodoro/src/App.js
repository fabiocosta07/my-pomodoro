import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Test from './pages/test';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="test" element={<Test/> } />
      </Routes>
    </BrowserRouter>     
    </div>
  );
}

export default App;
