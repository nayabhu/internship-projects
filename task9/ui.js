// ==============================
// Reusable Button
// ==============================

function createButton({ text, onClick }) {

    const button = document.createElement("button");

    button.className = "btn";

    button.textContent = text;

    button.addEventListener("click", onClick);

    return button;

}

// ==============================
// Reusable Product Card
// ==============================

function createCard(product) {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `

        <img src="${product.image}" alt="${product.title}">

        <h3>${product.title}</h3>

        <p>${product.category}</p>

        <div class="price">$${product.price}</div>

    `;

    const button = createButton({

        text:"Add To Cart",

        onClick:()=>addToCart(product)

    });

    card.appendChild(button);

    return card;

}

// ==============================
// Toast Notification
// ==============================

function showToast(message){

    const toast = document.createElement("div");

    toast.className="toast";

    toast.textContent=message;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.remove();

    },2500);

}
const detailButton = createButton({

    text:"View Details",

    onClick:()=>{

        location.href=`product.html?id=${product.id}`;

    }

});

card.appendChild(detailButton);