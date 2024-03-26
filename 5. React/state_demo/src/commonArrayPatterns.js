// COMMON PATTERNS FOR UPDATING ARRAYS IN STATE
const shoppingCart = [
    { id: 1, product: 'Jacket', quantity: 1, price: 100 },
    { id: 2, product: 'Shoes', quantity: 1, price: 80 },
    { id: 3, product: 'Gloves', quantity: 2, price: 20 },
    { id: 4, product: 'Hat', quantity: 3, price: 10 },
];

// ADDING TO AN ARRAY
[...shoppingCart, { id: 5, product: 'Socks', quantity: 6, price: 5 }];

// REMOVING FROM AN ARRAY
shoppingCart.filter((item) => item.id !== 2);

// UPDATING AN ITEM IN AN ARRAY
shoppingCart.map((item) => item.id === 2 ? { ...item, quantity: item.quantity + 1 } : item);

// UPDATING ALL ITEMS IN AN ARRAY
shoppingCart.map((item) => ({ ...item, price: item.price * 1.2 }));