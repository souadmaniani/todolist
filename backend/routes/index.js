const { Router } = require("express");
const router = Router()
const model = require('../model')

router.get('/' , async (req , res)=>{
    try {
        const data = await model.find({});
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

router.post('/' , async (req , res)=>{
    const { todo } = req.body;
    try {
       const data = await model.create({todo: todo});
        res.send(data)
    } catch (error) {
        console.log(error);
    }
})

router.delete('/:id', async(req, res)=> {
    const id = req.params
    console.log(req.params);
    try {
        await model.deleteOne(id)
        res.send("task deleted")
    } catch (error) {
        console.log(error);
    }
})

module.exports = router
