import express from "express"
import users from "./routes/users.js"
import auth from "./routes/auth.js"
import contact from "./routes/contacts.js"

const app = express()

app.get('/', (req, res)=>{
    res.json({
        msg: "Welcome to the Home Page"
    })
})

// Define Routes
app.use('/api/users', users)
app.use('/api/auth', auth)
app.use('/api/contact', contact)
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log("server running on port 5000"))