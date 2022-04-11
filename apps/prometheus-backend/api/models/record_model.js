import mongoose from 'mongoose';

const recordSchema = new mongoose.Schema({
    business: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'Angiv venligst hvilken virksomhed bilaget tilhører']
    },
    number: {
        type: Number,
        required: [true, 'Giv venligst dit bilag et nummer'],
        min: 0
    },
    date: {
        type: Date,
        required: [true, 'Bilaget skal have en dato']
    },
    type: {
        type: String,
        enum: ['expense', 'income'],
        required: [
            true,
            'Angiv venligst om der er tale om en indtægt eller udgift'
        ]
    },
    vat: {
        type: Number,
        required: [true, 'Angiv venligst momsen i procent'],
        min: 0,
        max: 100
    },
    amount: {
        type: Number,
        required: [true, 'Angiv venligst et beløb']
    },
    account: {
        type: String,
        required: [true, 'Angiv venligst en bankkonto'],
        minlength: 4,
        maxlength: 4
    },
    description: {
        type: String
    },
    counterpart: {
        name: {
            type: String,
            required: [true, 'Angiv venligst en modpart']
        },
        number: {
            type: Number,
            min: 0,
            required: [true, 'Angiv venligst et nummer på modparten']
        }
    }
});

export default mongoose.model('Record', recordSchema);
