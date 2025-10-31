let menus = [
    "Pizza Margherita",
    "Cheeseburger",
    "Caesar Salad",
    "Spaghetti Bolognese"
];

let prices = [8.99, 6.49, 7.50, 9.25];
let amounts = [0, 0, 0, 0];

const menuContainer = document.getElementById("menu-container");
const cartList = document.getElementById("cartList");


function renderMenu() {
    let menuListHTML = "";
    for (let i = 0; i < menus.length; i++) {
        menuListHTML += `
            <div class="menu-item">
                <strong>${menus[i]}</strong><br>
                ${prices[i].toFixed(2)} €<br>
                <button aria-label="Zum Warenkorb hinzufügen" onclick="addToCartList(${i})">+</button>
            </div>
        `;
    }
    menuContainer.innerHTML = menuListHTML;
}


function addToCartList(index) {
    amounts[index] += 1;
    updateCartList();
}
function updateCartList() {
    let cartHTML = "";
    let total = 0;

    for (let i = 0; i < menus.length; i++) {
        if (amounts[i] > 0) {
            let sum = prices[i] * amounts[i];
            total += sum;
            cartHTML += `
                <li>
                    ${menus[i]} — ${prices[i].toFixed(2)} € × ${amounts[i]} = ${sum.toFixed(2)} €
                    <button aria-label="Menge verringern" onclick="amounts[${i}]=Math.max(amounts[${i}]-1,0);updateCartList()">-</button>
                    <button aria-label="Menge erhöhen" onclick="amounts[${i}]+=1;updateCartList()">+</button>
                    <button aria-label="Gericht löschen" onclick="amounts[${i}]=0;updateCartList()">🗑️</button>
                </li>
            `;
        }
    }

    cartHTML += `<li><strong>Gesamt: ${total.toFixed(2)} €</strong></li>`;


    cartHTML += `
        <li>
            <button aria-label="Bestellung abschicken" onclick="alert('Bestellung abgeschickt!')">Bestellen</button>
        </li>
    `;

    cartList.innerHTML = cartHTML;
}





renderMenu();
updateCartList();