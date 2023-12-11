
import './App.css';
import Nav from './components/Navbar/Nav';
import LineCharts from './components/linecharts/LineCharts';
import Phones from './components/phones/Phones';

import PriceOptions from './components/priceOptions/PriceOptions';

function App() {
  

  return (
    <>
      <Nav></Nav>
      <PriceOptions></PriceOptions>

      <LineCharts></LineCharts>
      <Phones></Phones>
    </>
    
  )
}

export default App
