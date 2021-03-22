import {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search,setSearch] = useState('')
  const [filter, setFilter] = useState([])
  console.log(search)

  // console.log(plants)


  const fetchAPI = () => { 
    fetch('http://localhost:6001/plants')
    .then( r => r.json())
    .then( plantData => setPlants(plantData))
  }

  useEffect( () => {
    fetchAPI()
  }, [])


  const handleSubmitPlant = (newPlant) => {
    const newPlantArr = [...plants, newPlant]
    console.log(newPlantArr)
    setPlants(newPlantArr)
  }

  const handleSearch = (searchTerm) => {

    setSearch(searchTerm)
    const filteredPlants = plants.filter( plant => plant.name.includes(search))
    setFilter(filteredPlants)
  }

  return (
    <main>
      <NewPlantForm onSubmitPlant={handleSubmitPlant} />
      <Search onSearch={handleSearch} search={search}/>
      <PlantList plants={!search.length > 0 ? plants : filter}/>
    </main>
  );
}

export default PlantPage;
