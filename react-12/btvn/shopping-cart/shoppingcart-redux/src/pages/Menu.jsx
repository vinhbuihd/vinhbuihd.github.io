import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../components/menu/Card";
import { useGetAllProductsQuery } from "../services/product.service";

const Menu = () => {
  const { isFetching, data, error } = useGetAllProductsQuery();

  if (error) {
    return <h2 className="text-center mt-5">OOPS! ERROR...</h2>;
  }

  if (isFetching) {
    return <h1 className="text-center mt-5">Loading...</h1>;
  }

  return (
    <div className="menu">
      <div className="container">
        <div className="row">
          {data.map((product) => (
            <Link
              key={product.id}
              to={"/product/" + product.id}
              className="card col-lg-3 col-md-4 col-sm-6"
            >
              <Card {...product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
