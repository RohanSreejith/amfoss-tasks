const apiUrl = 'https://fakestoreapi.com/products';
let products = [];
let cart = [];

async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);
        products = await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

fetchProducts();
document.getElementById('command-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const command = e.target.value;
        processCommand(command);
        e.target.value = '';
    }
});

function processCommand(command) {
    const [cmd, ...args] = command.split(' ');
    switch (cmd) {
        case 'list':
            listProducts();
            break;
        case 'details':
            details(args[0]);
            break;
        case 'add':
            addProduct(args[0]);
            break;
        case 'remove':
            removeProduct(args[0]);
            break;
        case 'cart':
            viewCart();
            break;
        case 'buy':
            buy();
            break;
        case 'clear':
            clearScreen();
            break;
        case 'search':
            searchProduct(args.join(' '));
            break;
        case 'sort':
            sortProducts(args[0]);
            break;
        default:
            appendToOutput(`Unknown command: ${cmd}`);
    }
}

function appendToOutput(text) {
    const output = document.getElementById('output');
    output.textContent += `${text}\n`;
    output.scrollTop = output.scrollHeight; // Scroll to the bottom
}

function listProducts() {
    const productList = products.map(p => `${p.id}: ${p.title}`).join('\n');
    appendToOutput(productList || 'No products available.');
}

function details(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (product) {
        appendToOutput(`ID: ${product.id}\nTitle: ${product.title}\nPrice: ${product.price}\nDescription: ${product.description}`);
    } else {
        appendToOutput(`Product with ID ${productId} not found.`);
    }
}

function addProduct(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (product) {
        cart.push(product);
        appendToOutput(`Added ${product.title} to cart.`);
    } else {
        appendToOutput(`Product with ID ${productId} not found.`);
    }
}

function removeProduct(productId) {
    cart = cart.filter(p => p.id !== parseInt(productId));
    appendToOutput(`Removed product with ID ${productId} from cart.`);
}

function viewCart() {
    const cartContents = cart.map(p => `${p.id}: ${p.title}`).join('\n');
    appendToOutput(cartContents || 'Cart is empty.');
}

function buy() {
    const totalPrice = cart.reduce((total, p) => total + p.price, 0).toFixed(2);
    const cartSummary = cart.map(p => `${p.title}: $${p.price}`).join('\n');
    const summary = `${cartSummary}\nTotal Price: $${totalPrice}`;
    appendToOutput(summary);
    // Redirect to a checkout page (requires additional setup)
    // window.location.href = '/checkout.html';
}

function clearScreen() {
    document.getElementById('output').textContent = '';
}

function searchProduct(productName) {
    const results = products.filter(p => p.title.toLowerCase().includes(productName.toLowerCase()));
    const resultText = results.map(p => `${p.id}: ${p.title}`).join('\n');
    appendToOutput(resultText || 'No products found.');
}

function sortProducts(criteria) {
    const sortedProducts = [...products].sort((a, b) => {
        if (criteria === 'price') {
            return a.price - b.price;
        } else if (criteria === 'name') {
            return a.title.localeCompare(b.title);
        }
        return 0;
    });
    products = sortedProducts;
    appendToOutput('Products sorted by ' + criteria);
}

