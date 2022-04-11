import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: [
            true,
            'Angiv venligst, for hvilket produkt dette abonnement gælder'
        ]
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Angiv venligst, hvem der ejer dette produkt']
    },
    expiryDate: {
        type: Date,
        required: [true, 'Angiv venligst en udløbsdato for abonnementet']
    }
});

subscriptionSchema.virtual('products', {
    ref: 'Product',
    foreignField: '_id',
    localField: 'product'
});

subscriptionSchema.pre(/^find/, function (next) {
    this.populate('user').populate('product');
    next();
});

export default mongoose.model('Subscription', subscriptionSchema);
