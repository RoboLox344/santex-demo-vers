const Router = require('express');
const router = new Router();
const productController = require('../controllers/productController');
const isAuthenticated = require('../middlewares/authmiddleware');
const isAdmin = require('..//middlewares/adminmiddleware')

router.post('/product/santeh/towelwarm', isAdmin, isAuthenticated, productController.createTowelWarmer);
router.post('/product/santeh/toilet', isAdmin, isAuthenticated,  productController.createToilet);
router.post('/product/santeh/urinal', isAdmin, isAuthenticated,  productController.createUrinal);
router.put('/product/santeh/towelwarm', isAdmin, isAuthenticated,  productController.updateTowelWarmer);
router.put('/product/santeh/toilet', isAdmin, isAuthenticated,  productController.updateToilet);
router.put('/product/santeh/urinal', isAdmin, isAuthenticated,  productController.updateUrinal);
router.get('/product/santeh', productController.getAllProducts);
router.get('/', productController.getMainProducts);
// router.get('/product/santeh/towelwarmer', productController.getAllTowelWarmerProducts);
// router.get('/product/santeh/toilet', productController.getAllToiletProducts);
// router.get('/product/santeh/urinal', productController.getAllUrinalProducts);
router.get('/product/santeh/id/:id', productController.getProductById);
router.get('/product/santeh/name/:name', productController.getProductByName);
router.get('/product/santeh/sku/:sku', productController.getProductBySku);
router.delete('/product/santeh/:id', isAdmin, isAuthenticated,  productController.deleteProduct);

/* json */
router.get('/santeh/towelwarmer', productController.getAllTowelWarmerProductsRender);
router.get('/santeh/toilet', productController.getAllToiletProductsRender);
router.get('/santeh/urinal', productController.getAllUrinalProductsRender);
router.get('/santeh/id/:id', productController.getProductByIdJson);

//для филтра 
router.get('/id/:id', productController.getProductByBrandID);
router.get('/santeh/brand/:category/:id', productController.getProductSubCategoryByBrandID);

module.exports = router;