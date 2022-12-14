import express from 'express'

const router = express.Router();

router.post('/', (req, res)=>{
    res.send('Register a User')
})

export default router