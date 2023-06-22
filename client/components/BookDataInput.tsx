import { useState, useEffect, useCallback } from 'react'

import { Book } from '../../shared/types'

interface BookDataInputProps {
  onSubmit: (data: Book) => void
  submitButtonText?: string
  defaults?: Book
}

export default function BookDataInput({
  onSubmit,
  submitButtonText,
  defaults,
}: BookDataInputProps) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')

  const resetToInitial = useCallback(() => {
    setTitle(defaults?.title || '')
    setAuthor(defaults?.author || '')
    setGenre(defaults?.genre || '')
  }, [defaults])

  useEffect(() => {
    resetToInitial()
  }, [resetToInitial])

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const bookData = { title, author, genre } as Book
      onSubmit(bookData)
      resetToInitial()
    },
    [author, genre, onSubmit, resetToInitial, title]
  )

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenre(e.target.value)
  }

  const handleGenreToggle = () => {
    setGenre((prevGenre) =>
      prevGenre === 'non-fiction' ? 'fiction' : 'non-fiction'
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit} aria-label="BookData">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <div className="flex items-center">
          <label htmlFor="toggleGenre" className="mr-2">
            <span className="text-md font-body font-medium">
              {genre === 'fiction' ? 'Fiction' : 'Non-Fiction'}
            </span>
          </label>
          <div
            id="toggleGenre"
            className={`${
              genre === 'fiction' ? 'bg-blue-500' : 'bg-gray-300'
            } relative h-6 w-12 cursor-pointer rounded-full transition-colors duration-300`}
            onClick={handleGenreToggle}
            role="switch"
            aria-checked={genre === 'fiction'}
            tabIndex={0}
          >
            <div
              className={`${
                genre === 'fiction' ? 'translate-x-6' : 'translate-x-0'
              } absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white shadow-md transition-transform duration-300`}
            />
          </div>
        </div>
        <br />
        <label htmlFor="selectGenre" className="mb-2 block">
          Select Genre:
        </label>
        <select
          id="selectGenre"
          className="rounded-lg border border-gray-300 p-2"
          value={genre}
          onChange={handleGenreChange}
        >
          {genre === 'fiction' ? (
            <>
              {' '}
              <option value="fantasy">Fantasy</option>
              <option value="classic">Classic</option>
              <option value="science fiction">Science Fiction</option>
              <option value="dystopian">Dystopian</option>
              <option value="action & adventure">Action & Adventure</option>
              <option value="mystery">Mystery</option>
              <option value="horror">Horror</option>
              <option value="thriller & suspense">Thriller & Suspense</option>
              <option value="historical fiction">Historical Fiction</option>
              <option value="romance">Romance</option>
              <option value="women's fiction">Women&apos;s Fiction</option>
              <option value="literary fiction">Literary Fiction</option>
              <option value="contemporary fiction">Contemporary Fiction</option>
              <option value="magical realism">Magical Realism</option>
              <option value="graphic novel">Graphic Novel</option>
              <option value="comic book">Comic Book</option>
              <option value="short story">Short Story</option>
              <option value="young adult">Young Adult</option>
              <option value="new adult">New Adult</option>
              <option value="children's">Children&apos;s</option>
            </>
          ) : (
            <>
              <option value="memoir & autobiography">
                Memoir & Autobiography
              </option>
              <option value="Biography">Biography</option>
              <option value="classic">Classic</option>
              <option value="food & drink">Food & Drink</option>
              <option value="art & photography">Art & Photography</option>
              <option value="comic book">Comic Book</option>
              <option value="self-help">Self-help</option>
              <option value="history">History</option>
              <option value="travel">Travel</option>
              <option value="true crime">True Crime</option>
              <option value="humor">Humor</option>
              <option value="Essays">Essays</option>
              <option value="guide / how-to ">Guide / How-to </option>
              <option value="religion & spirituality">
                Religion & Spirituality
              </option>
              <option value="humanities & social sciences">
                Humanities & Social Sciences
              </option>
              <option value="Parenting & Families">Parenting & Families</option>
              <option value="science & technology">Science & Technology</option>
              <option value="children's">Children&apos;s</option>
            </>
          )}
        </select>

        <button type="submit">{submitButtonText || 'Submit'}</button>
      </form>
    </>
  )
}
