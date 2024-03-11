const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log('Connection Open');
    }).catch(err => {
        console.log('Error', err);
    });

Product.insertMany([
    { name: 'Ruby Grapefruit', price: 1.99, category: 'fruit' },
    { name: 'Honeydew', price: 3.99, category: 'fruit' },
    { name: 'Fairy Eggplant', price: 1.00, category: 'vegetable' },
    { name: 'Organic Goddess Melon', price: 4.99, category: 'fruit' },
    { name: 'Organic Mini Seedless Watermelon', price: 3.99, category: 'fruit' },
    { name: 'Organic Celery', price: 1.50, category: 'vegetable' },
    { name: 'Chocolate Whole Milk', price: 2.69, category: 'dairy' }
]).then(p => {
    console.log(p);
}).catch(e => {
    console.log(e);
});