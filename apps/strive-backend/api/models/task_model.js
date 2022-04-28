import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Navngiv venligst opgaven']
        },
        description: {
            type: String,
            required: [true, 'Giv venligst opgaven en beskrivelse']
        },
        category: {
            type: String,
            required: [true, 'Angiv venligst en kategori']
        },
        timeFrame: {
            type: 'String',
            enum: ['Interval', 'Dato', 'Når som helst', 'Periode']
        },
        interval: {
            type: String,
            enum: ['Dagligt', 'Ugentligt', 'Månedligt', 'Årligt']
        },
        date: { type: Date },
        startDate: { type: Date },
        endDate: { type: Date },
        timeStamp: { type: String },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: [true, 'Et projekt skal tilhøre en bruger']
        },
        saved: {
            type: Boolean,
            required: [true, 'Angiv venligst om opgaven skal gemmes']
        },
        active: {
            type: Boolean,
            required: [true, 'Angiv venligst om opgaven er aktiv']
        },
        repeat: {
            type: Boolean,
            required: [true, 'Angiv venligst om opgaven gentager sig']
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

export default mongoose.model('Task', taskSchema);
