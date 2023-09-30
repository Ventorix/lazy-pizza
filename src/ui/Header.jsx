import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-stone-600 bg-indigo-600 px-4 py-3 uppercase text-stone-200 sm:px-6">
      <Link to={"/"} className="font-bold tracking-widest ">
        Lazy Pizza
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
