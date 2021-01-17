import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer( { sushis, onSushiEaten }) {

  const sushi = sushis.map((sushi) => {
    return (
      <Sushi key={sushi.id} sushi={sushi} onSushiEaten={onSushiEaten} />
    )
  })

  return (
    <div className="belt">
      {sushi}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
