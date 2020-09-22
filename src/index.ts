import express from 'express';
import db from './database/connection'

const app = express();
const port = 3333;

app.get('/', async (req, res) => {
    const columns = await db.getMaxListeners()
    return res.json(columns)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})