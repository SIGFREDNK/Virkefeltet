import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Navngiv venligst vanen']
        },
        description: {
            type: String,
            required: [true, 'Giv venligst vanen en beskrivelse']
        },
        category: {
            type: String,
            required: [true, 'Giv venligst vanen en kategori']
        },
        interval: {
            type: String,
            enum: [
                'Hver dag',
                'Hver mandag',
                'Hver tirsdag',
                'Hver onsdag',
                'Hver torsdag',
                'Hver fredag',
                'Hver lørdag',
                'Hver søndag'
            ]
        },
        numberOfTimes: {
            type: Number,
            min: 0,
            required: [true, 'Angiv venligst et antal gange']
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: [true, 'Et projekt skal tilhøre en bruger']
        },
        active: {
            type: Boolean,
            required: [true, 'Angiv venligst om vanen er aktiv']
        },
        streak: {
            type: Number,
            default: 0
        },
        timesLeft: {
            type: Number,
            required: [true, 'Angiv venligst antallet af gange tilbage']
        },
        lastUpdated: {
            type: Date,
            default: Date.now
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

export default mongoose.model('Habit', habitSchema);
