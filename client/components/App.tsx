import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Library from './Library'
import Wishlist from './Wishlist'
import AddBook from './AddBook'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </>
  )
}
