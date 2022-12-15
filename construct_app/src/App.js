// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Carausal from './Components/Carausal';
import LiftedCards from './Components/LiftedCards';
import Operations from './Components/Operations';
import Footer1 from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carausal/>
      <LiftedCards/>
      <Operations/>
      <Footer1/>
    </div>
  );
}

export default App;
