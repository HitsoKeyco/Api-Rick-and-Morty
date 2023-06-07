import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import useFetch from './hooks/useFetch';
import { useEffect, useState } from 'react';
import LocationInfo from '../components/locationInfo';
import ResidentCard from '../components/ResidentCard';
import FomSearch from '../components/FomSearch';

function App() {
  const randomId = getRandomNumber(126);
  const [idLocation, setIdLocation] = useState(randomId)
  const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
  
  const [location, getApiLocation, hasError] = useFetch(url)


    useEffect(() => {
      getApiLocation()
    }, [idLocation])


  return (
    <>
      <div className="contenedor__portada">
        <img className='img__portada' src="portada.jpg" alt="" srcset="" />
      </div>
      <div className="app">

        <FomSearch  setIdLocation={setIdLocation}/>

        {
        hasError
            ? <div className="cont_alert"><h2 className="alert">👀Hey! you must provide an id from 1 to 126</h2></div> 
            : (
              <>
                <LocationInfo location={location}/>
                <div className="resident-container">
                  {            
                    location?.residents.map(url => (
                      //return implicito de varias lineas creamos nuevo componente
                    <ResidentCard url={url} key={url}/>
                    ))
                  }
                </div>
              </>
              )
        }
      </div>
      </>
  )


}

export default App
