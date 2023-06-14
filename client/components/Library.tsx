import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

import {
  getBooks,
  addingBook,
  deletingBook,
  updatingBook,
} from '../actions/books'
import { Book } from '../../shared/types'
import BookDataInput from './BookDataInput'

const SubHeading = styled.div`
  padding-top: 1.5rem;
  font-weight: 700;
  font-size: 1.5rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  & a:before {
    text-align: center;
    display: block;
  }

  & a {
    display: inline-block;
  }
`

const SecondaryButton = styled.button`
  display: flex;
  background-color: transparent;
  color: #000000;
  font-family: 'Wix Madefor Display', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  border: 3px;
  border-color: #000000;
  padding: 1rem 1.5rem;
  transition: 0.3s;

  &:hover {
    background-color: #ecddbb;
    color: #000000;
  }
`

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

  function handleAdd(book: Book) {
    dispatch(addingBook(book))
    setAddBook(false)
  }

  return (
    <>
      <SubHeading>My Library</SubHeading>
      <ol>
        {books?.map((book) => {
          return (
            <li key={book.id}>
              {book.title} by {book.author}. It is {book.genre}.
              <ButtonWrapper>
                <SecondaryButton
                  type="button"
                  onClick={() => remove(`${book.id}`)}
                >
                  Remove
                </SecondaryButton>
                <SecondaryButton
                  type="button"
                  onClick={() => {
                    setUpdateBook(book)
                  }}
                >
                  Update
                </SecondaryButton>
              </ButtonWrapper>
            </li>
          )
        })}
      </ol>
      {addBook ? (
        <>
          <SubHeading>📚 Add A Book 📚</SubHeading>
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
          <SubHeading>📚 Update Book 📚</SubHeading>
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
