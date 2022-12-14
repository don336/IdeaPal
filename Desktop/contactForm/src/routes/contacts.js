import express from 'express'

const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Get all Contacts')
})

router.post('/', (req, res)=>{
    res.send('Add Contacts')
})

router.put('/:id', (req, res)=>{
    res.send('Update Contacts')
})
router.delete('/:id', (req, res)=>{
    res.send('delete a  Contacts')
})

export default router