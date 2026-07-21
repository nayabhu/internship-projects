const params = new URLSearchParams(window.location.search);

const id = params.get("id");

async function loadProduct(){

    const response = await fetch(

        `https://fakestoreapi.com/products/${id}`

    );

    const product = await response.json();

    document.getElementById("product").innerHTML = `

        <div class="card">

            <img src="${product.image}">

            <h2>${product.title}</h2>

            <p>${product.description}</p>

            <h3>$${product.price}</h3>

        </div>

    `;

}

loadProduct();