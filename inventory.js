let inventory = JSON.parse(localStorage.getItem('inventory')) || [];

function loadInventory() {
    const inventoryContainer = document.getElementById('inventoryContainer');
    inventoryContainer.innerHTML = '';

    inventory.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('inventory-item');

        const isSold = item.sold ? `<p class="sold">Sold to ${item.buyerName} on ${item.soldDate}</p>` : '';
        const buyButton = !item.sold && item.price ? `<button onclick="openPurchaseModal(${index})">Buy</button>` : '';
        const deleteButton = `<button onclick="deleteItem(${index})" class="delete-btn">Delete</button>`;

        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            ${item.price ? `<p>Price: $${item.price}</p>` : ''}
            ${isSold}
            <div class="actions">
                <button onclick="likeItem(${index})">Like (${item.likes})</button>
                <button onclick="openCommentBox(${index})">Comment</button>
                ${buyButton}
                ${deleteButton}
            </div>
            <div class="comments-box" id="commentsBox-${index}">
                <input type="text" placeholder="Add a comment..." onkeypress="addComment(event, ${index})">
                <div id="comments-${index}"></div>
            </div>
        `;
        inventoryContainer.appendChild(itemDiv);
    });
}

function openPurchaseModal(index) {
    const inventory = JSON.parse(localStorage.getItem('inventory'));
    const stamp = inventory[index];
    localStorage.setItem('selectedStamp', JSON.stringify({ stamp, index }));
    const modal = document.getElementById('purchaseModal');
    modal.style.display = 'block';
}

function deleteItem(index) {
    inventory.splice(index, 1); // Remove the selected item
    localStorage.setItem('inventory', JSON.stringify(inventory));
    loadInventory(); // Reload the inventory
}

function filterInventory() {
    const filterType = document.getElementById('filterType').value;
    const filteredInventory = filterType === 'all' ? inventory : inventory.filter(item => item.collectionType === filterType);
    displayInventory(filteredInventory);
}

function displayInventory(filteredInventory) {
    const inventoryContainer = document.getElementById('inventoryContainer');
    inventoryContainer.innerHTML = '';

    filteredInventory.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('inventory-item');
        const isSold = item.sold ? `<p class="sold">Sold to ${item.buyerName} on ${item.soldDate}</p>` : '';
        const buyButton = !item.sold && item.price ? `<button onclick="openPurchaseModal(${index})">Buy</button>` : '';
        const deleteButton = `<button onclick="deleteItem(${index})" class="delete-btn">Delete</button>`;
        
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            ${item.price ? `<p>Price: $${item.price}</p>` : ''}
            ${isSold}
            <div class="actions">
                ${buyButton}
                ${deleteButton}
            </div>
        `;
        inventoryContainer.appendChild(itemDiv);
    });
}

window.onload = function () {
    loadInventory();
};
