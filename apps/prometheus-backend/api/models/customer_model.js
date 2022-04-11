import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Angiv venligst kundens fornavn']
    },
    number: {
        type: String,
        required: [true, 'Angiv venligst et kundenummer'],
        min: 0
    },
    customerGroup: {
        type: String,
        required: [true, 'Angiv venligst en kundegruppe']
    },
    phone: {
        type: Number,
        minlength: 8,
        maxlength: 8
    },
    email: {
        type: String,
        required: [true, 'Angiv venligst kundens email-adresse']
    },
    address: {
        type: {
            type: String,
            default: 'Point',
            enum: ['Point']
        },
        coordinates: [Number],
        address: String,
        description: String
    },
    cvr: {
        type: Number,
        length: 8
    },
    discount: {
        type: Number,
        min: 0,
        max: 100
    }
});

export default mongoose.model('Customer', customerSchema);
