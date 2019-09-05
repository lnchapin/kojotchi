const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth')
const db = require('../models');
const Users = db.User;
const Pets = db.Pet;

router.get('/', forwardAuthenticated, (req, res) => res.render('index'))

router.get('/login', forwardAuthenticated, (req, res) => res.render('login'))

router.get('/signup', forwardAuthenticated, (req, res) => res.render('signup'))

router.get('/dashboard', ensureAuthenticated, (req, res) =>
  Users.findByPk(req.user.id, {include:[{ model: Pets }]
  })
  .then( info =>{
    let currentPet;
    for (var i = 0; i < info.Pets.length; i++) {
      if(info.Pets[i].active){
        currentPet = info.Pets[i]
      }
    }
    hbsObject = { user: info, pet: currentPet }
    // res.send(hbsObject)
    return res.render("dashboard", hbsObject);
  }
  )
  .catch(err=>console.log(err))

);
router.get('/test', ensureAuthenticated, (req, res) =>
  res.render('testing', {
    user: req.user
  })
);

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_message', 'You are logged out');
  res.redirect('/login');
});



module.exports = router;
