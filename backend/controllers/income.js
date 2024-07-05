const IncomeSchema = require("../models/incomeModel")

exports.addIncome = async (req, res) =>{
    const {title, amount, category, description, date} = req.body 

    const income = IncomeSchema({
        title,
        amount,
        category,
        description: description || '',
        date
    })

    try {
        if (!title || !category || !date) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: "El monto debe ser un número positivo" });
        }        
        await income.save()
        res.status(200).json({message: "Ingreso añadido"})
    } catch (error) {
        res.status(500).json({message: "Error de server"})
    }

    console.log(income)
}

exports.getIncome = async (req,res) =>{
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: "Error de server"})
    }
}

exports.deleteIncome = async (req,res) =>{
    const {id} = req.params;
    console.log(req.params)
    IncomeSchema.findByIdAndDelete(id).then((income) =>{
        res.status(200).json({message: "Ingleso eliminado"})
    })
    .catch((err) =>{
        res.status(500).json({message:"Error de server"})
    })
}