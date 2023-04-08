import { Books } from '../../models/books'

import {
  BooksAction,
  GET_BOOKS_PENDING,
  GET_BOOKS_FULFILLED,
  GET_BOOKS_ERROR,
} from '../actions/books'

interface BooksState {
  books: Books | undefined
  error: string | undefined
  loading: boolean
}

const initialState: BooksState = {
  books: undefined,
  error: undefined,
  loading: false,
}

const BooksReducer = (
  state = initialState,
  action: BooksAction
): BooksState => {
  const { type, payload } = action

  switch (type) {
    case GET_BOOKS_PENDING:
      return {
        ...state,
        error: undefined,
        loading: true,
      }
    case GET_BOOKS_FULFILLED:
      return {
        ...state,
        books: payload,
        loading: false,
      }
    case GET_BOOKS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}

export default BooksReducer
