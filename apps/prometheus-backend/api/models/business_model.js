import mongoose from 'mongoose';

const businessSchema = new mongoose.Schema({
    owners: [
        {
            type: mongoose.Schema.ObjectId,
            required: [true, 'Angiv venligst en virksomhedsejer']
        }
    ],
    name: {
        type: String,
        required: [true, 'Angiv venligst din virksomheds navn']
    },
    type: {
        type: String,
        enum: ['anpartsselskab', 'aktieselskab', 'enkeltmandsvirksomhed'],
        required: [true, 'Angiv venligst en virksomhedstype']
    },
    phone: {
        type: Number,
        minlength: 8,
        maxlength: 8
    },
    email: {
        type: String,
        required: [true, 'Angiv venligst virksomhedens primære email-adresse']
    },
    cvr: {
        type: Number,
        minlength: 8,
        maxlength: 8
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
    accounts: [
        {
            number: {
                type: Number,
                minlength: 4,
                maxlength: 4
            },
            registrationNumber: {
                type: Number,
                minlength: 4,
                maxlength: 4
            },
            accountNumber: {
                type: Number,
                required: [true, 'Angiv venligst et kontonummer']
            },
            iban: {
                type: String
            },
            swift: {
                type: String
            },
            bank: {
                type: String,
                required: [true, 'Angiv venligst bankens navn']
            }
        }
    ],
    paymentConditions: {
        days: {
            type: String,
            required: [true, 'Angiv venligst et antal dage']
        },
        name: {
            type: String,
            required: [true, 'Navngiv venligst denne betalingsbetingelse']
        },
        description: {
            type: String
        }
    },
    financialYear: {
        startDate: {
            type: Date,
            required: [true, 'Angiv venligst en startdato for dit regnskabsår']
        },
        endDate: {
            type: Date,
            required: [true, 'Angiv venligst en slutdato for dit regnskabsår']
        },
        special: {
            type: Boolean,
            default: false
        }
    },
    vatPaymentInterval: {
        type: String,
        enum: ['semi-annually', 'quarterly'],
        required: [
            true,
            'Angiv venligst intervallet for dine momsindbetalinger'
        ]
    },
    vatCodes: [
        {
            name: {
                type: String,
                required: [true, 'Navngiv venligst momskoden']
            },
            type: {
                type: String,
                enum: ['sale', 'purchase']
            },
            code: {
                type: String,
                required: [true, 'Angiv venligst en momskode']
            }
        }
    ],
    customerGroups: [
        {
            number: {
                type: Number,
                required: [
                    true,
                    'Angiv venligst et nummer for denne kundegruppe'
                ]
            },
            name: {
                type: String,
                required: [true, 'Navngiv venligst kundegruppen']
            },
            discount: {
                type: Number,
                default: 0,
                min: 0,
                max: 100
            },
            account: {
                type: Number,
                minlength: 4,
                maxlength: 4,
                required: [
                    true,
                    'Angiv venligst en bankkonto for denne kundegruppe'
                ]
            }
        }
    ],
    supplierGroups: [
        {
            number: {
                type: Number,
                required: [
                    true,
                    'Angiv venligst et nummer for denne leverandørgruppe'
                ]
            },
            name: {
                type: String,
                required: [true, 'Navngiv venligst leverandørgruppen']
            },
            account: {
                type: Number,
                minlength: 4,
                maxlength: 4,
                required: [
                    true,
                    'Angiv venligst en bankkonto for denne leverandørgruppe'
                ]
            }
        }
    ],
    productGroups: [
        {
            number: {
                type: Number,
                required: [
                    true,
                    'Angiv venligst et nummer for denne produktgruppe'
                ]
            },
            name: {
                type: String,
                required: [true, 'Navngiv venligst produktgruppen']
            },
            account: {
                type: Number,
                length: 4,
                required: [
                    true,
                    'Angiv venligst en bankkonto for denne produktgruppe'
                ]
            }
        }
    ],
    units: [
        {
            number: {
                type: Number,
                required: [true, 'Angiv venligst et nummer for denne enhed']
            },
            name: {
                type: String,
                required: [true, 'Angiv venligst enhedens navn']
            }
        }
    ],
    numberSeries: {
        recordNumber: {
            type: Number,
            min: 0,
            required: [true, 'Du skal have et bilagsnummer']
        },
        invoiceNumber: {
            type: Number,
            min: 0,
            required: [true, 'Du skal have et fakturanummer']
        },
        orderNumber: {
            type: Number,
            min: 0,
            required: [true, 'Du skal have et ordrenummer']
        },
        reminderNumber: {
            type: Number,
            min: 0,
            required: [true, 'Du skal have et rykkernummer']
        }
    }
});

export default mongoose.model('Business', businessSchema);
