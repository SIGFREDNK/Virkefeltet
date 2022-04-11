import mongoose from 'mongoose';

const invoiceModel = new mongoose.Schema({
    number: {
        type: Number,
        min: 0,
        required: [true, 'Angiv venligst et nummer']
    },
    products: [
        {
            type: mongoose.Schema.ObjectId,
            required: [true, 'Angiv venligst mindst et produkt']
        }
    ],
    customer: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'Angiv venligst en kunde']
    },
    totalPrice: {
        type: Number,
        required: [true, 'Angiv venligst totalprisen']
    }
});

export default mongoose.model('Invoice', invoiceModel);
