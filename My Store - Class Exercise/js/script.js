// CLASS EXERCISE

// define my store

function Store(name) {
  this.name = name; //name of the store
  this.products = []; //array of products
  this.shoppingCartProducts = []; // array of products that are in the shopping cart

  //methods

  //adding a product in the Store
  this.addProduct = function (product) {
    this.products.push(product);
  };

  // list the available products(in stock)
  this.listProducts = function () {
    const element = document.querySelector("#products");

    let htmlToAdd = "";
    let index = 0;

    // Traditional way
    // for(let i=0; i < this.products.length; i++) {
    //     htmlToAdd += `
    //         <li data-index="${i}">
    //             <h4>Name: ${this.products[i].name}</h4>
    //             <div><img src="${this.products[i].imgUrl}" alt="${this.products[i].name}" /></div>
    //             <div id="quantity">Quantity: ${this.products[i].quantity}</div>
    //             <div>Description: ${this.products[i].description}</div>
    //             <div>Compare: <input type="checkbox" class="compare-check"></div>
    //             <div> <button class="add-to-cart-btn">Add to cart</button> </div>
    //         </li>
    //     `;
    // }

    for (let product of this.products) {
      htmlToAdd += `
                <li data-index="${index}"> 
                    <h4>Name: ${product.name}</h4>
                    <div><img src="${product.imgUrl}" alt="${product.name}" class="product-img" /></div>
                    <div id="quantity">Quantity: ${product.quantity}</div>
                    <div>Description: ${product.description}</div>
                    <div>Compare: 
                        <input type="checkbox" class="compare-check">
                    </div>
                    <div> <button class="add-to-cart">Add to cart</button> </div>
                </li>
            `;
      index++;
    }

    element.innerHTML = htmlToAdd;
  };

  // Add product to Cart
  this.addToCart = function (product) {
    this.shoppingCartProducts.push(product);
    this.listProductsInShoppingCart();
  };

  // list the products in the shopping cart
  this.listProductsInShoppingCart = function () {
    const element = document.querySelector("#shopping-cart"); // <ol>
    let htmlToAdd = "";
    for (let item of this.shoppingCartProducts) {
      htmlToAdd += `<li>${item.name} - ${item.price} mkd</li>`;
    }
    element.innerHTML = htmlToAdd;
  };

  //compare the products
  this.compareProducts = function (product1, product2) {
    const element = document.querySelector("#compare");
    element.innerHTML = `
        <table border="2">
            <tr>
                <th>${product1.name}</th>
                <th>${product2.name}</th>
            </tr>

            <tr>
                <td>${product1.description}</td>
                <td>${product2.description}</td>
            </tr>

            <tr>
                <td class="${
                  product1.price < product2.price ? "cheaper-product" : ""
                }">${product1.price}</td>
                <td class="${
                  product2.price < product1.price ? "cheaper-product" : ""
                }">${product2.price}</td>
            </tr>
        </table>
        `;
  };

  //get product by provided index number
  this.getProductByIndex = function (index) {
    let product = this.products[index];
    if (product) {
      return product;
    } else {
      return false;
    }
  };
}

//define my products
function Product(name, price, imgUrl, description, quantity) {
  this.name = name;
  this.price = price;
  this.imgUrl = imgUrl;
  this.description = description;
  this.quantity = quantity;
}

//creating the product objects
const phoneSamsung = new Product(
  "Samsung S24",
  60000,
  "./assets/product-img.jpg",
  "Released 2024, January 22",
  10
);
const phoneIphone = new Product(
  "iPhone 15",
  60000,
  "./assets/product-img.jpg",
  "Released 2023, October 13",
  45
);
const phoneMotorola = new Product(
  "Motorola A15",
  40000,
  "./assets/product-img.jpg",
  "Released 2022, May 17",
  22
);

const myStore = new Store("SEDC Store");
myStore.addProduct(phoneSamsung);
myStore.addProduct(phoneIphone);
myStore.addProduct(phoneMotorola);

myStore.listProducts();

// Add to cart
document.addEventListener("click", function (e) {
  //   console.log(e.target);
  if (e.target.classList.contains("add-to-cart")) {
    // console.log("ima klasa add-to-cart");
    const productIndex = parseInt(
      e.target.closest("li").getAttribute("data-index")
    );

    const product = myStore.getProductByIndex(productIndex);
    if (product) {
      myStore.addToCart(product);
    }
  }
});

//lets compare some products
let productsToCompare = [];

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("compare-check")) {
    e.target.disabled = true;
    const productIndex = parseInt(
      e.target.closest("li").getAttribute("data-index")
    );
    const product = myStore.getProductByIndex(productIndex);

    productsToCompare.push(product);
    if (productsToCompare.length === 2) {
      myStore.compareProducts(productsToCompare[0], productsToCompare[1]);
      productsToCompare = [];
      uncheckComapreInputs();
    }
  }
});

// uncheck the input buttons
function uncheckComapreInputs() {
  const inputs = document.querySelectorAll(".compare-check");
  for (let input of inputs) {
    input.checked = false;
    input.disabled = false;
  }
}
