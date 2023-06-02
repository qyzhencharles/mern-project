const express = require("express");
const router = express.Router();
const {getGoals} = require('../controllers/goalController')

router.get('/', getGoals);

router.post('/', function(req, res){
    res.status(200).json({msg: "set goals"}); 
})

router.put('/:id', function(req, res){
    res.status(200).json({msg: `update your goal${req.params.id}`}); 
})

router.delete('/:id', function(req, res){
    res.status(200).json({msg: `delete your goal${req.params.id}`}); 
})



module.exports = router;
