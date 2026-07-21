let cart = JSON.parse(

localStorage.getItem("cart")

) || [];

const summary = document.getElementById("summary");

const total = document.getElementById("grand-total");

let grand = 0;

cart.forEach(item=>{

grand += item.price * item.quantity;

summary.innerHTML += `

<p>

${item.title}

x

${item.quantity}

=

$

${(item.price*item.quantity).toFixed(2)}

</p>

`;

});

total.textContent =

`Grand Total : $${grand.toFixed(2)}`;

function placeOrder(){

alert("Order Placed Successfully!");

localStorage.removeItem("cart");

location.href="index.html";

}