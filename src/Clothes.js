import React from "react";

import "./App.css";

function Clothes({ title, image, description, category, price }) {
  return (
    <div className="row">
      <h2>{title}</h2>
      <img src={image} alt="" width="30%" height="400px" className="rounded" />
      <p>{description}</p>
      <p className="category">{category}</p>
      <p className="price">{price}</p>
    </div>
  );
}

export default Clothes;
