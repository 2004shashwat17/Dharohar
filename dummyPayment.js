function openDummyPaymentModal() {
    const modal = document.getElementById('dummyPaymentModal');
    modal.style.display = 'block';

    // Handle payment method changes
    const paymentMethods = document.getElementsByName('paymentMethod');
    paymentMethods.forEach(method => {
        method.addEventListener('change', () => {
            handlePaymentMethodChange(method.value);
        });
    });
}

function closeDummyPaymentModal() {
    const modal = document.getElementById('dummyPaymentModal');
    modal.style.display = 'none';
}

function handlePaymentMethodChange(selectedMethod) {
    const creditCardSection = document.getElementById('creditCardDetails');
    const netBankingSection = document.getElementById('netBankingDetails');
    const upiSection = document.getElementById('upiDetails');

    creditCardSection.style.display = selectedMethod === 'credit-card' ? 'block' : 'none';
    netBankingSection.style.display = selectedMethod === 'net-banking' ? 'block' : 'none';
    upiSection.style.display = selectedMethod === 'upi' ? 'block' : 'none';
}

function completePayment() {
    alert('Payment successful!');
    closeDummyPaymentModal();

    // Handle marking the item as sold and updating the inventory here
    const selectedStamp = JSON.parse(localStorage.getItem('selectedStamp'));
    if (selectedStamp) {
        const inventory = JSON.parse(localStorage.getItem('inventory'));
        inventory[selectedStamp.index].sold = true;
        inventory[selectedStamp.index].buyerName = document.getElementById('buyerName').value || 'Unknown Buyer';
        inventory[selectedStamp.index].soldDate = new Date().toLocaleDateString();
        localStorage.setItem('inventory', JSON.stringify(inventory));
        loadInventory();  // Refresh inventory
    }
}

function openPurchaseModal(index) {
    const inventory = JSON.parse(localStorage.getItem('inventory'));
    const stamp = inventory[index];
    localStorage.setItem('selectedStamp', JSON.stringify({ stamp, index }));
    const modal = document.getElementById('purchaseModal');
    modal.style.display = 'block';
}

function closePurchaseModal() {
    const modal = document.getElementById('purchaseModal');
    modal.style.display = 'none';
}
