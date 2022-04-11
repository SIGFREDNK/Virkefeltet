import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Angiv venligst navnet på evnen']
        },
        practiceTime: {
            type: Number,
            default: 0 // measured in minutes
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: [true, 'Et projekt skal tilhøre en bruger']
        },
        abilities: [
            {
                name: {
                    type: String,
                    required: [true, 'Navngiv venligst bedriften']
                },
                description: {
                    type: String,
                    required: [true, 'Giv venligst din bedrift et navn']
                },
                learned: { type: Boolean, default: false }
            }
        ]
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

export default mongoose.model('Skill', skillSchema);
