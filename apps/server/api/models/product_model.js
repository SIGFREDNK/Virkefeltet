import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Et produkt skal have et navn'],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Et produkt skal have en beskrivelse'],
        trim: true
    },
    timeOfCreation: {
        type: Date,
        default: Date.now()
    },
    price: {
        type: Number,
        required: [true, 'Et produkt skal have en pris']
    },
    currency: {
        type: String,
        enum: {
            values: ['DKK', 'USD', 'EUR'],
            message: 'De accepterede værdier er: "DKK", "USD" eller "EUR"'
        }
    },
    discount: {
        type: Number,
        default: 0,
        validate: {
            message: 'Rabatten: ({VALUE}) skal være mindre end prisen',
            validator: function (value) {
                return value < this.price;
            }
        }
    },
    paymentModel: {
        type: String,
        required: [true, 'Et produkt skal have en betalingsmodel'],
        enum: {
            values: ['purchase', 'subscription'],
            message: 'De accepterede værdier er: "purchase" eller "subscription'
        }
    },
    coverImage: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model('Product', productSchema);
