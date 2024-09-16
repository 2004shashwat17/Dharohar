let inventory = JSON.parse(localStorage.getItem('inventory')) || [];

function uploadStamp() {
    const name = document.getElementById('stampName').value;
    const description = document.getElementById('stampDescription').value;
    const price = document.getElementById('stampPrice').value;
    const imageFile = document.getElementById('stampImage').files[0];
    const collectionType = document.getElementById('collectionType').value;

    const reader = new FileReader();
    reader.onload = function(e) {
        const stamp = {
            name: name,
            description: description,
            price: price ? price : null,
            image: e.target.result,
            collectionType: collectionType,
            likes: 0,
            comments: []
        };
        inventory.push(stamp);
        localStorage.setItem('inventory', JSON.stringify(inventory));
        alert('Stamp uploaded successfully!');
    };
    reader.readAsDataURL(imageFile);
}

function redirectToInventory() {
    window.location.href = 'inventory.html';
}
