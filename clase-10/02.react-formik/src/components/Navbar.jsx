
import navItems from "../constants/nav-items";
import ListItem from "./ListItem";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-6 py-4 shadow-lg md:px-10">
      <h1 className="text-2xl font-bold tracking-tight text-white">
        Educación <span className="text-violet-500">IT</span>
      </h1>

      <nav>
        <ul className="flex items-center gap-2">

          {navItems.map((item) => (
           <ListItem key={item.id} item={item} />
          ))}

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
