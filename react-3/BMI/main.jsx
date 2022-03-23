const { useState } = React;

const InputField = (props) => {
  return (
    <div className="input-controller">
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      />
      <span>{props.unit}</span>
    </div>
  );
};
const Comment = (props) => {
  return (
    <div>
      {props.bmi < 18.5 && props.bmi > 0 && <b>You fucking thin!</b>}
      {props.bmi < 22.9 && props.bmi >= 18.5 && <b>You have good body!</b>}
      {props.bmi >= 23 && props.bmi < 25 && <b>You fat!!</b>}
      {props.bmi >= 25 && <b>You fucking fat!!</b>}
    </div>
  );
};

function App() {
  const [bmi, setBmi] = useState({
    weight: 0,
    height: 0,
  });
  const [result, setResult] = useState(0);

  const handleChange = (e) => {
    setBmi({
      ...bmi,
      [e.target.name]: e.target.value,
    });
  };

  console.log(bmi);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { weight, height } = bmi;

    if (weight == "" || height == "") {
      alert("Cân nặng hoặc chiều cao không được để trống!");
      return;
    }

    // BMI = weight(kg) / (height * height(m))
    const yourBmi = weight / (height * height);
    setResult(yourBmi.toFixed(1));
  };
  return (
    <div className="container">
      <h1 className="heading">Body Mass Index</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-group">
          <InputField
            type="number"
            placeholder="Weight"
            value={bmi.weight || ""}
            onChange={handleChange}
            unit="kg"
            name="weight"
          />
          <InputField
            type="number"
            placeholder="Height"
            value={bmi.height || ""}
            onChange={handleChange}
            unit="m"
            name="height"
          />
        </div>
        <p>
          Your BMI: <b>{result}</b>
        </p>
        <Comment bmi={result} />
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

ReactDOM.render(<App />, app);
