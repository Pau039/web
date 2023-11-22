// index.js

// Sample data for products
const products = [
  {
    id: 1,
    name: 'Nephthytis 1',
    plantname: 'Nephthytis',
    category: 'Plants',
    price: 366,
    imageUrl: 'nephthytisplant.jpg',
    lifespan: 'it will have 4 to 6 months',
    description: 'Nephthytis, also known as Arrowhead Vine, is a charming trailing plant with arrow-shaped leaves that display a delightful blend of green and creamy white. This low-maintenance beauty thrives in moderate, indirect light and can be a versatile addition to both hanging baskets and pots. Its elegant foliage adds a touch of natural grace to any indoor space.',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
  },
  
  {
    id: 2,
    name: 'Live Orchid 2',
    plantname: 'Live Orchid',
    category: 'Plants',
    price: 499,
    imageUrl: 'liveorchid.jpg',
    lifespan: 'it will have 4 to 6 months',
    description: 'The Live Orchid, a symbol of elegance and refinement, boasts stunning, exotic blooms in various vibrant colors. With its delicate petals and slender, arching stems, it exudes an air of sophistication. These epiphytic wonders require specific care, including bright but indirect light, high humidity, and a specialized orchid potting mix.',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
  },
  {
    id: 3,
    name: 'Areca Palm 3',
    plantname: 'Areca Palm',
    category: 'Plants',
    price: 450,
    imageUrl: 'arecapalm.jpg',
    lifespan: 'it will have 4 to 6 months',
    description:'Areca Palm, often called the Butterfly Palm, is a graceful and tropical plant known for its feathery, arching fronds. This lush beauty is an excellent choice for adding a touch of the tropics to any interior space. It thrives in bright, indirect light and its air-purifying qualities make it a popular choice for enhancing indoor air quality.',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
  },
  {
    id: 4,
    name: 'Croton 4',
    plantname: 'Croton',
    category: 'Plants',
    price: 355,
    imageUrl: 'crotonplant.jpg',
    lifespan: 'it will have 4 to 6 months',
    description:'With its vibrant and multicolored foliage, Croton is a show-stopping plant that injects energy and personality into any room. Its leathery leaves sport a dazzling array of hues ranging from deep greens to vibrant reds, yellows, and oranges. Thriving in bright, indirect light, the Croton is sure to be a focal point in any botanical display.',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
  },
  {
    id: 5,
    name: 'Ficus Benjamina 5',
    plantname: 'Ficus Benjamina',
    category: 'Plants',
    price: 435,
    imageUrl: 'ficusbenjamina.jpg',
    lifespan: 'it will have 4 to 6 months',
    description: 'Ficus Benjamina, also known as the Weeping Fig, is a graceful, tree-like plant characterized by its glossy, cascading foliage. Its slender branches and elegant, pointed leaves add a touch of refinement to indoor spaces. This plant flourishes in bright, indirect light and is a classic choice for those seeking to bring a touch of nature indoors.',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
  },
  {
    id: 6,
    name: 'Parlour Palm 6',
    plantname: 'Parlour Palm',
    category: 'Plants',
    price: 345,
    imageUrl: 'parlourpalm.jpg',
    lifespan: 'it will have 4 to 6 months',
    description: 'Parlour Palm exudes an air of quiet elegance with its delicate fronds and slender, bamboo-like stems. This dainty plant is well-suited for smaller spaces and can thrive in low to moderate light conditions. Its compact size and graceful demeanor make it a perfect addition to tabletops and shelves.',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
  },
  {
    id: 7,
    name: 'Snake Plant 7',
    plantname: 'Snake Plant',
    category: 'Plants',
    price: 325,
    imageUrl: 'snakeplant.jpg',
    lifespan: 'it will have 4 to 6 months',
    description:'The Snake Plant, alternatively called Mother-in-Laws Tongue, is a robust and artistic plant characterized by its tall, rigid leaves that grow in a striking, upward manner. Its impressive visual appeal, combined with its outstanding air-purifying qualities, renders it a favored selection for both contemporary and classic indoor settings. Flourishing under various lighting conditions, the Snake Plant is a flexible and visually captivating enhancement for any environment.',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
  },
  {
    id: 8,
    name: 'Norfolk Pine 8',
    plantname: 'Norfolk Pine',
    category: 'Plants',
    price: 435,
    imageUrl: 'norfolkpine.jpg',
    lifespan: 'it will have 4 to 6 months',
    description:'Norfolk Pine, a charming coniferous evergreen, boasts a pyramidal shape and soft, needled foliage that evokes the holiday spirit. Its resemblance to traditional Christmas trees makes it a popular seasonal choice. Thriving in bright, indirect light, the Norfolk Pine brings a touch of natural beauty and festive cheer to indoor spaces.',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐</b></a></div>',
  },
  {
    id: 9,
    name: 'Zebra Plant 9',
    plantname: 'Zebra Plant',
    category: 'Plants',
    price: 257,
    imageUrl: 'zebraplant.jpg',
    lifespan: 'it will have 4 to 6 months',
    description:'Zebra Plant, also known as Aphelandra squarrosa, is a striking tropical plant known for its bold, dark green leaves adorned with striking white veins. This visually captivating plant requires bright, indirect light and consistent moisture to thrive. Its unique foliage adds a touch of exotic allure to any room.',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
  },
  {
    id: 10,
    name: 'Spider Plant 10',
    plantname: 'Spider Plant',
    category: 'Plants',
    price: 400,
    imageUrl: 'spiderplant.jpg',
    lifespan: 'it will have 4 to 6 months',
    description:'Spider Plant, characterized by its arching, grass-like leaves that cascade gracefully from the center, is a popular and easy-to-care-for choice for indoor gardening. With its distinctive, variegated foliage, this plant brightens up any space. Spider Plants thrive in a variety of light conditions, making them a versatile and charming addition to homes and offices alike.',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
  },
  {
    id: 11,
    name: 'Arber 11',
    plantname: 'Arber',
    category: 'Pesticides',
    price: 277,
    imageUrl: 'pest/arber.jpg',
    lifespan: 'it will have 4 to 6 months',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
  },
  {
    id: 12,
    name: 'Bayer 12',
    plantname: 'Bayer',
    category: 'Pesticides',
    price: 500,
    imageUrl: 'pest/bayer.jpg',
    lifespan: 'it will have 4 to 6 months',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐</b></a></div>',
  },
  {
    id: 13,
    name: 'Bioadvanced 13',
    plantname: 'Bioadvanced',
    category: 'Pesticides',
    price: 450,
    imageUrl: 'pest/bioadvanced.jpg',
    lifespan: 'it will have 4 to 6 months',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
  },
  {
    id: 14,
    name: 'Botanigard 14',
    plantname: 'Botanigard',
    category: 'Pesticides',
    price: 552,
    imageUrl: 'pest/botanigard.jpg',
    lifespan: 'it will have 4 to 6 months',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
  },
  {
    id: 15,
    name: 'Fertilome 15',
    plantname: 'Fertilome',
    category: 'Pesticides',
    price: 200,
    imageUrl: 'pest/fertilome.jpg',
    lifespan: 'it will have 4 to 6 months',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
  },
  {
    id: 16,
    name: 'Might Mint 16',
    plantname: 'Might Mint',
    category: 'Pesticides',
    price: 457,
    imageUrl: 'pest/mightmint.jpg',
    lifespan: 'it will have 4 to 6 months',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐</b></a></div>',
  },
  {
    id: 17,
    name: 'Montrey LG 17',
    plantname: 'Montrey LG',
    category: 'Pesticides',
    price: 456,
    imageUrl: 'pest/montreylg.jpg',
    lifespan: 'it will have 4 to 6 months',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
  },
  {
    id: 18,
    name: 'Ortho Bug Clear 18',
    plantname: 'Ortho Bug Clear',
    category: 'Pesticides',
    price: 455,
    imageUrl: 'pest/orthobugclear.jpg',
    lifespan: 'it will have 4 to 6 months',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
  },
  {
    id: 19,
    name: 'Safari 19',
    plantname: 'Safari',
    category: 'Pesticides',
    price: 680,
    imageUrl: 'pest/safari.jpg',
    lifespan: 'it will have 4 to 6 months',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐</b></a></div>',
  },
  {
    id: 20,
    name: 'Stem 20',
    plantname: 'Stem',
    category: 'Pesticides',
    price: 355,
    imageUrl: 'pest/stem.jpg',
    lifespan: 'it will have 4 to 6 months',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
  },
  {
    id: 21,
    name: 'Bamboo seeds 21',
    plantname: 'Bamboo seeds',
    category: 'Seeds',
    price: 75,
    imageUrl: 'seed/bambbo.jpg',
    lifespan: 'it will have 4 to 6 months',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
    review: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/plant.html" style="text-decoration: none;"><b>Step Process</b></a></div>',
  },
  {
    id: 22,
    name: 'Cauliflower seeds 22',
    plantname: 'Cauliflower seeds',
    category: 'Seeds',
    price: 150,
    imageUrl: 'seed/cauliflower.jpg',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
    review: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/plant.html" style="text-decoration: none;"><b>Step Process</b></a></div>',
  },
  {
    id: 23,
    name: 'Chili seeds 23',
    plantname: 'Chili seeds',
    category: 'Seeds',
    price: 80,
    imageUrl: 'seed/chili.webp',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
    review: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/plant.html" style="text-decoration: none;"><b>Step Process</b></a></div>',
  },
  {
    id: 24,
    name: 'Petuania seeds 24',
    plantname: 'Petuania seeds',
    category: 'Seeds',
    price: 200,
    imageUrl: 'seed/petuania.jpg',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
    review: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/plant.html" style="text-decoration: none;"><b>Step Process</b></a></div>',
  },
  {
    id: 25,
    name: 'Lotus seeds 25',
    plantname: 'Lotus seeds',
    category: 'Seeds',
    price: 350,
    imageUrl: 'seed/lotus.jpg',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
    review: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/plant.html" style="text-decoration: none;"><b>Step Process</b></a></div>',
  },
  {
    id: 26,
    name: 'Neem seeds 26',
    plantname: 'Neem seeds',
    category: 'Seeds',
    price: 135,
    imageUrl: 'seed/neem.jpg',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐</b></a></div>',
    review: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/plant.html" style="text-decoration: none;"><b>Step Process</b></a></div>',
  },
  {
    id: 27,
    name: 'Palm seeds 27',
    plantname: 'Palm seeds',
    category: 'Seeds',
    price: 100,
    imageUrl: 'seed/palm.jpg',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
    review: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/plant.html" style="text-decoration: none;"><b>Step Process</b></a></div>',
  },
  {
    id: 28,
    name: 'Rose seeds 28',
    plantname: 'Rose seeds',
    category: 'Seeds',
    price: 180,
    imageUrl: 'seed/rose.jpg',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
    review: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/plant.html" style="text-decoration: none;"><b>Step Process</b></a></div>',
  },
  {
    id: 29,
    name: 'Pumpkin seeds 29',
    plantname: 'Pumpkin seeds',
    category: 'Seeds',
    price: 230,
    imageUrl: 'seed/pumpkin.webp',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
    review: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/plant.html" style="text-decoration: none;"><b>Step Process</b></a></div>',
  },
  {
    id: 30,
    name: 'Saffron Bulbs 30',
    plantname: 'Saffron Bulbs',
    category: 'Seeds',
    price: 190,
    imageUrl: 'seed/saffronbulbs.webp',
    rating: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/Testimonials.html" style="text-decoration: none;"><b>⭐⭐⭐⭐⭐</b></a></div>',
    review: '<div style="border: 5px solid #000; padding: 5px; display: inline-block;"><a href="Project Files/plant.html" style="text-decoration: none;"><b>Step Process</b></a></div>',
  },
  // Add more products here
];


// Select elements from the DOM
const mainContent = document.getElementById('main');
const searchInput = document.querySelector('.search_product');
const plantnameSelect = document.querySelector('.plantname');
const categoryList = document.querySelector('.categorylist');
const priceRange = document.getElementById('range');
const priceLabel = document.getElementById('price');
const clearFilterButton = document.querySelector('.clearfilter');
const cartContainer = document.getElementById('cartContainer');
const cartCount = document.querySelector('.cartCount');
const checkoutButton = document.querySelector('.btnCheckout');
const removeAllButton = document.querySelector('.removeAll');


// Initialize cart data
let cart = [];

// Function to display products on the main content area
function displayProducts(productsArray) {
  mainContent.innerHTML = '';
  productsArray.forEach((product) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}" class="product_img">
      <div class="product_info">
        <span class="product_plantname">${product.plantname}</span>
        <span class="product_price">₱${product.price}</span>
        <button class="add_to_cart" data-id="${product.id}">Add to Cart</button>
      </div>
    `;

  
    card.querySelector('.add_to_cart').addEventListener('click', () => {
      addToCart(product);
    });

    mainContent.appendChild(card);
  });
}

function addToCart(product) {
  const existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart(); // Call the updateCart function after modifying the cart
}


// Function to update the cart display
function updateCart() {
  cartContainer.innerHTML = '';
  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach((item) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('item');
    cartItem.innerHTML = `
    <img src="${item.imageUrl}" alt="${item.name}" class="cart_img">
    <div class="product_info">
      <span class="product_name">${item.name}</span>
    </div>
    <div class="qty">
      <button class="button_cart minus" data-id="${item.id}">-</button>
      <span id="qty">${item.quantity}x</span>
      <button class="button_cart plus" data-id="${item.id}">+</button>
    </div>
    <div class="price">
      <span id="price2">₱${item.price * item.quantity}</span>
    </div>
    <button id="remove_item" data-id="${item.id}">Remove</button>
  `;
  

    // Add click events to plus and minus buttons
    const plusButton = cartItem.querySelector('.plus');
    plusButton.addEventListener('click', () => {
      updateQuantity(item.id, 1);
    });

    const minusButton = cartItem.querySelector('.minus');
    minusButton.addEventListener('click', () => {
      updateQuantity(item.id, -1);
    });

    // Add click event to "Remove" button
    cartItem.querySelector('#remove_item').addEventListener('click', () => {
      removeFromCart(item.id);
    });

    cartContainer.appendChild(cartItem);

    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  cartCount.textContent = totalItems;
  priceLabel.textContent = `₱${totalPrice.toFixed(2)}`;
}

// Function to update the quantity of an item in the cart
function updateQuantity(productId, change) {
  const itemToUpdate = cart.find((item) => item.id === productId);

  if (itemToUpdate) {
    itemToUpdate.quantity += change;

    if (itemToUpdate.quantity <= 0) {
      removeFromCart(productId); // Remove the item if quantity becomes zero or negative
    } else {
      updateCart(); // Update the cart display
    }
  }
}

// Function to remove a product from the cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
}

// Event listeners for filtering and clearing filters
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  displayProducts(filteredProducts);
});

plantnameSelect.addEventListener('change', () => {
  // Implement brand filtering logic here
  // You can filter products based on the selected brand
});

categoryList.addEventListener('click', (e) => {
  if (e.target.classList.contains('category')) {
    // Implement category filtering logic here
    // You can filter products based on the selected category
  }
});

priceRange.addEventListener('input', () => {
  // Implement price range filtering logic here
  // You can filter products based on the selected price range
});

clearFilterButton.addEventListener('click', () => {
  // Clear all filters and display all products
  searchInput.value = '';
  plantnameSelect.value = '';
  priceRange.value = '';
  displayProducts(products);
});

checkoutButton.addEventListener('click', () => {
  // Implement the checkout logic here
  // You can calculate the total and proceed to checkout
});

removeAllButton.addEventListener('click', () => {
  cart = [];
  updateCart();
});

// Initialize the page with all products
displayProducts(products);

// Function to sort products by name (A-Z)
function sortByNameAZ() {
  const sortedProducts = [...products].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  displayProducts(sortedProducts);
}

// Function to sort products by price (lowest to highest)
function sortByPriceLowToHigh() {
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);
  displayProducts(sortedProducts);
}

// Function to sort products by price (highest to lowest)
function sortByPriceHighToLow() {
  const sortedProducts = [...products].sort((a, b) => b.price - a.price);
  displayProducts(sortedProducts);
}

// Function to sort products by date (oldest to latest)
function sortByOldest() {
  const sortedProducts = [...products].sort((a, b) =>
    new Date(a.date) - new Date(b.date)
  );
  displayProducts(sortedProducts);
}

// Function to sort products by date (latest to oldest)
function sortByLatest() {
  const sortedProducts = [...products].sort((a, b) =>
    new Date(b.date) - new Date(a.date)
  );
  displayProducts(sortedProducts);
}

// Select the HTML select element for sorting
const sortSelect = document.querySelector('#sort-select');

// Event listener for sorting
sortSelect.addEventListener('change', () => {
const selectedValue = sortSelect.value;
switch (selectedValue) {
  case 'az':
    sortByNameAZ();
    break;
  case 'price-low':
    sortByPriceLowToHigh();
    break;
  case 'price-high':
    sortByPriceHighToLow();
    break;
  case 'oldest':
    sortByOldest();
    break;
  case 'latest':
    sortByLatest();
    break;
  default:
    // Do nothing for the default case
    break;
}
});

// Function to calculate the total price of items in the cart
function calculateTotalPrice() {
  let total = 0;
  for (const product of cart) {
    total += product.price;
  }
  return total;
}
// Function to handle the checkout process
function checkout() {
  const total = calculateTotalPrice();

  if (total === 0) {
    alert('Your cart is empty. Add items to your cart before checking out.');
  } else {
    // Update the <span> element with the total price including the peso sign
    const totalElement = document.getElementById('total');
    totalElement.textContent = `Total: ₱${total.toFixed(2)}`;
    // Implement your checkout logic here.
    // You can redirect to a checkout page or display a confirmation message.
    alert(`Total Price: ₱${total.toFixed(2)}\nThank you for your purchase!`);
    
    // Clear the cart after checkout
    cart = [];
    updateCart();
  }
}

// Event listener for the checkout button
checkoutButton.addEventListener('click', checkout);
// Select the category list in your HTML
const categorylist = document.querySelector('.categorylist');

// Add an event listener to the category list
categoryList.addEventListener('click', (event) => {
if (event.target.classList.contains('category')) {
  const selectedCategory = event.target.textContent;
  filterByCategory(selectedCategory);
}
});

const categoryCounts = {
  All: products.length, // Initialize with the total number of products
  Plants: 0,
  Pesticides: 0,
  Seeds: 0,
  // Add more categories as needed
};

function filterByCategory(category) {
  if (category === 'All') {
    displayProducts(products);
  } else {
    const filteredProducts = products.filter((product) => product.category === category);
    displayProducts(filteredProducts);

    // Update the category count
    updateResultsFound(filteredProducts.length);
    }

  // Update the "Results Found" section
  updateResultsFound(categoryCounts[category]);
}
// Select the product images
const productImages = document.querySelectorAll('.product_img');

// Select the modal and close button
const modal = document.getElementById('productDetailsModal');
const closeBtn = document.querySelector('.close');

// Function to open the modal and display product details
function openModal(product) {
  // Build the product details HTML
  const productDetailsHTML = `
    <h3>${product.name}</h3>
    <br>
    <p>Productname: ${product.plantname}</p>
    <p>Category: ${product.category}</p>
    <p>Price: ₱${product.price.toFixed(2)}</p>
    <p>Lifespan: ${product.lifespan} years</p>
    <br>
    <img src="${product.imageUrl}" alt="${product.name}" class="product_img">
    <p>Reviews and Ratings: ${product.rating}</p>
    <br>
    <p><b>Plant Description</b>: ${product.description}</p>
    <p>Step&Process: ${product.review}</p>
  `;

  // Display the product details in the modal
  document.getElementById('productDetails').innerHTML = productDetailsHTML;

  // Show the modal
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Add click event listeners to product images
productImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    // Get the product associated with the clicked image
    const product = products[index];

    // Open the modal and display product details
    openModal(product);
  });
});

// Add click event listener to close button
closeBtn.addEventListener('click', closeModal);

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

