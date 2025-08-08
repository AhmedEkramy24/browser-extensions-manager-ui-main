import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="container flex sm:flex-row flex-col sm:justify-between p-2">
        <h1 className="text-2xl font-bold text-[#0A1437] dark:text-white">
          Extentions List
        </h1>
        <ul className="flex space-x-2">
          <li>
            <NavLink
              className="rounded-2xl bg-white px-3 py-1 border border-slate-200"
              to={"/"}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              className="rounded-2xl bg-white px-3 py-1 border border-slate-200"
              to={"/active"}
            >
              Active
            </NavLink>
          </li>
          <li>
            <NavLink
              className="rounded-2xl bg-white px-3 py-1 border border-slate-200"
              to={"/inactive"}
            >
              Inactive
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
