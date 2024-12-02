const Router = require('express');
const router = new Router();
const brandController = require('../controllers/brandController');
const isAuthenticated = require('../middlewares/authmiddleware');
const isAdmin = require('..//middlewares/adminmiddleware')

router.post('/brand', isAdmin, isAuthenticated, brandController.createBrand);
router.get('/brand', brandController.getAllBrands);

router.get('/brand/name/:name', brandController.getBrandByName);
router.put('/brand', isAdmin, isAuthenticated, brandController.updateBrand);
router.delete('/brand/:id', isAdmin, isAuthenticated, brandController.deleteBrand);

router.get('/brandejs/id/:id', brandController.getBrandByIdEjs);
//json
router.get('/brandjson', brandController.getAllBrandsJson);
module.exports = router;