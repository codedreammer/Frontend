let products = [
    { name: "MacBook Pro", category: "electronics" },
    { name: "iPhone 15", category: "electronics" },
    { name: "AirPods Pro", category: "electronics" },
    { name: "Premium T-shirt", category: "clothing" },
    { name: "Designer Jeans", category: "clothing" },
    { name: "Leather Jacket", category: "clothing" },
    { name: "JavaScript Guide", category: "books" },
    { name: "HTML Mastery", category: "books" },
    { name: "Running Shoes", category: "clothing" },
    { name: "iPad Air", category: "electronics" }
];

let productList = document.getElementById("productList");
let searchBox = document.getElementById("searchBox");

function display(list) {
    productList.innerHTML = "";
    list.forEach(p => {
        let li = document.createElement("li");
        li.className = "product-item";
        li.innerHTML = `
            <div class="product-name">${p.name}</div>
            <span class="product-category category-${p.category}">${p.category}</span>
        `;
        productList.appendChild(li);
    });
}

display(products);

function filterProducts(cat) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (cat === "all") display(products);
    else display(products.filter(p => p.category === cat));
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.querySelector('.theme-icon');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
    }
});

searchBox.addEventListener("input", () => {
    let key = searchBox.value.toLowerCase();
    let filtered = products.filter(p =>
        p.name.toLowerCase().includes(key) || p.category.toLowerCase().includes(key)
    );
    display(filtered);
});
