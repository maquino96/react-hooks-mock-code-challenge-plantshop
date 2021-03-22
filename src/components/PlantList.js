import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const plantComponents = plants.map( plant => <PlantCard key={plant.id} plantObj={plant}/>)

  return (
    <ul className="cards">{plantComponents}</ul>
  );
}

export default PlantList;
