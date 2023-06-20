import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

import { getBooks, deletingBook, updatingBook } from '../actions/books'
import { Book } from '../../shared/types'
import BookDataInput from './BookDataInput'
import AddBook from './AddBook'

export default function Library() {
  const dispatch = useAppDispatch()
  const books = useAppSelector((state) => state.books)

  const [addBook, setAddBook] = useState(false)
  const [updateBook, setUpdateBook] = useState<Book | undefined>()

  function handleUpdate(book: Book) {
    // if book undefined or id not found then return because can't update.
    if (updateBook?.id == null) {
      return
    }
    dispatch(updatingBook(updateBook.id, book))
      .then(() => {
        setUpdateBook(undefined)
      })
      .catch(() => {}) // TODO: handle error gracefully
  }

  function remove(id: string) {
    const numberId = Number(id)
    dispatch(deletingBook(numberId))
  }

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  return (
    <>
      <div className="pt-16 text-center font-body text-2xl font-bold uppercase tracking-widest-0.1">
        My Library
      </div>
      <ol>
        {books?.map((book) => {
          return (
            <div
              className="inset-0 flex justify-center py-6 text-center tracking-widest-0.1"
              key={book.id}
            >
              <li>
                {book.title}
                <br />
                By {book.author}
                <div className="flex flex-row justify-center before:absolute before:block before:text-center sm:gap-8 md:gap-10">
                  {/* // TODO: Add media queries to effectively handle spacing between below buttons for smaller devices */}
                  <button
                    className="text-black hover:text-black my-4 flex cursor-pointer border px-4 py-2 font-body text-sm font-semibold transition duration-300 hover:bg-red-200"
                    type="button"
                    onClick={() => remove(`${book.id}`)}
                  >
                    Remove
                  </button>
                  <button
                    className="bg-transparent text-black hover:text-black my-4 flex cursor-pointer border px-4 py-2 font-body text-sm font-semibold transition duration-300 hover:bg-blue-200"
                    type="button"
                    onClick={() => {
                      setUpdateBook(book)
                    }}
                  >
                    Update
                  </button>
                </div>
              </li>
            </div>
          )
        })}
      </ol>
      {addBook ? (
        <>
          <AddBook />
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
          <div className="pt-6 font-body text-xl font-bold uppercase">
            📚 Update Book 📚
          </div>
          <BookDataInput
            onSubmit={handleUpdate}
            submitButtonText="Update"
            defaults={updateBook}
          />
        </>
      )}
    </>
  )
}
