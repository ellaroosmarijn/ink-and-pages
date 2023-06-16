import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Library from './Library'
import Wishlist from './Wishlist'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/play" element={<Wishlist />} />
      </Routes>
    </>
  )
}
