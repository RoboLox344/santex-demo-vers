const Router = require('express');
const router = new Router();
const reviewController = require('../controllers/reviewController');
const isAuthenticated = require('../middlewares/authmiddleware');
const isAdmin = require('..//middlewares/adminmiddleware')

router.post('/reviews', isAuthenticated, reviewController.createReview);
router.put('/reviews/:review_id', isAuthenticated, reviewController.updateReview);
router.get('/reviews/user/:login',  reviewController.getReviewsByLogin);
router.get('/reviews/product/:product_id', reviewController.getReviewsByProduct);
router.delete('/reviews/:review_id', isAuthenticated, reviewController.deleteReview);


router.get('/reviews/all', reviewController.getReviewsAll)

module.exports = router;
