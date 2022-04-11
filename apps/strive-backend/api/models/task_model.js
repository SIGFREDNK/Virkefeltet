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
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: [true, 'Et projekt skal tilhøre en bruger']
        },
        deadline: {
            type: Date,
            required: [true, 'Angiv venligst en deadline for opgaven']
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

export default mongoose.model('Task', taskSchema);
