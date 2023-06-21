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
        <label htmlFor="genre">Genre:</label>
        <input // make setGenre a dropdown box so users options are restricted to fiction and non-fiction - maybe later allow more specific genres (sci-fi, fiction, romance, history, psychology, etc.)
          type="text"
          id="genre"
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <button type="submit">{submitButtonText || 'Submit'}</button>
      </form>
    </>
  )
}
