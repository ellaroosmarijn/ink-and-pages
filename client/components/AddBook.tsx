import { useState } from 'react'
import { useAppDispatch } from '../hooks/hooks'

import { addingBook } from '../actions/books'
import { Book } from '../../shared/types'
import BookDataInput from './BookDataInput'

export default function AddBook() {
  const dispatch = useAppDispatch()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_addBook, setAddBook] = useState(false)

  function handleAdd(book: Book) {
    dispatch(addingBook(book))
    setAddBook(false)
  }

  return (
    <>
      <div className="pt-6 font-body text-xl font-bold uppercase">
        📚 Add A Book 📚
      </div>
      <BookDataInput onSubmit={handleAdd} submitButtonText="Add" />
    </>
  )
}
