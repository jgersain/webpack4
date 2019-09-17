import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'
import logo from '../../images/wallpapper02.jpg'
import video from '../../video/que-es-core.mp4'

import '../../less/less.less'
import '../../sass/sass.scss'
import '../../stylus/stylus.styl'

function App() {
  const [loaderList, setLoaderList] = useState([])

  async function handleClick() {
    setLoaderList(data.loaders)
    const { alerta } = await import('./alert')
    alerta("Este es un modulo cargado dinamicamente")
  }

  return (
    <div>
      <p className="sass">
        Esto contiene estilos con sass
      </p>
      <p className="less">
        Esto contiene estilos con less
      </p>
      <p className="stylus">
        Esto contiene estilos con stylus
      </p>
      <p className="post-css">
        <p className="uno">
          Prueba uno
        </p>
        <p className="dos">
          Prueba dos
        </p>
        Esto contiene estilos con post css
      </p>
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
      <button onClick={ handleClick }>Mostrar lo aprendido</button>
    </div>
  )
}

export default App