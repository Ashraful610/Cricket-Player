import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total = 0;
    let bouns = 0 ;
    for(const player of cart){
        total = total + player.salary 
        bouns = bouns + player.bouns
    }
     const tax = parseInt((total * 0.1 ).toFixed(2))
     const grandTotal = total + bouns + tax
    return (
        <div className='cart'>
            <h2>Monthly Salary</h2>
            <h3>Selected item : {cart.length} </h3>
            <h3>Total : {total}</h3>
            <h3>Bouns : {bouns}</h3>
            <h3>Tax : {tax}</h3>
            <h3>Grand Total : {grandTotal} </h3>
        </div>
    );
};

export default Cart;