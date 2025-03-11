import './App.css';
/*import { BrowserRouter as Router, Route, Switch } from "react-router-dom";*/
import Header from './components/Header';
import Home from './pages/Home';
import Emprestimo from './pages/Emprestimo';


function App() {
  return (
    <>
    <Header />
    <Home />
    <Emprestimo />
    </>
  );
};

export default App;
