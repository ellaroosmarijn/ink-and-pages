import connection from './connection'

import { Book } from '../../models/books'

export function getAllBooks(db = connection) {
  return db('books')
}

export function newBook(newBook: Book, db = connection) {
  return db('books').insert({
    title: newBook.title,
    author: newBook.author,
    genre: newBook.genre,
  })
}

export function deleteBook(id: number, db = connection) {
  return db('books').delete().where({ id })
}

export function updateBook(id: number, book: Book, db = connection) {
  return db('books').update(book).where({ id })
}

export function getBookByStatus(status: string, db = connection) {
  return db('books').where({ status })
}

export function getBookByRating(rating: number, db = connection) {
  return db('books').where({ rating })
}
