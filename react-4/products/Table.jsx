const Table = (props) => {
  let data = [...props.products];

  if (props.checkbox) {
    data = data.filter((product) => product.quantity > 0);
  }

  if (props.sortByCategory) {
    data = data.filter((product) => product.category == props.sortByCategory);
  }
  // {type: price, isascending: true}
  if (props.sortByPriceOrQuantity) {
    data = data.sort((a, b) => {
      let product1 = a[props.sortByPriceOrQuantity.type];
      let product2 = b[props.sortByPriceOrQuantity.type];
      return props.sortByPriceOrQuantity.isascending
        ? product1 - product2
        : product2 - product1;
    });
  }

  return (
    <table>
      <thead>
        <tr>
          <td>Tên sản phẩm</td>
          <td>Danh mục</td>
          <td>Giá</td>
          <td>Số lượng</td>
        </tr>
      </thead>

      <tbody>
        {data.map((product, index) => {
          return <TableRow key={index} product={product} />;
        })}
      </tbody>
    </table>
  );
};
