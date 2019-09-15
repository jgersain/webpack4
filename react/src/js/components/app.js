import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'

function App() {
  const [loaderList, setLoaderList] = useState([])

  function handleClick() {
    setLoaderList(data.loaders)
  }

  return (
    <div>
      Aplicación hecha en React
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