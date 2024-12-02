const Router = require('express');
const router = new Router();
const profileController = require('../controllers/profileController');
const isAuthenticated = require('../middlewares/authmiddleware');
const isAdmin = require('..//middlewares/adminmiddleware')


router.post('/login', profileController.login);
router.post('/reg', profileController.register);
router.post('/logout', isAuthenticated, profileController.logout);
router.get('/user', isAdmin, isAuthenticated,  profileController.getAllProfiles);
router.get('/user/my', isAuthenticated, profileController.getProfileByIRender);
router.get('/my', isAuthenticated, profileController.getProfileById);
router.get('/user/:name:last_name', isAuthenticated, isAdmin, profileController.getProfileByName);
router.put('/user/:login', isAuthenticated, profileController.updateProfile);
router.delete('/user/:login', isAuthenticated, profileController.deleteProfile);

//
//router.put(`user/update/profile`, isAuthenticated, profileController.putProfileInfo)
router.post('/user/password_old', isAuthenticated, profileController.сonfrimOldPas)

module.exports = router;