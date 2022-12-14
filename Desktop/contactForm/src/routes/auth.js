import express from 'express'

const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Get Logged in user')
})
router.post('/', (req, res)=>{
    res.send('Authorise User')
})

export default router