const router = require('express').Router();

const Quiz = require('../helpers/quizModel')

router.get('/', (req,res) => {
    Quiz.find()
        .then(task => {
            res.status(200).json(task)
        })
        .catch(error =>{
            res.status(500).json(console.log(error))
        })
})

router.post('/', (req,res) => {
    Quiz.add(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(error =>{
            res.status(500).json(console.log(error))
        })
})

router.delete('/:id', (req, res) => {
	const id = req.params.id;
	Quiz.remove(id)
    .then(task => {
        res.status(201).json({task: `item ${id} was removed`})
    })
    .catch(error =>{
        res.status(500).json(console.log(error))
    })
});



module.exports = router;