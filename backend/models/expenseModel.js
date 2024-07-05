const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
    },
    amount:{
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    type:{
        type: String,
        default: 'expense'
    },
    date:{
        type: Date,
        required: true,
        trim: true
    },
    category:{
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
<<<<<<< HEAD
        required: false,
=======
        required: true,
>>>>>>> 6e810b16c833142499fec490c3e2412e0cbe29b5
        maxLength: 20,
        trim: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Expense', ExpenseSchema)