import express from 'express'
import path from 'path'

import routes from './routes/index'

const server = express()

server.use(express.json())

server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1', routes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

export default server
