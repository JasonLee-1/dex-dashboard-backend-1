const express = require("express");


const router = express.Router();
const productController = require('../../controllers/projectController');
const userController = require('../../controllers/userController');

router.get('/',productController.getProject)

router.post('/forksave',productController.saveProject);

router.post('/imagesave',productController.saveImage);

router.post('/updateWatchlist',productController.updateProject);

router.post('/updateAdminApprove',productController.updateProjectApprove);

router.post('/updateAdminDead',productController.updateProjectDead);

router.post('/updateAdminRug',productController.updateProjectRug);

router.post('/removeProject',productController.removeProject);

router.post('/forkedit',productController.editProject);


router.post('/loginUser',userController.loginUser);

router.post('/signupUser',userController.signupUser);

router.get('/getUser',userController.getUser);

router.post('/deadUser',userController.deadUser);

router.post('/updateProjectFunction',productController.updateProjectFunction);

module.exports = router;