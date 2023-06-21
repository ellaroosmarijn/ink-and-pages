import type { ThunkAction } from '../store'

import { Books, Book } from '../../shared/types'
import { allBooks, newBook, deleteBook, updateBook } from '../apis/apiClient'

export const GET_BOOKS_PENDING = 'GET_BOOKS_PENDING'
export const GET_BOOKS_FULFILLED = 'GET_BOOKS_FULFILLED'
export const GET_BOOKS_ERROR = 'BOOKS_ERROR'
export const ADD_BOOK_FULFILLED = 'ADD_BOOK_FULFILLED'
export const DELETE_FULFILLED = 'SET_DELETE_FULFILLED'
export const UPDATE_FULFILLED = 'SET_UPDATE_FULFILLED'

export type BooksAction =
  | { type: typeof GET_BOOKS_PENDING; payload: void }
  | { type: typeof GET_BOOKS_FULFILLED; payload: Books }
  | { type: typeof GET_BOOKS_ERROR; payload: string }
  | { type: typeof DELETE_FULFILLED; payload: string }
  | { type: typeof UPDATE_FULFILLED; payload: Book }

export function getBooksPending(): BooksAction {
  return {
    type: GET_BOOKS_PENDING,
  } as BooksAction
}

export function getBooksFulfilled(book: Books): BooksAction {
  return {
    type: GET_BOOKS_FULFILLED,
    payload: book,
  }
}

export function booksRequestRejected(error: string): BooksAction {
  return {
    type: GET_BOOKS_ERROR,
    payload: error,
  }
}

export function deleteBookSuccess(deletedBook: string): BooksAction {
  return {
    type: DELETE_FULFILLED,
    payload: deletedBook,
  }
}

export function updateBookSuccess(updatedBook: Book): BooksAction {
  return {
    type: UPDATE_FULFILLED,
    payload: updatedBook,
  }
}

// TODO: use async and try/catch in ThunkActions
export function getBooks(): ThunkAction {
  return (dispatch) => {
    dispatch(getBooksPending())
    return allBooks()
      .then((books) => {
        dispatch(getBooksFulfilled(books))
      })
      .catch((error: Error) => {
        dispatch(booksRequestRejected(error.message))
        throw error
      })
  }
}

export function addingBook(book: Book): ThunkAction {
  return (dispatch) => {
    return newBook(book)
      .then((addedBook) => {
        dispatch(getBooksFulfilled(addedBook))
        dispatch(getBooks())
      })
      .catch((error: Error) => {
        dispatch(booksRequestRejected(error.message))
        throw error
      })
  }
}

export function deletingBook(id: number): ThunkAction {
  return (dispatch) => {
    return deleteBook(id)
      .then((id: number) => {
        dispatch(deleteBookSuccess(`You have deleted the book with id ${id}`))
        dispatch(getBooks())
      })
      .catch((error: Error) => {
        dispatch(booksRequestRejected(error.message))
        throw error
      })
  }
}

export function updatingBook(id: number, book: Book): ThunkAction {
  return (dispatch) => {
    return updateBook(id, book)
      .then((updatedBook) => {
        dispatch(updateBookSuccess(updatedBook))
      })
      .catch((error: Error) => {
        dispatch(booksRequestRejected(error.message))
        throw error
      })
  }
}
