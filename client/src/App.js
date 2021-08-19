import { useState, useEffect } from "react"

import Screenshots from "./components/Screenshots"
import Pesquisar from "./components/Pesquisar"
import Header from "./components/Header"

function App() {
  const [screenshots, setScreenshots] = useState([])

  useEffect(() => {
    const getScreenshots = async () => {
      const screenshotsFromServer = await fetchOneScreenshots()
      setScreenshots(screenshotsFromServer)
    }

    getScreenshots()
  }, [])

  //get todos screenshots
  const fetchOneScreenshots = async () => {
    const res = await fetch('https://api-manchete-brasil.herokuapp.com/screenshot')
    const data = await res.json()
    return data
  }

  //get screenshots de um jornal em uma data
  //date: dia-mes-ano
  const fetchScreenshots = async (screenshot) => {
    console.log(screenshot)
    const res = await fetch(`https://api-manchete-brasil.herokuapp.com/screenshots/${screenshot['data']}/${screenshot['jornal']}`)
    const data = await res.json()
    console.log(data[0]['imagem']['data'])
    setScreenshots(data)
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
      <Pesquisar onPesquisa={fetchScreenshots}/>
      <Screenshots screenshots={screenshots}/>
      </div>
    </div>
  );
}

export default App;
