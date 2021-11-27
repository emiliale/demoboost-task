import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import database from './database'

const app = express()

const port = process.env.PORT || 5000;
app.set("port", port);


app.use(bodyParser.json());
app.use(cors());

app.get('/webpages', async (req, res) => {
    try{
        const results = await database.promise().query("SELECT * FROM webpages")
        res.status(200).send(results[0])
    }catch(err){
        console.log(err)
    }
})

app.post('/webpages', (req, res) => {
    const { name, address } = req.body;
    if (name && address) {
        try {
            database.promise().query(`INSERT INTO webpages VALUES('${name}', '${address}')`);
            res.status(201).send({ msg: "Created webpage" });
        }
        catch (err) {
            console.log(err)
        }
    }
})

app.listen(port, () => console.log(`server started at port ${port} in ${process.env.DB_ENVIROMENT}`))
