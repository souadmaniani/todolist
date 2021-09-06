const { Router } = require("express");
const router = Router()
const model = require('../model')

router.get('/' , async (req , res)=>{
    try {
        const data = await model.find({});
        res.status(200).json({data: data})
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
    const {id} = req.params
    try {
        await model.findOneAndDelete({_id: id})
        res.send("task deleted")
    } catch (error) {
        console.log(error);
    }
})

module.exports = router
