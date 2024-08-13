const Food = require("../models/foodSchema")
const fs = require('fs')

exports.addFood = async (req, res) => {
    try {

        const { name, description, price, category } = req.body;
        let image_filename = req.file.filename


        const foodData = await Food.create({ name, description, price, category, image: image_filename});


        res.status(200).json({
            success: true,
            food: foodData,
            message: "food is saved"
        })


    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: "Error"
        })
    }
}


exports.listFood = async(req,res) =>{

    try {
        
        const foods = await Food.find({})
        res.status(200).json({
            success:true,
            data:foods
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message:"Error somenting went wrong"
        })
    }
}


exports.removeFood = async(req,res) =>{
    try {

        const{id} = req.body
        const food = await Food.findById({_id:id})
        fs.unlink(`uploads/${food.image}`,()=>{})
    await Food.findByIdAndDelete({_id:id})

    res.status(200).json({
      success:true,
      message:"Food Removed"
    })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message:"Error"
        })

    }
}