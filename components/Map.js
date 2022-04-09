import React from 'react'
import ReactMapGL,{Marker , Popup} from "react-map-gl"
import { useState } from 'react'
import {getCenter} from "geolib"
import 'mapbox-gl/dist/mapbox-gl.css'
const Map = ({searchResults}) => {
  // transform search result obj into 
  const coordinates = searchResults.map((result) =>  ({
    longitude:result.long, 
    latitude:result.lat
  }))
  const center = getCenter(coordinates)
  const [viewport , setViewport] = useState({
      width:"100%",
      height:"100%",
      latitude:center.latitude,
      longitude:center.longitude,
      zoom:11
  })
  const [selectedLocation , setselectedLocation]= useState({})
  return (
      <ReactMapGL
        mapStyle="mapbox://styles/abhaybisht/cl18tjoqx002g14ukd8ydfw2j"
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onMove={evt => setViewport(evt.viewport)}
      >
        {searchResults.map(result =>(
          <div key={result.long}>
            <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
            >
                <p onClick={() =>setselectedLocation(result)} 
            className='cursor-pointer text-2xl animate-bounce'
              aria-label='push-pin'
              role="img"
              >📍</p>
            </Marker>
            {selectedLocation.long === result.long ?(
                <Popup onClose={() => setselectedLocation({})}
                    closeOnClick={true}
                    latitude={result.lat}
                    longitude={result.long}
                    >
                    {result.location}
                  </Popup>
              ) : (false )}
          </div>
        ))}
      </ReactMapGL>
  )
}
export default Map