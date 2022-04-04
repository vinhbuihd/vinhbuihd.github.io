import { useState } from "react";
import "./App.css";

const BillIcon = () => <i className="bi bi-cash-stack"></i>;
const PeopleIcon = () => <i className="bi bi-people"></i>;

const InputField = (props) => {
  return (
    <div className="form-field">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="input-group">
        {props.icon}
        <input
          type={props.type}
          id={props.id}
          value={props.value}
          name={props.name}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

const OptionField = (props) => {
  const options = props.options.map((option, index) => {
    return (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    );
  });
  return (
    <div className="option-field">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="option-group">
        <select
          name={props.name}
          id={props.id}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
        >
          {options}
        </select>
      </div>
    </div>
  );
};

function App() {
  const options = [
    {
      value: 0.3,
      label: "30% - OutStanding",
    },
    {
      value: 0.2,
      label: "20% - Good",
    },
    {
      value: 0.15,
      label: "15% - It's OK",
    },
    {
      value: 0.1,
      label: "10% - Bad",
    },
    {
      value: 0.05,
      label: "5% - Terrible",
    },
  ];
  const [tip, setTip] = useState(0);
  const [state, setState] = useState({
    bill: 0,
    guest: 0,
    quality: 0.3,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { bill, guest, quality } = state;

    if (bill == "" || guest == "") {
      alert("Bill amount hoặc Number of guest không được để trống!");
      return;
    }

    const tipTotal = bill * quality;
    const tipPerson = (tipTotal / guest).toFixed(2);
    setTip(tipPerson);
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  console.log(state);
  return (
    <div className="container">
      <h1>Tip Calculator</h1>
      <form action="" onSubmit={handleSubmit}>
        <InputField
          label="Bill amount"
          id="bill"
          type="number"
          name="bill"
          icon={<BillIcon />}
          value={state.bill || ""}
          onChange={handleChange}
        />
        <InputField
          label="Number of guest"
          id="guest"
          type="number"
          name="guest"
          icon={<PeopleIcon />}
          value={state.guest || ""}
          onChange={handleChange}
        />

        <OptionField
          options={options}
          label="Server quality"
          id="quality"
          name="quality"
          value={state.quality}
          defaultValue={state.quality}
          onChange={handleChange}
        />

        <p>
          Tip <b>${tip}</b> each person
        </p>
        <button className="btn" type="submit">
          Calculate
        </button>
      </form>
    </div>
  );
}

export default App;
