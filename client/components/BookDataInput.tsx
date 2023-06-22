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
              genre === 'fiction' ? 'bg-blue-300' : 'bg-gray-200'
            } relative h-6 w-12 cursor-pointer rounded-full transition-colors duration-300`}
            onClick={handleGenreToggle}
            role="switch"
            aria-checked={genre === 'fiction'}
            tabIndex={0}
          >
            <div
              className={`${
                genre === 'fiction' ? 'translate-x-4' : 'translate-x-0'
              } absolute right-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white shadow-md transition-transform duration-300`}
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
          <option value="historical fiction">historical fiction</option>
          <option value="biography">biography</option>
          <option value="auto-biograpy">auto-biograpy</option>
          <option value="history">history</option>
          <option value="mystery">mystery</option>
        </select>

        <button type="submit">{submitButtonText || 'Submit'}</button>
      </form>
    </>
  )
}
