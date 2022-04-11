import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Angiv venligst medarbejderens navn']
    },
    surname: {
        type: String,
        required: [true, 'Angiv venligst medarbejderens efternavn']
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: [true, 'Angiv venligst medarbejderens køn']
    },
    title: {
        type: String,
        required: [true, 'Angiv venligst medarbejderens jobtitel']
    },
    email: {
        type: String,
        required: [true, 'Angiv venligt medarbejderens e-mail']
    },
    phone: {
        type: Number,
        required: [true, 'Angiv venligst medarbejderens telefonnummer']
    },
    address: {
        type: {
            type: String,
            default: 'Point',
            enum: ['Point']
        },
        coordinates: [Number],
        address: String,
        description: String
    },
    employer: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'Angiv venligst medarbejderens arbejdsgiver']
    },
    salaryType: {
        type: String,
        enum: ['monthly', 'hourly'],
        required: [true, 'Angiv venligst medarbejderens aflønsmåde']
    },
    baseSalary: {
        type: Number,
        min: 0,
        required: [true, 'Angiv venligst medarbejderens løn']
    },
    password: {
        type: String,
        required: [true, 'Angiv venligst medarbejderens adgangskode']
    },
    hours: [
        {
            minutes: {
                type: Number,
                min: 0,
                required: [
                    true,
                    'Angiv venligst hvor lang tid medarbejderen har arbejdet'
                ]
            },
            hourlyBonus: {
                type: Number,
                min: 0
            }
        }
    ]
});

export default mongoose.model('Employee', employeeSchema);
