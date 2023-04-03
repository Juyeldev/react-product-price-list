
import './App.css';
import DashBoard from './components/DashBoard/DashBoard';
import Navbar from './components/Navbar/Navbar';
import PhonBar from './components/PhonBar/PhonBar';
import PriceList from './components/PricsList/PriceList';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <PriceList></PriceList>
      <DashBoard></DashBoard>
      <PhonBar></PhonBar>
    </div>
  );
}

export default App;
