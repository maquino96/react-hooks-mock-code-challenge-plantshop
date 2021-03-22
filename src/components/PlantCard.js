import {useState} from "react";

function PlantCard({plantObj, fetchAPI}) {

  const [inStock, setInStock] = useState(true)
  const [updatedPrice, setUpdatedPrice] = useState('')

  const handlePriceSubmit = (event) => {

    event.preventDefault()

    fetch(`http://localhost:6001/plants/${plantObj.id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({price: updatedPrice}) 
    })
      .then(r => r.json())
      .then(updatedPlant => {
        setUpdatedPrice('')
        fetchAPI()
        // event.target.reset()  
      }) 


  }

  const handleDelete = () =>{

    fetch(`http://localhost:6001/plants/${plantObj.id}`, {
      method: 'DELETE',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({}) 
    })
      .then(r => r.json())
      .then(deletedPlant => {
        fetchAPI()
      }) 

  }


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

      <form onSubmit={handlePriceSubmit}>
        <input type="number" name="price" step="0.01" placeholder="Price" value={updatedPrice} onChange={ e => setUpdatedPrice(e.target.value)}/>
        <button type="submit">Update Price</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
