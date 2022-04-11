import mongoose from 'mongoose';

const achievementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Navngiv venligst din bedrift']
    },
    description: {
        type: String,
        required: [true, 'Beskriv venligst din bedrift']
    }
});

export default mongoose.model('Achievement', achievementSchema);
