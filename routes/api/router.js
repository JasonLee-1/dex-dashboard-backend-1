const express = require("express");


const router = express.Router();
const productController = require('../../controllers/projectController');
const userController = require('../../controllers/userController');
const categoryController = require('../../controllers/categoryController');
const whitelistController = require('../../controllers/whitelistController');

router.get('/',productController.getProject)

router.post('/forksave',productController.saveProject);

router.post('/imagesave',productController.saveImage);

router.post('/updateWatchlist',productController.updateProject);

router.post('/updateAdminApprove',productController.updateProjectApprove);

router.post('/updateAdminDead',productController.updateProjectDead);

router.post('/updateAdminRug',productController.updateProjectRug);

router.post('/updateAdminFeatured',productController.updateAdminFeatured);

router.post('/updateAdminHot',productController.updateAdminHot);

router.post('/updateAdminTrending',productController.updateAdminTrending);

router.post('/updateAdminTop',productController.updateAdminTop);

router.post('/removeProject',productController.removeProject);

router.post('/forkedit',productController.editProject);



router.get('/getCategory',categoryController.getCategory);

router.post('/addfork',categoryController.addFork);

router.post('/deletefork',categoryController.deleteFork);

router.post('/addnetwork',categoryController.addNetwork);

router.post('/deletenetwork',categoryController.deleteNetwork);


router.get('/getwhitelist',whitelistController.getWhitelist);

router.post('/addwhitelist',whitelistController.addWhitelist);

router.post('/deletewhitelist',whitelistController.deleteWhitelist);

router.post('/updatewhitelist',whitelistController.updateWhitelist);


router.post('/loginUser',userController.loginUser);

router.post('/signupUser',userController.signupUser);

router.get('/getUser',userController.getUser);

router.post('/deadUser',userController.deadUser);

router.post('/updateProjectFunction',productController.updateProjectFunction);

module.exports = router;