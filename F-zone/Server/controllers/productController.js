const Product = require("../models/productModel")
const cloudinary = require("cloudinary").v2


//<--------------------- To add Product----------------- >

exports.addProduct = async (req, res) => {
  try {

    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    const image1 = req.files.image1 && req.files.image1[0]
    const image2 = req.files.image2 && req.files.image2[0]
    const image3 = req.files.image3 && req.files.image3[0]
    const image4 = req.files.image4 && req.files.image4[0]

    const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

    let imagesUrl = await Promise.all(

      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" })
        return result.secure_url
      })
    )

    const productData = {
      name, description, category, price: Number(price), subCategory, bestseller: bestseller === 'true' ? true : false,
      sizes: [...sizes],
      image: imagesUrl,
      date: Date.now()
    }


    const product = new Product(productData)
    await product.save()

    res.status(200).json({
      success: true,
      message: "Product added",
      product
    })


  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Network Issues"
    })
  }
}

//<----------------------------- get All products------------------ >


exports.allProducts = async (req,res) => {
  try {

    const products = await Product.find({});

    res.status(200).json({
      success: true,
      products,
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Network Issues"
    })

  }
}


//<----------------------------- remove product ------------------ >

exports.removeProduct = async (req,res) => {
  try {

    const id = req.params.id
    await Product.findByIdAndDelete({ _id: id })

    res.status(200).json({
      success: true,
      message: "Product removed"
    })


  } catch (error) {
    console.log(error)

    return res.status(500).json({
      success: false,
      message: "Network Issue"
    })

  }
}


//<----------------------------- get Single Product  ------------------ >

exports.singleProduct = async (req,res) => {
  try {

    const { id } = req.params
    const data = await Product.findById({ _id: id })

    res.status(200).json({
      success: true,
      message: "Product is got",
      data,
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Network Issues"
    })
  }
}