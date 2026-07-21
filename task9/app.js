const productsContainer=document.getElementById("products");

let allProducts=[];

// ============================
// Fetch Products
// ============================

async function loadProducts(){

    const response=await fetch("https://fakestoreapi.com/products");

    const data=await response.json();

    allProducts=data;

    displayProducts(data);

    loadCategories(data);

}

loadProducts();

// ============================
// Display Products
// ============================

function displayProducts(products){

    productsContainer.innerHTML="";

    products.forEach(product=>{

        productsContainer.appendChild(createCard(product));

    });

}
// ============================
// Load Categories
// ============================

function loadCategories(products){

    const category=document.getElementById("category");

    const categories=[...new Set(products.map(p=>p.category))];

    categories.forEach(cat=>{

        const option=document.createElement("option");

        option.value=cat;

        option.textContent=cat;

        category.appendChild(option);

    });

}
// ============================
// Search
// ============================

document.getElementById("search").addEventListener("input",function(){

    const keyword=this.value.toLowerCase();

    const filtered=allProducts.filter(product=>

        product.title.toLowerCase().includes(keyword)

    );

    displayProducts(filtered);

});
// ============================
// Category Filter
// ============================

document.getElementById("category").addEventListener("change",function(){

    const value=this.value;

    if(value==="all"){

        displayProducts(allProducts);

        return;

    }

    const filtered=allProducts.filter(product=>

        product.category===value

    );

    displayProducts(filtered);

});
// ============================
// Cart
// ============================

let cart=JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

function addToCart(product){

    cart.push(product);

    localStorage.setItem("cart",JSON.stringify(cart));

    updateCartCount();

    showToast("Product Added");

}
function updateCartCount(){

    document.getElementById("cart-count").textContent=cart.length;

}
function addToCart(product){

    const existing = cart.find(item => item.id === product.id);

    if(existing){

        existing.quantity++;

    }else{

        cart.push({
            ...product,
            quantity:1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    showToast("Product Added");

}