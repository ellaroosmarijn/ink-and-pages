import { Router } from 'express'

import { getAllBooks, newBook, deleteBook, updateBook } from '../db'

const router = Router()

router.get('/books', async (req, res) => {
  try {
    const books = await getAllBooks()
    res.json(books)
  } catch (error) {
    res.sendStatus(500).json({ error: 'Please try again' })
  }
})

router.post('/book/add', async (req, res) => {
  try {
    const book = req.body
    await newBook(book)
    res.end() // TODO: send new book back to client
  } catch (error) {
    res.sendStatus(500).json({ error: 'Please try again' })
  }
})

router.delete('/book/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await deleteBook(id)
    res.end()
  } catch (error) {
    res.sendStatus(500).json({ error: 'Please try again' })
  }
})

router.patch('/book/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const book = req.body
    const updatedBook = await updateBook(id, book)
    res.json(updatedBook)
  } catch (error) {
    res.sendStatus(500).json({ error: 'Please try again' })
  }
})

export default router
