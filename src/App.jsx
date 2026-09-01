import {useState} from 'react';
const App = () => {
  const [rupees, setRupees] = useState(0);
  const [dollars, setDollars] = useState(0);
  function convert(){
    let result=rupees/88;
    setDollars(result.toFixed(2));
  }
  return (
    <div>
      <h1>Currency Converter</h1>
      <input type="number" placeholder='Enter Rupees' value={rupees} onChange={(e)=>setRupees(e.target.value)}/>
      <button onClick={convert}>Convert</button>
      <h2>Dollars: ${dollars}</h2>
    </div>
  )
}