import mongoose from 'mongoose';

const diarySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, 'Angiv venligst en dato']
    },
    content: {
        type: String,
        required: [true, 'Du mangler at skrive i din dagbog']
    }
});

export default mongoose.model('Diary', diarySchema);
