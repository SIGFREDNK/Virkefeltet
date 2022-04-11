import mongoose from 'mongoose';

const wareSchema = new mongoose.Schema(
    {
        wareGroup: {
            type: Number,
            min: 0,
            required: [true, 'Angiv venligst en varegruppe']
        },
        number: {
            type: Number,
            min: 0,
            required: [true, 'Angiv venligst et varenummer']
        },
        name: {
            type: String,
            required: [true, 'Angiv venligst varens navn']
        },
        description: {
            type: String
        },
        costPrice: {
            type: Number,
            required: [true, 'Angiv venligst varens kostpris']
        },
        salesPrice: {
            type: Number,
            required: [true, 'Angiv venligst varens salgspris']
        },
        unit: {
            type: String,
            required: [true, 'Angiv venligst en enhed']
        },
        barCode: {
            type: Number,
            length: 12
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

wareSchema.virtual('markup').get(function () {
    return (this.salesPrice / this.costPrice) * 100 - 100;
});

export default mongoose.model('Ware', wareSchema);
