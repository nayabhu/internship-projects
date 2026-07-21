let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-items");

const totalElement = document.getElementById("total");

renderCart();

function renderCart(){

    cartContainer.innerHTML="";

    let total=0;

    cart.forEach((item,index)=>{

        total+=item.price;

        cartContainer.innerHTML+=`

        <div class="card">

            <img src="${item.image}" alt="${item.title}">

            <h3>${item.title}</h3>

            <p>$${item.price}</p>

            <button onclick="removeItem(${index})" class="btn">
                Remove
            </button>

        </div>

        `;

    });

    totalElement.textContent=`Total : $${total.toFixed(2)}`;

}
function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

    renderCart();

}
function renderCart(){

    cartContainer.innerHTML="";

    let total=0;

    cart.forEach((item,index)=>{

        total += item.price * item.quantity;

        cartContainer.innerHTML += `

        <div class="card">

            <img src="${item.image}" alt="${item.title}">

            <h3>${item.title}</h3>

            <p>$${item.price}</p>

            <h4>Quantity : ${item.quantity}</h4>

            <div class="quantity">

                <button onclick="decreaseQuantity(${index})" class="btn">
                    -
                </button>

                <button onclick="increaseQuantity(${index})" class="btn">
                    +
                </button>

            </div>

            <button onclick="removeItem(${index})" class="btn">
                Remove
            </button>

        </div>

        `;

    });

    totalElement.textContent = `Total : $${total.toFixed(2)}`;

}
function increaseQuantity(index){

    cart[index].quantity++;

    localStorage.setItem("cart",JSON.stringify(cart));

    renderCart();

}
function decreaseQuantity(index){

    if(cart[index].quantity>1){

        cart[index].quantity--;

    }else{

        cart.splice(index,1);

    }

    localStorage.setItem("cart",JSON.stringify(cart));

    renderCart();

}
if(cart.length===0){

    cartContainer.innerHTML="<h2>Your cart is empty.</h2>";

    totalElement.textContent="Total : $0";

    return;

}