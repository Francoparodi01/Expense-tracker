const ExpenseSchema = require("../models/expenseModel")

exports.addExpense = async (req, res) =>{
    const {title, amount, category, description, date} = req.body 

    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        if (!title || !category || !description || !date) {
            return res.status(400).json({message: "Todos los campos son obligatorios"})
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({message: "El monto debe ser un número positivo"})
        }
        await expense.save()
        res.status(200).json({message: "Gasto añadido"})
    } catch (error) {
        res.status(500).json({message: "Error de server"})
    }

    console.log(expense)
}

exports.getExpense = async (req,res) =>{
    try {
        const expense = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expense)
    } catch (error) {
        res.status(500).json({message: "Error de server"})
    }
}

exports.deleteExpense = async (req,res) =>{
    const {id} = req.params;
    console.log(req.params)
    ExpenseSchema.findByIdAndDelete(id).then((expense) =>{
        res.status(200).json({message: "Gasto eliminado"})
    })
    .catch((err) =>{
        res.status(500).json({message:"Error de server"})
    })
}