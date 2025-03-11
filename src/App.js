import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Emprestimo from './pages/Emprestimo';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emprestimos" element={<Emprestimo />} />
      </Routes>
    </Router>
  );
}

export default App;

