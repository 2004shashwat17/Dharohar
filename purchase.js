// Load selected stamp details
window.onload = function () {
    const selectedStamp = JSON.parse(localStorage.getItem('selectedStamp'));
    if (selectedStamp) {
        document.getElementById('stampName').value = selectedStamp.stamp.name;
        document.getElementById('stampPrice').value = selectedStamp.stamp.price;
        document.getElementById('stampIndex').value = selectedStamp.index;
    }
};

// Handle form submission
document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const buyerName = document.getElementById('buyerName').value;
    const buyerAddress = document.getElementById('buyerAddress').value;
    const buyerPhone = document.getElementById('buyerPhone').value;
    const stampIndex = document.getElementById('stampIndex').value;

    // Get current inventory and update the sold status
    const inventory = JSON.parse(localStorage.getItem('inventory'));
    const date = new Date().toLocaleDateString();

    inventory[stampIndex].sold = true;
    inventory[stampIndex].buyerName = buyerName;
    inventory[stampIndex].buyerAddress = buyerAddress;
    inventory[stampIndex].buyerPhone = buyerPhone;
    inventory[stampIndex].soldDate = date;

    // Save updated inventory back to localStorage
    localStorage.setItem('inventory', JSON.stringify(inventory));

    alert(`${inventory[stampIndex].name} has been successfully purchased by ${buyerName}.`);
    window.location.href = 'inventory.html';  // Redirect back to the inventory page
});
