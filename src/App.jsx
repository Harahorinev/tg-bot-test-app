import React, {useEffect} from 'react';
import './App.css';
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/header/Header";

// const tg = window.Telegram.WebApp

function App() {
    const {onToggleButton, TG} = useTelegram()

    useEffect(() => {
        TG.ready()
    },[])


    return (
        <div className="App">
            <Header/>
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
}

export default App;
