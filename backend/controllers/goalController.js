const asyncHandler = require('express-async-handler');
const { create } = require('../models/goalModel');

const Goal = require('../models/goalModel');

// @desc    Get Goals
// @route   GET api/goals
// @access  Private
// function getGoals(req, res){
//     res.status(200).json({msg: "get your goals now"});
// }
const getGoals = asyncHandler(async (req, res)=>{
    const goals = await Goal.find();
    res.status(200).json(goals);
})


// @desc    Set Goals
// @route   POST api/goals
// @access  Private
const setGoals = asyncHandler(async (req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("plz add something")
    }
    const goal = await Goal.create({
        text: req.body.text
    });
    res.status(200).json(goal);
})

// @desc    Update Goals
// @route   PUT api/goals/:id
// @access  Private
const updateGoals = asyncHandler(async (req, res)=>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error("Goal is not found");
    }
    // findOneAndUpdate(filter, update)
    const updatedGoal = Goal.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedGoal);
})



// @desc    Delete Goals
// @route   DELETE api/goals/:id
// @access  Private
const deleteGoals = asyncHandler(async (req, res)=>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error("Goal not found")
    }
    await goal.remove();
    res.status(200).json({id: req.params.id}); 
})


    


module.exports= {getGoals, setGoals, updateGoals, deleteGoals}

