import { createContext, useContext, useState } from "react";
import Card from "../../components/Card";
import { WrapperContext } from "../../components/Layout";
import "./Menu.css";

const MenuContext = createContext();

const MenuFilter = () => {
  const {
    currentProducts,
    setCurrentProducts,
    search,
    setSearch,
    radio,
    setRadio,
  } = useContext(MenuContext);
  const filterList = [
    { name: "Cà phê", type: "coffee" },
    { name: "Trà", type: "tea" },
    { name: "Freeze", type: "freeze" },
    { name: "Cà phê gói", type: "coffee-box" },
  ];

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleChangeRadio = (e) => {
    setRadio(e.target.value);
  };

  return (
    <div className="filter">
      <div className="title">sản phẩm</div>

      <div className="filter-content">
        {filterList.map((filterItem, index) => (
          <div
            className={`filter-item align-items-bottom ${
              filterItem.type == currentProducts ? "active" : ""
            }`}
            key={index}
          >
            <div
              onClick={() => setCurrentProducts(filterItem.type)}
              className="filter-name"
            >
              {filterItem.name}
            </div>
          </div>
        ))}
      </div>
      <div className="title">Tìm kiếm</div>
      <div className="filter-content-2">
        <div className="item search">
          <input
            type="text"
            className="filter-search"
            placeholder="Tìm kiếm"
            value={search}
            onChange={handleChangeSearch}
          />
        </div>
        <form action="">
          <div className="radio-group">
            <div className="item d-flex align-items-center">
              <input
                type="radio"
                name="drink"
                value="new"
                id="new"
                checked={radio == "new"}
                onChange={handleChangeRadio}
              />
              <label htmlFor="new">Mới nhất</label>
            </div>

            <div className="item d-flex align-items-center">
              <input
                type="radio"
                name="drink"
                value="selling"
                id="selling"
                checked={radio == "selling"}
                onChange={handleChangeRadio}
              />
              <label htmlFor="selling">Bán chạy</label>
            </div>

            <div className="item d-flex align-items-center">
              <input
                type="radio"
                name="drink"
                value="special"
                id="sale"
                checked={radio == "special"}
                onChange={handleChangeRadio}
              />
              <label htmlFor="sale">Đặc biệt</label>
            </div>
          </div>
        </form>

        <div className="filter-delete-btn text-center">
          <div className="btn" onClick={() => setRadio("")}>
            Bỏ chọn
          </div>
        </div>
      </div>
      <div className="title">Bán chạy</div>
      <div className="filter-bestseller"></div>
    </div>
  );
};

const ProductList = () => {
  const {
    currentProducts,
    setCurrentProducts,
    search,
    setSearch,
    radio,
    setRadio,
  } = useContext(MenuContext);
  const { data } = useContext(WrapperContext);
  let list = data.filter((product) => product.type == currentProducts);
  if (search) {
    list = list.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (radio) {
    list = list.filter((product) => product.status == radio);
  }
  return (
    <div className="products">
      <div className="row mb-3">
        <div className="col-12">
          <div className="item-quantity-bar text-center">
            Hiển thị <span>{list.length}</span> sản phẩm
          </div>
        </div>
      </div>

      <div className="row g-3 product-list">
        {list.map((product) => (
          <div key={product.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <Card product={product} />
          </div>
        ))}
      </div>
      <div className="row">
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Menu = () => {
  const [currentProducts, setCurrentProducts] = useState("coffee");
  const [search, setSearch] = useState("");
  const [radio, setRadio] = useState("");

  return (
    <MenuContext.Provider
      value={{
        currentProducts,
        setCurrentProducts,
        search,
        setSearch,
        radio,
        setRadio,
      }}
    >
      <div>
        <section className="menu-banner"></section>
        <section className="menu-main">
          <h2 className="h2-heading">Menu</h2>
          <div className="lineBorder text-center mb-4">
            <img src="../images/line-under-heading.png" alt="line" />
          </div>
          <div className="container">
            <div className="row g-3">
              <div className="col-xl-24 col-lg-3 col-md-4 col-sm-12">
                <MenuFilter />
              </div>
              <div className="col-xl-96 col-lg-9 col-md-8 col-sm-12">
                <ProductList />
              </div>
            </div>
          </div>
        </section>
      </div>
    </MenuContext.Provider>
  );
};

export default Menu;
