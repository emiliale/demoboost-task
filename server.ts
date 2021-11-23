import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors());

app.get('/greeting', (req, res) => {
    res.json({ greeting: 'Hello' })
})

app.listen(5000, () => console.log('server started'))
