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
        owner: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: [true, 'Et projekt skal tilhøre en bruger']
        },
        contributors: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
        deadline: {
            type: Date,
            required: [true, 'Angiv venligst en deadline for projektet']
        },
        sections: [
            {
                name: {
                    type: String,
                    required: [true, 'Angiv venligst sektionens navn']
                },
                column: {
                    type: Number,
                    required: [true, 'Angiv venligst sektionens kolonne']
                },
                steps: [
                    {
                        title: {
                            type: String,
                            required: [true, 'Angiv venligst en titel']
                        },
                        description: {
                            type: String,
                            required: [true, 'Angiv venligst en beskrivelse']
                        },
                        //TODO: CUSTOM VALIDATION
                        priority: {
                            type: Boolean,
                            required: [
                                true,
                                'Angiv venligst om der er tale om en prioritet'
                            ]
                        },
                        completed: {
                            type: Boolean,
                            default: false
                        }
                    }
                ]
            }
        ]
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

export default mongoose.model('Project', projectSchema);
