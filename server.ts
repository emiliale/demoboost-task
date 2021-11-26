import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
// import database from "./database"

const port = 5000
const app = express()

app.use(cors());
app.use(bodyParser.json());

app.get('/webpages', async (req, res) => {
    try{
        // const results = await database.promise().query("SELECT * FROM webpages")
        // res.status(200).send(results[0])
    }catch(err){
        console.log(err)
    }
})

app.post('/webpages', (req, res) => {
    const { name, address } = req.body;
    if (name && address) {
        try {
            // database.promise().query(`INSERT INTO webpages VALUES('${name}', '${address}')`);
            res.status(201).send({ msg: "Created webpage" });
        }
        catch (err) {
            console.log(err)
        }
    }
})

app.listen(process.env.PORT || port, () => console.log('server started'))
