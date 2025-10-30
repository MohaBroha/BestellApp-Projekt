let menus = ["Pizza Margherita", "Cheeseburger", "Caesar Salad", "Spaghetti Bolognese"];
let prices = [8.99, 6.49, 7.50, 9.25];
let amounts = [0, 0, 0, 0];

const menuContainer = document.getElementById("menu-container");
const cartList = document.getElementById("cartList");


function renderMenu() {
    let menuHTML = "";
    for (let i = 0; i < menus.length; i++) {
        menuHTML += `
            <div class="menu-item">
                <strong>${menus[i]}</strong><br>
                ${prices[i].toFixed(2)} €<br>
                <button aria-label="Zum Warenkorb hinzufügen" onclick="addToCart(${i})">+</button>
            </div>
        `;
    }
    menuContainer.innerHTML = menuHTML;
}


function addToCart(index) {
    amounts[index] += 1;

}





renderMenu();
