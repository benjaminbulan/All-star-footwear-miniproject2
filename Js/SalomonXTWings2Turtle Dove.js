let carts = document.querySelectorAll('.add-to-cart');

let products = [
    


    {
        name: "Salomon XT-Wings 2 Turtle Dove",
        tag: "SalomonXT-Wings2TurtleDove",
        price: 9207.00,
        inCart: 0
    }, 

    {
        name: "Air Jordan 4 Sail Canvas",
        tag: "AirJordan4SailCanvas",
        price: 17757.00,
        inCart: 0
    }, 

    {
        name: "Nike Waffle One",
        tag: "NikeWaffleOne",
        price: 4995.00,
        inCart: 0
    }, 

    {
        name: "Nike Court Legacy Next Nature",
        tag: "NikeCourtLegacyNextNature",
        price: 3495.00,
        inCart: 0
    }, 

    {
        name: "Nike Daybreak",
        tag: "NikeDaybreak",
        price: 4995.00,
        inCart: 0
    }



];
for (let i=0; i < carts.length; i ++) {
    carts[i].addEventListener('click', () => {
      cartNumbers(products[i]);
      totalCost(products [i])
  }) 
}

function onLoadCartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers'); 

  if(productNumbers) {
      document.querySelector(' .cart-icon span'). textContent = productNumbers; 
  }
}


  function cartNumbers(product) {

     
         let productNumbers = localStorage.getItem('cartNumbers'); 
         productNumbers = parseInt(productNumbers); 

         let cartItems = localStorage.getItem('productsInCart');
         cartItems = JSON.parse(cartItems);
     

         if( productNumbers) {
          localStorage.setItem('cartNumbers', productNumbers + 1); 
          document.querySelector(' .cart-icon span'). textContent = productNumbers + 1;   

         }  else{
             
          localStorage.setItem('cartNumbers', 1); 
          document.querySelector(' .cart-icon span'). textContent = 1; 
         }

setItems(product); 




}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1; 
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


function totalCost(product) {
  //console.log("The product price is", product.price); 
  let cartCost = localStorage.getItem('totalCost'); 

  console.log("My cartCost is", cartCost); 
  console.log(typeof cartCost); 

   if(cartCost != null){
       cartCost = parseInt(cartCost); 
        localStorage.setItem("totalCost", cartCost + 
        product.price); 
   } else {     
      
      localStorage.setItem("totalCost", product.price); 

   }
 

}

function displaycart() {
  let cartItems = localStorage.getItem("productsInCart"); 
  cartItems = JSON.parse(cartItems); 
  let productContainer = document.querySelector
  (".products"); 
  let cartCost = localStorage.getItem('totalCost'); 


  //console.log( cartItems); 
 if( cartItems && productContainer ) {
     productContainer.innerHTML = ''; 
     Object.values( cartItems).map( item => {
      productContainer.innerHTML += ` 
    

 
    <div class="container-fluid mt-3">
        <div class="row">
             <div class="col bg-white text-dark"> 
                  <div class="product">
                       <button type="button" class="btn btn-danger">
                          <i class="fa-sharp fa-solid fa-xmark"></i>
                        </button>
                    <img src="./images/${item.tag}.jpg">
                    <span>${item.name}</span>

                </div> 
            </div>

            <div class="col bg-white text-dark">    
               <div class="price">
                  ₱${item.price}.00
                </div>
            </div>       
     <div class="col bg-white text-dark">
        <div class="quantity">
        <button type="button" class="btn btn-dark"><ion-icon class="increase" name="add"></ion-icon></button>
        </button>

            <span>${item.inCart}</span>
            <button type="button" class="btn btn-success"><ion-icon class="decrease" name="remove"></ion-icon></button>

         </button>
        </div>
     </div>   
        
      <div class="col bg-white text-dark">   
        <div class="total">
           ₱${item.inCart * item.price}.00
         </div>
        </div>
      </div>  
     </div> 
  
  </div><br>
</div>    

  
      `; 

     });  

     
      
     productContainer.innerHTML += `
        <div class="baskettotalContainer">
           <h4 class="basketTotalTitle">
             Total:

           </h4>
           <h4 class=""basketTotal">
           ₱${cartCost}.00
           </h4>
     `; 

   
 }




    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
              console.log(removeCartItemButtons)
                  for (var i= 0; i< removeCartItemButtons.length; i ++) {
                       var button = removeCartItemButtons[i]
                          button.addEventListener('click' , function(event) {
                             var buttonClicked = event.target
                              buttonClicked.parentElement.parentElement.parentElement.remove()
                               updateCartTotal()

 })
 }

 manageQuantity(); 

}






onLoadCartNumbers(); 
displaycart(); 


