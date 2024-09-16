document.addEventListener("DOMContentLoaded", () => {
    // Postal Circles Data with Headquarters and Pricing
    const postalCircles = [
        { name: 'Andhra Pradesh Circle', description: 'Covers the state of Andhra Pradesh, including cities like Visakhapatnam.', headquarters: 'Hyderabad', philatelicItems: [{ name: 'Stamp A', price: 10 }, { name: 'Stamp B', price: 15 }, { name: 'Stamp C', price: 20 }] },
        { name: 'Assam Circle', description: 'Manages postal services across Assam in the North-East.', headquarters: 'Guwahati', philatelicItems: [{ name: 'Stamp D', price: 12 }, { name: 'Stamp E', price: 18 }, { name: 'Stamp F', price: 22 }] },
        { name: 'Bihar Circle', description: 'Handles postal services in Bihar, with Patna as its main city.', headquarters: 'Patna', philatelicItems: [{ name: 'Stamp G', price: 14 }, { name: 'Stamp H', price: 19 }, { name: 'Stamp I', price: 25 }] },
        { name: 'Chhattisgarh Circle', description: 'Covers Chhattisgarh, including Raipur and Bilaspur.', headquarters: 'Raipur', philatelicItems: [{ name: 'Stamp J', price: 13 }, { name: 'Stamp K', price: 16 }, { name: 'Stamp L', price: 21 }] },
        { name: 'Delhi Circle', description: 'Manages postal services in Delhi.', headquarters: 'New Delhi', philatelicItems: [{ name: 'Stamp M', price: 20 }, { name: 'Stamp N', price: 25 }, { name: 'Stamp O', price: 30 }] },
        { name: 'Gujarat Circle', description: 'Covers the state of Gujarat, with Ahmedabad as its main city.', headquarters: 'Ahmedabad', philatelicItems: [{ name: 'Stamp P', price: 17 }, { name: 'Stamp Q', price: 22 }, { name: 'Stamp R', price: 28 }] },
        { name: 'Haryana Circle', description: 'Handles postal services in Haryana, including Chandigarh.', headquarters: 'Chandigarh', philatelicItems: [{ name: 'Stamp S', price: 15 }, { name: 'Stamp T', price: 18 }, { name: 'Stamp U', price: 23 }] },
        { name: 'Himachal Pradesh Circle', description: 'Covers Himachal Pradesh, with Shimla as its main city.', headquarters: 'Shimla', philatelicItems: [{ name: 'Stamp V', price: 19 }, { name: 'Stamp W', price: 24 }, { name: 'Stamp X', price: 30 }] },
        { name: 'Jammu & Kashmir Circle', description: 'Manages postal services in Jammu & Kashmir.', headquarters: 'Srinagar', philatelicItems: [{ name: 'Stamp Y', price: 21 }, { name: 'Stamp Z', price: 26 }, { name: 'Stamp AA', price: 32 }] },
        { name: 'Jharkhand Circle', description: 'Covers the state of Jharkhand, including Ranchi.', headquarters: 'Ranchi', philatelicItems: [{ name: 'Stamp BB', price: 16 }, { name: 'Stamp CC', price: 20 }, { name: 'Stamp DD', price: 27 }] },
        { name: 'Karnataka Circle', description: 'Handles postal services in Karnataka, with Bengaluru as its main city.', headquarters: 'Bengaluru', philatelicItems: [{ name: 'Stamp EE', price: 22 }, { name: 'Stamp FF', price: 27 }, { name: 'Stamp GG', price: 35 }] },
        { name: 'Kerala Circle', description: 'Covers the state of Kerala, including Thiruvananthapuram and Kochi.', headquarters: 'Thiruvananthapuram', philatelicItems: [{ name: 'Stamp HH', price: 18 }, { name: 'Stamp II', price: 23 }, { name: 'Stamp JJ', price: 29 }] },
        { name: 'Madhya Pradesh Circle', description: 'Manages postal services in Madhya Pradesh, with Bhopal as its main city.', headquarters: 'Bhopal', philatelicItems: [{ name: 'Stamp KK', price: 14 }, { name: 'Stamp LL', price: 19 }, { name: 'Stamp MM', price: 25 }] },
        { name: 'Maharashtra Circle', description: 'Covers the state of Maharashtra, including Mumbai and Pune.', headquarters: 'Mumbai', philatelicItems: [{ name: 'Stamp NN', price: 23 }, { name: 'Stamp OO', price: 28 }, { name: 'Stamp PP', price: 34 }] },
        { name: 'Manipur Circle', description: 'Handles postal services in Manipur, including Imphal.', headquarters: 'Imphal', philatelicItems: [{ name: 'Stamp QQ', price: 12 }, { name: 'Stamp RR', price: 15 }, { name: 'Stamp SS', price: 20 }] },
        { name: 'Meghalaya Circle', description: 'Covers Meghalaya, with Shillong as its main city.', headquarters: 'Shillong', philatelicItems: [{ name: 'Stamp TT', price: 14 }, { name: 'Stamp UU', price: 18 }, { name: 'Stamp VV', price: 22 }] },
        { name: 'Mizoram Circle', description: 'Manages postal services in Mizoram.', headquarters: 'Aizawl', philatelicItems: [{ name: 'Stamp WW', price: 16 }, { name: 'Stamp XX', price: 20 }, { name: 'Stamp YY', price: 25 }] },
        { name: 'Nagaland Circle', description: 'Handles postal services in Nagaland.', headquarters: 'Kohima', philatelicItems: [{ name: 'Stamp ZZ', price: 17 }, { name: 'Stamp AAA', price: 21 }, { name: 'Stamp BBB', price: 26 }] },
        { name: 'Odisha Circle', description: 'Covers the state of Odisha, including Bhubaneswar.', headquarters: 'Bhubaneswar', philatelicItems: [{ name: 'Stamp CCC', price: 18 }, { name: 'Stamp DDD', price: 22 }, { name: 'Stamp EEE', price: 28 }] },
        { name: 'Puducherry Circle', description: 'Handles postal services in Puducherry.', headquarters: 'Puducherry', philatelicItems: [{ name: 'Stamp FFF', price: 12 }, { name: 'Stamp GGG', price: 16 }, { name: 'Stamp HHH', price: 20 }] },
        { name: 'Punjab Circle', description: 'Covers the state of Punjab, with Chandigarh as its headquarters.', headquarters: 'Chandigarh', philatelicItems: [{ name: 'Stamp III', price: 14 }, { name: 'Stamp JJJ', price: 18 }, { name: 'Stamp KKK', price: 23 }] },
        { name: 'Rajasthan Circle', description: 'Manages postal services in Rajasthan, with Jaipur as its main city.', headquarters: 'Jaipur', philatelicItems: [{ name: 'Stamp LLL', price: 19 }, { name: 'Stamp MMM', price: 24 }, { name: 'Stamp NNN', price: 29 }] },
        { name: 'Sikkim Circle', description: 'Handles postal services in Sikkim.', headquarters: 'Gangtok', philatelicItems: [{ name: 'Stamp OOO', price: 11 }, { name: 'Stamp PPP', price: 14 }, { name: 'Stamp QQQ', price: 18 }] },
        { name: 'Tamil Nadu Circle', description: 'Covers Tamil Nadu, including Chennai.', headquarters: 'Chennai', philatelicItems: [{ name: 'Stamp RRR', price: 20 }, { name: 'Stamp SSS', price: 26 }, { name: 'Stamp TTT', price: 32 }] },
        { name: 'Telangana Circle', description: 'Handles postal services in Telangana, with Hyderabad as its main city.', headquarters: 'Hyderabad', philatelicItems: [{ name: 'Stamp UUU', price: 15 }, { name: 'Stamp VVV', price: 22 }, { name: 'Stamp WWW', price: 28 }] },
        { name: 'Tripura Circle', description: 'Manages postal services in Tripura, including Agartala.', headquarters: 'Agartala', philatelicItems: [{ name: 'Stamp XXX', price: 13 }, { name: 'Stamp YYY', price: 17 }, { name: 'Stamp ZZZ', price: 22 }] },
        { name: 'Uttar Pradesh Circle', description: 'Covers Uttar Pradesh, with Lucknow and Kanpur as its major cities.', headquarters: 'Lucknow', philatelicItems: [{ name: 'Stamp AAAA', price: 18 }, { name: 'Stamp BBBB', price: 23 }, { name: 'Stamp CCCC', price: 30 }] },
        { name: 'Uttarakhand Circle', description: 'Handles postal services in Uttarakhand, with Dehradun as its headquarters.', headquarters: 'Dehradun', philatelicItems: [{ name: 'Stamp DDDD', price: 14 }, { name: 'Stamp EEEE', price: 19 }, { name: 'Stamp FFFF', price: 24 }] },
        { name: 'West Bengal Circle', description: 'Covers West Bengal, including Kolkata.', headquarters: 'Kolkata', philatelicItems: [{ name: 'Stamp GGGG', price: 20 }, { name: 'Stamp HHHH', price: 25 }, { name: 'Stamp IIII', price: 30 }] },
        { name: 'Base Circle', description: 'Serves the Indian Armed Forces.', headquarters: 'New Delhi', philatelicItems: [{ name: 'Base Stamp 1', price: 25 }, { name: 'Base Stamp 2', price: 30 }, { name: 'Base Stamp 3', price: 35 }] }
    ];

    let cart = [];

    // Populate Base Circle Philatelic Items
    const baseItemsList = document.getElementById('base-items');
    postalCircles.find(circle => circle.name === 'Base Circle').philatelicItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;

        const buyBtn = document.createElement('button');
        buyBtn.textContent = 'Buy Now';
        buyBtn.onclick = () => {
            addToCart(item);
            // Navigate to payment page
            window.location.href = 'payment.html'; 
        };

        const addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.onclick = () => addToCart(item);

        li.appendChild(buyBtn);
        li.appendChild(addToCartBtn);
        baseItemsList.appendChild(li);
    });

    // Populate Postal Circles
    const circleContainer = document.getElementById('circle-container');
    postalCircles.forEach(circle => {
        if (circle.name === 'Base Circle') return; // Skip Base Circle here

        const card = document.createElement('div');
        card.className = 'circle-card';

        const h3 = document.createElement('h3');
        h3.textContent = circle.name;
        card.appendChild(h3);

        const p = document.createElement('p');
        p.textContent = `${circle.description}. Headquarters: ${circle.headquarters}`;
        card.appendChild(p);

        const itemList = document.createElement('ul');
        circle.philatelicItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ₹${item.price}`;

            const buyBtn = document.createElement('button');
            buyBtn.textContent = 'Buy Now';
            buyBtn.onclick = () => {
                addToCart(item);
                // Navigate to payment page
                window.location.href = 'payment.html'; 
            };

            const addToCartBtn = document.createElement('button');
            addToCartBtn.textContent = 'Add to Cart';
            addToCartBtn.onclick = () => addToCart(item);

            li.appendChild(buyBtn);
            li.appendChild(addToCartBtn);
            itemList.appendChild(li);
        });

        const philatelicSection = document.createElement('div');
        philatelicSection.className = 'philatelic-items';
        const philatelicTitle = document.createElement('h4');
        philatelicTitle.textContent = 'Philatelic Items';
        philatelicSection.appendChild(philatelicTitle);
        philatelicSection.appendChild(itemList);

        card.appendChild(philatelicSection);
        circleContainer.appendChild(card);
    });

    // Function to Add Items to Cart
    function addToCart(item) {
        cart.push(item);
        updateCart();
    }

    // Function to Update Cart
    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        const cartCount = document.getElementById('cart-count');

        cartItems.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ₹${item.price}`;
            cartItems.appendChild(li);
        });

        cartCount.textContent = cart.length;
    }

    // Show Cart Section on Cart Link Click
    document.getElementById('cart-link').addEventListener('click', () => {
        document.getElementById('cart-section').style.display = 'block';
    });
});
