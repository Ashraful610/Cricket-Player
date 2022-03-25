import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Players.css'
const Players = () => {
    const [players, setPlayer] = useState([])
    useEffect(()=>{
        fetch("cricketer.json")
         .then ( res => res.json())
         .then ( players => setPlayer(players))
    },[])
    // event handler 
    const addToCart = () => {
        console.log('added this event handler')
    }
    return (
        <div className='players-container'>
            <div className="player-cart">
                    {
                        players.map(player =>
                     <Player
                             key={player.id}
                             player={player}
                             handler={addToCart}>
                      </Player>)
                    }
            </div>
            <div className="cart-container">
                 <Cart></Cart>
            </div>
        </div>
    );
};

export default Players;