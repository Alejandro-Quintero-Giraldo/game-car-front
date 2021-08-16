import React, { useState } from 'react';
import { PlayerList } from '../components/PlayerList';
import http from '../environments/AXIOS_CONFIG';
import { url } from '../environments/urls'
import '../App.css'
//import Swal from 'sweetAlert2';
import { useEffect } from 'react';

const Home = () => {

    const [trackDistance, setTrackDistance] = useState();
    const [players, setPlayers] = useState([]);
    const [id, setId] = useState("");
    const [results, setResults] = useState("");


    const [playerName, setPlayerName] = useState();

    const addPlayerToList = () => {

        setPlayers([...players, playerName]);
        setPlayerName(null);
        console.log(players);
    }
    const[gameStarted, setGameStarted] = useState();


    useEffect(() => {
        setGameStarted(false);
    })

    const sendConfiguration = () => {
        http.post(url.configureGame(trackDistance), players)
    }

    const startGame = () => {
        http.post(url.startGame(id)).then(res => setResults(res.data));
    }

    return (
        <>
            <div className='container-home'>
                <div className='subcontainer'>
                    <h1>Ingresa la distancia de la pista en kilómetros y debes escribir tres jugadores</h1>
                    <label for='track_distance'>Distancia de la pista</label>
                    <input className='textbox' onChange={(e) => {
                        e.preventDefault();
                        setTrackDistance(e.target.value);
                        console.log('track' + trackDistance);
                    }} type='number' name='track_distance' />

                    <br></br>
                    <label for="players">Lista de jugadores</label>
                    <PlayerList players={players} name='players' />
                    <br></br>
                    <input className='textbox' onChange={(e) => {
                        e.preventDefault();
                        setPlayerName(e.target.value)
                    }} type="text" placeholder="Ingresa el nombre de un jugador"></input><br></br>
                    <button className='button' onClick={
                        addPlayerToList
                    }>Añadir jugador</button><br></br>
                    <button className='button' id='IniciarJuego' onClick={sendConfiguration}>
                        Terminar configuración
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home;
