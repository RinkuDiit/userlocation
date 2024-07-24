import React, { useEffect, useState } from 'react'

function Location() {



    const [longitude, setlongitude] = useState('')
    const [latitude, setlatitude] = useState('')
    const [location, setlocation] = useState(null)

    console.log(location);

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position) =>{
            console.log(position);
            setlongitude(position.coords.longitude)
            setlatitude(position.coords.latitude)
        })

        const fetchapi = async () =>{
          const response= await fetch(`https://api.opencagedata.com/geocode/v1/json?key=62342a82cc8d4f06939001cf07286e33&q=${latitude}%2C+${longitude}&pretty=1&no_annotations=1`)
          const data= await response.json()
          setlocation(data.results[0].formatted)
        }
       fetchapi();
    },[])

    if (!location) {
        return(
            <h2>Loading....</h2>
        )
    }

  return (
    <div>
           <center>
           <h3> latitude:{latitude}</h3>
            <h3>longitude:{longitude}</h3>
            {/* <h3>{location.results[0].components.city}</h3>
            <h3>{location.results[0].components.country}</h3> */}
            
            <h3>location:{location}</h3>
           </center>

    </div>
  )
}

export default Location