import { Routes, Route, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Subpath = () => {
  return (
    <div>
      <h2>Subpath Page</h2>

      <ul>
        <li>
          <Link to="1">Trang chủ</Link>
        </li>
        <li>
          <Link to="2">About</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Subpath;
