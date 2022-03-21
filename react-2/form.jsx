const BillIcon = () => <i className="bi bi-cash-stack"></i>;
const PeopleIcon = () => <i className="bi bi-people"></i>;

const InputField = (props) => {
  return (
    <div className="form-field">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="input-group">
        {props.icon}
        <input type={props.type} id={props.id} />
      </div>
    </div>
  );
};

const Option = (props) => {
  return <option value={props.value}>{props.text}</option>;
};

const OptionField = (props) => {
  return (
    <div className="option-field">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="option-group">
        <select name="" id={props.id}>
          <Option value="" text="choose..." />
          <Option value="30" text="30% - OutStanding" />
          <Option value="20" text="20% - Good" />
          <Option value="15" text="15% - It's OK" />
          <Option value="10" text="10% - Bad" />
          <Option value="5" text="5% - Terrible" />
        </select>
      </div>
    </div>
  );
};

OptionField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

function App() {
  return (
    <div className="container">
      <h1>Tip Calculator</h1>
      <form action="">
        <InputField
          label="Bill amount"
          id="bill"
          type="number"
          icon={<BillIcon />}
        />
        <InputField
          label="Number of guest"
          id="guest"
          type="number"
          icon={<PeopleIcon />}
        />

        <OptionField label="Server quality" id="option" />

        <h3>
          Tip <span>$12.34</span> each person
        </h3>
        <button className="btn" type="submit">
          Calculate
        </button>
      </form>
    </div>
  );
}

ReactDOM.render(<App />, app);
