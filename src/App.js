import './App.css';
import {useEffect, useState} from "react";
import MD5 from "crypto-js/md5"
import Sidebar from "./Sidebar";
import PersonajeDetallo from "./PersonajeDetallo";

function App() {


    const [data, setData] = useState({})
    const [selCharacter, setSelCharacter] = useState({})

    useEffect(() => {

        const URL = "https://gateway.marvel.com/v1/public/characters"

        fetch(URL + getParams()).then((res) => {
            return res.json()
        }).then((res) => {
            setData(res.data)
            setSelCharacter(res.data.results[0])
        })
    }, [])

    return (
        <div className="App">
            <h1>Personajes de Marvel</h1>
            <div className="main-screen">
                <Sidebar characters={data.results ? data.results : []} selCharacter={selCharacter ? selCharacter : null}
                         setSelCharacter={setSelCharacter}/>
                <PersonajeDetallo selCharacter={selCharacter}/>
            </div>
        </div>
    );
}

const getParams = () => {
    const date = Date.now()
    const KEYS = "cc9ac0e433a289ef73298ea2499d923bf30920fb9d33dcd9cd6e374ba67fd655967a2eaa"
    let hash = MD5(date + KEYS)
    return `?ts=${date}&hash=${hash}&apikey=9d33dcd9cd6e374ba67fd655967a2eaa`
}

export default App;

export {getParams}
