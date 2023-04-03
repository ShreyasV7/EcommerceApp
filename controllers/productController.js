import slugify from "slugify";
import productModel from "../models/productModel.js";
import fs from "fs";

export const createProductController = async (req, res) => {
       try {
              const { name, slug, description, price, category, shipping, quantity } = req.fields;
              const { photo } = req.files

              // validation
              if (!name) {
                     return res.status(500).send({ error: 'Name is Required' });
              }
              if (!description) {
                     return res.status(500).send({ error: 'Description is Required' });
              }
              if (!price) {
                     return res.status(500).send({ error: 'Price is Required' });
              }
              if (!category) {
                     return res.status(500).send({ error: 'Category is Required' });
              }
              if (photo && photo.size > 10000) {
                     return res.status(500).send({ error: 'Photo is Required and should be less than 1mb' });
              }
              if (!quantity) {
                     return res.status(500).send({ error: 'Quantity is Required' });
              }


              const product = new productModel({ ...req.fields, slug: slugify(name) });
              if (photo) {
                     product.photo.data = fs.readFileSync(photo.path);
                     product.photo.contentType = photo.type
              }

              await product.save();
              res.status(201).send({
                     success: true,
                     message: 'Product created successfully',
                     product
              })
       }
       catch (error) {
              console.log(error);
              res.status(500).send({
                     success: false,
                     error,
                     message: "Error in creating product"
              })
       }
}

export const getProductController = async (req, res) => {
       try {
              const product = await productModel.find({}).select("-photo").limit(12).sort({ createdAt: -1 });
              res.status(200).send({
                     success: true,
                     message: "All products got successfully",
                     product
              });
       }
       catch (error) {
              console.log(error);
              res.status(500).send({
                     success: false,
                     message: "Error in getting product",
                     error: error.message
              })
       }
}