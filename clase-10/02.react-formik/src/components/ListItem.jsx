import { NavLink } from "react-router";

const ListItem = ({item}) => {
  return (
    <li>
      <NavLink
        to={item.ruta}
        className={({ isActive }) =>
          `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200
                                ${
                                  isActive
                                    ? "bg-violet-600 text-white shadow-md shadow-violet-500/20"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                }`
        }
      >
        {item.texto}
      </NavLink>
    </li>
  );
};

export default ListItem;
