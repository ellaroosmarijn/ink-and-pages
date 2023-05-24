import request from 'superagent'

import { Books, Book } from '../../shared/types'

export async function allBooks(): Promise<Books> {
  try {
    const response = await request.get('/api/v1/books')
    return response.body
  } catch (error) {
    throw Error(
      'The books disappeared into their worlds of magic and could not attend. Please try again.'
    )
  }
}

export async function newBook(book: Book) {
  try {
    const response = await request.post('/api/v1/book/add').send(book)
    return response.body
  } catch (error) {
    throw Error(
      'The books disappeared into their worlds of magic and could not respond. Please try again.'
    )
  }
}

export async function deleteBook(id: number) {
  try {
    const response = await request.delete(`/api/v1/book/${id}`)
    return response.body
  } catch (error) {
    throw Error(
      'The books disappeared into their worlds of magic and could not respond. Please try again.'
    )
  }
}

export async function updateBook(id: number, book: Book) {
  try {
    const response = await request.patch(`/api/v1/book/${id}`).send(book)
    return response.body
  } catch (error) {
    throw Error(
      'The books disappeared into their worlds of magic and could not attend. Please try again.'
    )
  }
}
