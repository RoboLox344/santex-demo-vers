const Router = require('express');
const router = new Router();
const orderController = require('../controllers/ordersController');
const isAuthenticated = require('../middlewares/authmiddleware');
const isAdmin = require('..//middlewares/adminmiddleware')

router.post('/addtocart', orderController.createCart);
router.post('/cart/updatequantity/:product_id', orderController.updateQuantityItemCart)
router.get('/orders', isAuthenticated, isAdmin, orderController.getAllOrders);
router.get('/my/orders', isAuthenticated, orderController.getOrdersByUser);
router.get('/cart', orderController.getCartByUser);
router.get('/order/:id', isAuthenticated, isAdmin, orderController.getOrderById);
router.put('/order/:id', isAuthenticated, isAdmin, orderController.updateOrderStatus);
router.post('/order/confirm', orderController.CartToOrder);
router.put('/order/:id', isAuthenticated, isAdmin, orderController.updateOrderDeliveryDate);
router.delete('/cart/delete/:product_id', orderController.deleteItemFromCart);
router.post('/order/delete/:id', isAuthenticated, orderController.deleteOrder);


router.get('/orders/all', isAuthenticated, orderController.getAllOrders);


module.exports = router;