import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([])
  // console.log(sushis)

  const [plates, setPlates] = useState([])
  const [money, setMoney] =useState(100)

  function handleSushiEaten(sushiObj) {
  
    if (money >= sushiObj.price) {
      setSushis(sushis.filter((sushi) => {
        return sushi.id !== sushiObj.id
       }))
      setPlates([...plates, sushiObj.name])
      setMoney( (money) - sushiObj.price)
   
      }else {
        console.log('Not enough money!')
      }

  }
  
  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(sushiArray => setSushis(sushiArray))
  }, [])

  const fourSushi = sushis.slice(0, 4)

return (
    <div className="app">
      <SushiContainer sushis={fourSushi} onSushiEaten={handleSushiEaten} />
      <Table plates={plates} money={money}/>
    </div>
  );
}

export default App;
