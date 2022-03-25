import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Player.css'
const Player = ({player,handler}) => {
    const {name,img,salary,home,job,bouns} = player
    // console.log(name,age,salary, home,job,bouns)
    return (
        <div className='player'>
              <img src={img} alt="" />
              <div className='info'>
                  <h3>Name : {name}</h3>
                   <h3> Home : {home}</h3>
                   <h3>Job : {job}</h3>
                   <h3>Salary : {salary}</h3>
                   <h3> Bouns : {bouns}</h3>
              </div>
              <button  onClick={handler} className='player-btn'>
                 <h3> Add to Money </h3> 
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
              </button>
        </div>
    );
};

export default Player;