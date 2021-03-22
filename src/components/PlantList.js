import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, fetchAPI}) {

  const plantComponents = plants.map( plant => <PlantCard key={plant.id} plantObj={plant} fetchAPI={fetchAPI}/>)

  return (
    <ul className="cards">{plantComponents}</ul>
  );
}

export default PlantList;
