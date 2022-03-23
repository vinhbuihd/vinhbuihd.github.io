const TableRow = (props) => {
  return (
    <tr>
      <td>{props.product.name}</td>
      <td>{props.product.category}</td>
      <td>{props.product.price}</td>
      <td>{props.product.quantity}</td>
    </tr>
  );
};
