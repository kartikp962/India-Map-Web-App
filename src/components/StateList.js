import {React, useEffect, useState} from 'react'
import '../App.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import citiesData from '../citiesData.json';
import icon1 from '../images/covid19-2.png'
import { useNavigate } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';

const covidIcon = new Icon({
  iconUrl: icon1,
  iconSize: [25, 25]
})

function StateList(props) {
  // const location = useLocation();
  // const stateCities = location.state && location.state.stateCities ? location.state.stateCities : [];
  const [ activeCovid, setActiveCovid ] = useState( null );

  const navigate = useNavigate();

  return (
    <MapContainer 
          center = { [20.593683, 78.962883] }
          zoom = { 5 }
          scrollWheelZoom = { true } 

      >
      <TileLayer 
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
      />
       { citiesData.map((eachData, index) => (
         <Marker 
            key={index} 
            position= {[eachData.lat, eachData.lon]}
            eventHandlers={{
              click: () => {
                setActiveCovid(eachData)
                // setSelectedStateCities(eachData.Cities);
                navigate('/cityTemp', {state: {cityName: eachData.name}});
              }
            }}
            icon= {covidIcon}
          />
       ))}
      </MapContainer> 
  );
}

export default StateList;
