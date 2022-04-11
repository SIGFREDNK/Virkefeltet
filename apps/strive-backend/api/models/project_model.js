import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Navngiv venligst dit projekt']
        },
        description: {
            type: String,
            required: [true, 'Giv venligst dit projekt en beskrivelse']
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: [true, 'Et projekt skal tilhøre en bruger']
        },
        deadline: {
            type: Date,
            required: [true, 'Angiv venligst en deadline for projektet']
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

export default mongoose.model('Project', projectSchema);
