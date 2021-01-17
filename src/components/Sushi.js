import React from "react";

function Sushi({ sushi, onSushiEaten }) {
  return (
    <div className="sushi">
      <div className="plate" onClick={() => onSushiEaten(sushi)}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={sushi.img_url}
            alt={ sushi.name + " Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
