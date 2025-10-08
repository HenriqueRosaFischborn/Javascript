import express from 'express'
const app = express()

const PORT = 3000

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    next()
}) 

app.get('/', (req, res) => {
    res.status(200).send('<h1>Página inicial</h1>')
    
})

app.get('/sobre', (req, res) => {
    res.status(200).send('<h1>Página sobre</h1>')
    
})

app.get('/contato', (req, res) => {
    res.status(200).send('<h1>Fale conosco</h1>')
})

app.get('/fotos', (req, res) => {
    res.status(200).send('<h1>Fotos</h1>')
})

app.use((req, res) => {
    res.status(400).send('<h1>404 - Página não encontrada</h1>')
})

app.listen(PORT)