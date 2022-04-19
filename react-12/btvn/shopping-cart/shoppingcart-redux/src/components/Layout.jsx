import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../services/product.service";

const Layout = () => {
  return (
    <div className="layout-main">
      <Header />
      <Outlet />
    </div>
  );
};
export default Layout;
