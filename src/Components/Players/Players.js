import React, { useEffect, useState } from 'react';
import { addToDb } from '../../fakedb';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Players.css'

const Players = () => {
    const [players, setPlayer] = useState([])
    const [cart , setCart] = useState([])
    useEffect(()=>{
        fetch("cricketer.json")
         .then ( res => res.json())
         .then ( players => setPlayer(players))
    },[])
    // event handler 
    const addToCart = (player) => {
        const newCart = [...cart,player]
        setCart(newCart)
        addToDb(player.name)
    }
    return (
        <div className='players-container'>
            <div className="player-cart">
                    {
                   players.map(player => <Player
                             key={player.id}
                             player={player}
                            addToCart={addToCart}>
                      </Player>)
                    }
            </div>
            <div className="cart-container">
                 <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Players;