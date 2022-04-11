import Product from '../models/product_model.js';

import * as factory from '../helpers/factory.js';

const getAllProducts = factory.getAll(Product);

const getProduct = factory.getOne(Product);

const createProduct = factory.createOne(Product);

const deleteProduct = factory.deleteOne(Product);

const updateProduct = factory.updateOne(Product);

export {
    getAllProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
};
