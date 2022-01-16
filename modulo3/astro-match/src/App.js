import react from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CardUsuarios from './components/CardUsuarios/CardUsuarios';
import CardMatch from './components/CardMatch/CardMatch';
import './App.css';

function App() {
  const [cont, setCont] = useState(false)
  const [cont2, setCont2] = useState(false)
  const [profile, setProfile] = useState({})
  const [matches, setMatches] = useState([])

  const renderizaNaTela = (cont) => {
    if (cont === false) {
      return (
        <div>
          <CardUsuarios
            getProfile={getProfile}
            profile={profile}
            aluno={aluno}
            disMatch={disMatch}
            choosePerson={choosePerson}
            alteraTela={alteraTela}
          />
        </div>
      )
    } else if (cont === true) {
      return (
        <div>
          <CardMatch
            matches={matches}
            getMatches={getMatches}
            Clear={Clear}
          />
        </div>
      )
    }
  }
  const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/"
  const aluno = "joao-lucas"
  useEffect(() => {
    getProfile(aluno)
  }, [])
  useEffect(() => {
    getProfile(aluno)
  }, [cont2])
  const disMatch = () => {
    setCont2(!cont2)
  }
  const match = () => {
    setCont2(!cont2)
  }
  const alteraTela = () => {
    setCont(!cont)
  }

  const botaoTela = () => {
    if (cont === false) {
      return (<img className="BotaoPagina" src="https://images.vexels.com/media/users/3/157512/isolated/preview/d737a872708b488d89d0341ac9b8bc5a-pessoas-contatam-pessoas-icone.png" onClick={alteraTela} />)
    } else if (cont === true) {
      return (<img className="BotaoPagina" src="https://w7.pngwing.com/pngs/418/4/png-transparent-orange-and-white-house-icon-computer-icons-home-free-of-house-icon-angle-text-orange.png" onClick={alteraTela} />)
    }
  }


  const getProfile = async (aluno) => {
    try {
      const response = await axios.get(url + aluno + `/person`)
      setProfile(response.data.profile)
      console.log(profile)
    } catch (err) {
      console.log(err)
    }
  }
  const choosePerson = async (profileId, profileChoice) => {
    const body = {
      id: profileId,
      choice: profileChoice
    }
    try {
      const response = await axios.post(url + aluno + `/choose-person`,
        body,
        {
          headers: {
            ContentType: "application/json"
          }
        }
      )
      console.log(response.data)
      match()
    } catch (err) {
      console.log(err)
    }
  }
  const getMatches = async () => {
    try {
      const response = await axios.get(url + aluno + `/matches`)
      setMatches(response.data.matches)
    } catch (err) {
      console.log(err)
    }
  }

  const Clear = async () => {
    try {
      const response = await axios.put(url + aluno + `/clear`,
        {
          headers: {
            ContentType: "application/json"
          }
        }
      )
      console.log(response.data)
      getMatches()

    } catch (err) {
      console.log(err)
    }
  }




  return (
    <div className="App">

      <header className="App-Header">
        {botaoTela()}
        <h1 className="App-Titulo">AstroMatch</h1>
      </header>

      {renderizaNaTela(cont)}

      <footer className="Footer">Desenvolvido por João Lucas Roque Cerqueira</footer>

    </div>
  );
}
export default App;