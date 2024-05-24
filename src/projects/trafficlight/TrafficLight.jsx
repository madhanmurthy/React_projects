import React, { useEffect, useState } from 'react'
import './TrafficLight.css'

function TrafficLight() {
  const [light, setLight] = useState('red');

  useEffect(() => {
    const changeLights = () => {
      if(light === "red") {
        setLight("green")
      } else if(light=== "green") {
        setLight('yellow')
      } else if(light === 'yellow') {
        setLight("red")
      }
    }
    const timer = setInterval(changeLights, 2000);
    return () => clearInterval(timer)
  }, [light])

  return (
    <div className='container'>
      <div className="traffic__light">
        <div className={`light red ${light === 'red' ? "active" : ""}`}></div>
        <div className={`light yellow ${light === 'yellow' ? "active" : ""}`}></div>
        <div className={`light green ${light === 'green' ? "active" : ""}`}></div>
      </div>
    </div>
  )
}

export default TrafficLight
