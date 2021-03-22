import {useState} from "react";

function PlantCard({plantObj}) {

  const [inStock, setInStock] = useState(true)



  return (
    <li className="card">
      <img src={plantObj.image} alt={plantObj.name} />
      <h4>{plantObj.name}</h4>
      <p>Price: {plantObj.price}</p>
      {inStock ? (
        <button className="primary" onClick={() => setInStock(false)}>In Stock</button>
      ) : (
        <button onClick={() => setInStock(true)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
