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
        <label htmlFor="selectGenre" className="mb-2 block">
          Select Genre:
        </label>
        <select
          id="selectGenre"
          className="border-gray-300 rounded-lg border p-2"
          value={genre}
          onChange={handleGenreChange}
        >
          <option value="fiction">fiction</option>
          <option value="non-fiction">non-fiction</option>
        </select>

        <button type="submit">{submitButtonText || 'Submit'}</button>
      </form>
    </>
  )
}
