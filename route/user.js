const express = require('express');
const router = express.Router();
const userController = require('../controllers/userHomeController');
const checkAuth  = require("../middleware/auth");
// const app = express();
// const form= require("./routes");
// app.use(form);


const Checklogedin=(req,res,next)=>{
  if(req.user){
    next()
  }else{
    res.redirect("/login");
  }
}

// Route
router.get('/',checkAuth,Checklogedin, userController.view);
router.post('/',checkAuth ,Checklogedin, userController.find);
router.get('/adduser',checkAuth ,Checklogedin, userController.form);
router.post('/adduser',checkAuth ,Checklogedin, userController.create);
router.get('/edituser/:id',checkAuth ,Checklogedin, userController.edit);
router.post('/edituser/:id',checkAuth ,Checklogedin, userController.update);
router.get('/viewuser/:id',checkAuth ,Checklogedin, userController.viewall);
router.get('/:id',checkAuth ,Checklogedin,userController.delete);
  
module.exports = router;