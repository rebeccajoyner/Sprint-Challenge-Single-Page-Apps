import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard'



export default function LocationList() {
   const [locations, setLocations] = useState([])
   useEffect(() => {
       axios
           .get('https://rickandmortyapi.com/api/location/')
           .then(results => setLocations(results.data.results))
           .catch(error => console.log('Unexpected Error: ', error))      
   }, [])

   return (    
       <section className="character-list grid-view">           
           {locations.map(location => {
               return <LocationCard key={location.id} {...location} location={location} />      
           })}         
       </section>       
   )
}