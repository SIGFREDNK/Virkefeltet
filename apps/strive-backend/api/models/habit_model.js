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
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: [true, 'Et projekt skal tilhøre en bruger']
        },
        deadline: {
            type: Date,
            required: [true, 'Angiv venligst en deadline for vanen']
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

export default mongoose.model('Habit', habitSchema);
