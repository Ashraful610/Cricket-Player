// add to local storage from other component 
const addToDb = name => {
 let shoppingCart = {}
 // get  the shopping cart form local storage
 const storedCart = localStorage.getItem('shopping-cart')
 if(storedCart){
     shoppingCart = JSON.parse(storedCart)
 }

 // add quantity 
 const quantity = shoppingCart[name]
 if(quantity){
     const newQuantity = quantity + 1
     shoppingCart[name] = newQuantity
 }
 else{
     shoppingCart[name] = 1
 }
 localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}
const getStoredCart = () => {
    let shoppingCart = {}
    // get  the shopping cart form local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart
 }
export {addToDb ,
     getStoredCart
    }
