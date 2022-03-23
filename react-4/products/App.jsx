const { useState } = React;

const App = () => {
  const products = [
    {
      name: "Samsung S22 Ultra",
      category: "Điện thoại",
      price: 30000000,
      quantity: 100,
    },
    {
      name: "Dell XPS",
      category: "Laptop",
      price: 40000000,
      quantity: 29,
    },
    {
      name: "Iphone 13 Promax",
      category: "Điện thoại",
      price: 34000000,
      quantity: 50,
    },
    {
      name: "Tủ lạnh Toshiba",
      category: "Gia dụng",
      price: 8000000,
      quantity: 50,
    },
    {
      name: "Tủ lạnh Samsung",
      category: "Gia dụng",
      price: 12000000,
      quantity: 40,
    },
    {
      name: "Tủ lạnh Nikkei",
      category: "Gia dụng",
      price: 9000000,
      quantity: 0,
    },
    {
      name: "Oppo Reno 7",
      category: "Điện thoại",
      price: 13000000,
      quantity: 29,
    },
    {
      name: "Xiaomi redmi note 5",
      category: "Điện thoại",
      price: 3900000,
      quantity: 29,
    },
    {
      name: "ASUS Zenbook",
      category: "Laptop",
      price: 21590000,
      quantity: 50,
    },
    {
      name: "Macbook",
      category: "Laptop",
      price: 25500000,
      quantity: 12,
    },
    {
      name: "SamSung note 9",
      category: "Điện thoại",
      price: 3333,
      quantity: 2,
    },
    {
      name: "iPad 10.2 2021",
      category: "iPad",
      price: 16500000,
      quantity: 10,
    },
    {
      name: "Bphone X",
      category: "Điện thoại",
      price: 10000000,
      quantity: 0,
    },
    {
      name: "Bánh quy",
      category: "Thực phẩm",
      price: 25000,
      quantity: 0,
    },
    {
      name: "Lenovo L340",
      category: "Máy tính",
      price: 15900000,
      quantity: 25,
    },
  ];

  const sortList = [
    {
      id: 1,
      label: "Giá tăng dần",
      type: "price",
      isascending: true,
    },
    {
      id: 2,
      label: "Giá giảm dần",
      type: "price",
      isascending: false,
    },
    {
      id: 3,
      label: "Số lượng tăng dần",
      type: "quantity",
      isascending: true,
    },
    {
      id: 4,
      label: "Số lượng giảm dần",
      type: "quantity",
      isascending: false,
    },
  ];
  const categories = [];

  products.forEach((product) => {
    if (categories.includes(product.category)) {
      return;
    } else {
      categories.push(product.category);
    }
  });

  const [checkbox, setCheckbox] = useState(false);
  const [sortByCategory, setSortByCategory] = useState("");
  const [sortByPriceOrQuantity, setSortByPriceOrQuantity] = useState({});

  const handleChangeCheckBox = () => {
    setCheckbox(!checkbox);
  };

  const handleChangeSortByCategory = (e) => {
    setSortByCategory(e.target.value);
  };

  const handleChangeSortByPriceOrQuantity = (e) => {
    if (e.target.value != "") {
      const sort = sortList.find((sort) => sort.id == e.target.value);
      setSortByPriceOrQuantity(sort);
    }
  };
  console.log(sortByPriceOrQuantity.label);

  return (
    <div>
      <DataSelect
        categories={categories}
        sortList={sortList}
        handleChangeCheckBox={handleChangeCheckBox}
        sortByCategory={sortByCategory}
        handleChangeSortByCategory={handleChangeSortByCategory}
        sortByPriceOrQuantity={sortByPriceOrQuantity}
        handleChangeSortByPriceOrQuantity={handleChangeSortByPriceOrQuantity}
      />
      <Table
        products={products}
        checkbox={checkbox}
        sortByCategory={sortByCategory}
        sortByPriceOrQuantity={sortByPriceOrQuantity}
      />
    </div>
  );
};

ReactDOM.render(<App />, app);
