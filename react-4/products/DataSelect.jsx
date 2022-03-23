const DataSelect = (props) => {
  console.log(props.sortByPriceOrQuantity.label);
  return (
    <div>
      <select
        defaultValue={props.sortByCategory}
        onChange={props.handleChangeSortByCategory}
      >
        <option value="">-----</option>
        {props.categories.map((category, index) => (
          <option value={category} key={index}>
            {category}
          </option>
        ))}
      </select>

      <select
        defaultValue={props.sortByCategory}
        onChange={props.handleChangeSortByPriceOrQuantity}
      >
        <option value="">-----</option>
        {props.sortList.map((sort, index) => (
          <option value={sort.id} key={index}>
            {sort.label}
          </option>
        ))}
      </select>

      <input
        type="checkbox"
        name=""
        id="checkbox"
        onChange={props.handleChangeCheckBox}
      />
      <label htmlFor="checkbox">Còn hàng</label>
    </div>
  );
};
