const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log('Connection Open');
    })
    .catch(err => {
        console.log('Error', err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
});

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 });
}

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}


const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    
}

Product.fireSale().then(data => {
    console.log(data);
})

// const bike = new Product({ name: 'Tire Pump', price: 19.99, categories: ['Cycling'] });

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 39 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log('It worked');
//         console.log(data);
//     }).catch(err => {
//         console.log('Process failed');
//         console.log(err);
// })