


// @desc    Get Goals
// @route   GET api/goals
// @access  Private
function getGoals(req, res){
    res.status(200).json({msg: "get your goals now"});
}


// @desc    Set Goals
// @route   POST api/goals
// @access  Private
function setGoals(req, res){
    
    if(!req.body.text){
        res.status(400)
        throw new Error("plz add something")
    }
    res.status(200).json({msg: "set goals"});
    
}


// @desc    Update Goals
// @route   PUT api/goals/:id
// @access  Private
function updateGoals(req, res){
    res.status(200).json({msg: `update your goal${req.params.id}`}); 
}

// @desc    Delete Goals
// @route   DELETE api/goals/:id
// @access  Private

function deleteGoals(req, res){
    res.status(200).json({msg: `delete your goal${req.params.id}`}); 
}


module.exports= {getGoals, setGoals, updateGoals, deleteGoals}