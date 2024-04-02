// Fetch menu items based on selected category
document.getElementById('category').addEventListener('change', function() {
    var category = this.value;
    var menuItems = getMenuItems(category);
    displayMenuItems(menuItems);
});

function getMenuItems(category) {
    // Perform AJAX request to fetch menu items based on category
    // Dummy data for demonstration
    var menuItems = [];
    if (category === 'pizza') {
        menuItems = [
            { name: 'Margherita', price: 8.99 },
            { name: 'Pepperoni', price: 9.99 },
            { name: 'Vegetarian', price: 7.99 }
        ];
    } else if (category === 'burger') {
        menuItems = [
            { name: 'Classic Burger', price: 6.99 },
            { name: 'Cheeseburger', price: 7.99 },
            { name: 'Veggie Burger', price: 5.99 }
        ];
    } else if (category === 'pasta') {
        menuItems = [
            { name: 'Spaghetti Bolognese', price: 10.99 },
            { name: 'Fettuccine Alfredo', price: 11.99 },
            { name: 'Penne Arrabiata', price: 9.99 }
        ];
    }
    return menuItems;
}

function displayMenuItems(menuItems) {
    var menuList = document.getElementById('menu-items');
    menuList.innerHTML = '';
    menuItems.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item.name + ' - $' + item.price;
        menuList.appendChild(li);
    });
}
