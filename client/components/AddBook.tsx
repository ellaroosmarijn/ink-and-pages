import { useAppDispatch } from '../hooks/hooks'

import { addingBook } from '../actions/books'
import { Book } from '../../shared/types'
import BookDataInput from './BookDataInput'

export default function AddBook() {
  const dispatch = useAppDispatch()

  function handleAdd(book: Book) {
    dispatch(addingBook(book))
  }

  return (
    <>
      <div className="pt-6 font-body text-xl font-bold uppercase">
        📚 Add A Book 📚
      </div>
      <BookDataInput onSubmit={handleAdd} submitButtonText="Add" />
      {/* // TODO add success state - pop up or somehing so user knows it has been added - or redirect them to the Library page (this could be annoyig if they are trying to add multiple books so maybe just a 'back' button). */}
    </>
  )
}
