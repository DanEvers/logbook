const express = require('express')
const app = express()

const port = 5000 

app.use(express.json())

// setting up controller
const ctrl = require('./controllers/Logbook')

// defining endpoint for backend
app.get('/api/jumps', ctrl.getJumps)
app.post('/api/add', ctrl.addJump)
app.put('/api/update/:id', ctrl.updateJump)
app.delete('/api/delete/:id', ctrl.deleteJump)

// listening at port
app.listen ( port, () => console.log(`Listening on port ${port}`))