import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="w-full">
      <div className="bg-white py-3 text-center font-title text-2xl uppercase tracking-widest-0.5">
        Ink & Pages
      </div>
      <div className="border-t border-brown-700"></div>
      <div className="bg-white flex flex-row justify-center gap-x-20 py-3 font-body text-xs uppercase tracking-widest-0.1 hover:text-brown-700 sm:font-semibold md:font-normal">
        <Link to="/library">Library</Link>
        <Link to="/wishlist">Wishlist</Link>
      </div>
    </div>
  )
}
