import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'
import logo from '../../images/wallpapper02.jpg'
import video from '../../video/que-es-core.mp4'

function App() {
  const [loaderList, setLoaderList] = useState([])

  function handleClick() {
    setLoaderList(data.loaders)
  }

  return (
    <div>
      <p>
        Aplicación hecha en React
      </p>
      <video 
        src={ video } 
        width={360} 
        controls 
        poster={logo}
      >
      </video>
      <p>
        <img
          height="200"
          width="300" 
          src={ logo } 
          alt="imagen de prueba"
        />
      </p>
      <ul>
        {
          loaderList.map(item => <Loader {... item} key={item.id} />)
        }
      </ul>
      <button onClick={ handleClick }>Mostrar lo apendido</button>
    </div>
  )
}

export default App