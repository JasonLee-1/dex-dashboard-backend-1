const express = require("express");


const router = express.Router();
const productController = require('../../controllers/projectController');

router.get('/',productController.getProject)

router.post('/forksave',productController.saveProject);

router.post('/imagesave',productController.saveImage);

router.post('/updateWatchlist',productController.updateProject);

router.post('/updateAdminApprove',productController.updateProjectApprove);

router.post('/updateAdminDead',productController.updateProjectDead);

router.post('/updateAdminRug',productController.updateProjectRug);

router.post('/removeProject',productController.removeProject);

router.post('/forkedit',productController.editProject);

module.exports = router;