import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="w-full">
      <div className="bg-white py-3 text-center font-title text-3xl uppercase tracking-widest-0.5">
        Ink & Pages
      </div>
      <div className="border-brown-700 border-t"></div>
      <div className="bg-white hover:text-brown-700 flex flex-row justify-center gap-x-20 py-3 font-body text-xs uppercase tracking-widest-0.1 sm:font-semibold md:font-normal">
        <Link to="/">Library</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/add-book">Add Book</Link>
      </div>
    </div>
  )
}
