import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

import {
  getBooks,
  addingBook,
  deletingBook,
  updatingBook,
} from '../actions/books'
import { Book } from '../../models/books'
import BookDataInput from './BookDataInput'

export default function Books() {
  const dispatch = useAppDispatch()
  const books = useAppSelector((state) => state.books)

  const [addBook, setAddBook] = useState(false)
  const [updateBook, setUpdateBook] = useState<Book | undefined>()

  function handleUpdate(book: Book) {
    if (updateBook?.id == null) {
      return
    }
    dispatch(updatingBook(updateBook.id, book))
      .then(() => {
        setUpdateBook(undefined)
      })
      .catch(() => {})
  }

  function remove(id: string) {
    const numberId = Number(id)
    dispatch(deletingBook(numberId))
  }

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  function handleAdd(book: Book) {
    dispatch(addingBook(book))
    setAddBook(false)
  }

  return (
    <>
      <div>
        <h1>📚 Currently Reading 📚</h1>
        <ol>
          {books?.map((book) => {
            return (
              <li key={book.id}>
                {book.title} by {book.author}. It is {book.genre}.
                <div>
                  <button type="button" onClick={() => remove(`${book.id}`)}>
                    Remove
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setUpdateBook(book)
                    }}
                  >
                    Update
                  </button>
                </div>
              </li>
            )
          })}
        </ol>
        {addBook ? (
          <>
            <h1>📚 Add A Book 📚</h1>
            <BookDataInput onSubmit={handleAdd} submitButtonText="Add" />
          </>
        ) : (
          <button
            onClick={() => {
              setAddBook(true)
            }}
          >
            Add Book
          </button>
        )}

        {updateBook && (
          <>
            <h1>📚 Update Book 📚</h1>
            <BookDataInput
              onSubmit={handleUpdate}
              submitButtonText="Update"
              defaults={updateBook}
            />
          </>
        )}
      </div>
    </>
  )
}
