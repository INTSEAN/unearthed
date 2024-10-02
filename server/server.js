import express from 'express';
import giftsRouter from './routes/gifts.js'
const app = express()

// Used to serve files from the public folder
app.use('/public', express.static('./public'))

app.use('/scripts', express.static('./public/scripts'))

app.get('/', function(req, res) {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`🚀 Hi Im running on port ${PORT}`)
})
// MiddleWare ->  gifts Router
app.use('/gifts', giftsRouter)