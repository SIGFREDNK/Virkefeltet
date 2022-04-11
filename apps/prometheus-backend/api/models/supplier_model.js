import mongoose from 'mongoose';

const supplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Angiv venligst leverandørens navn']
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
        minlength: 8,
        maxlength: 8
    },
    seNumber: {
        type: String,
        length: 10
    },
    account: {
        type: Number,
        length: 4,
        required: [true, 'Angiv venligst en bankkonto']
    },
    supplierGroup: {
        type: Number,
        required: [true, 'Angiv venligst en leverandørgruppe']
    },
    phone: {
        type: Number,
        length: 8
    },
    email: {
        type: String,
        required: [true, 'Angiv venligst en e-mailadresse']
    }
});

export default mongoose.model('Supplier', supplierSchema);
