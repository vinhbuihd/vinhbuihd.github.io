import React, { useEffect, useState } from "react";
import "./App.css";

const FuncChild = (props) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Did Render");

    const timer = setTimeout(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("Will unmout");
      clearTimeout(timer);
    };
  }, [time]);

  // không có dependences thì sẽ chạy với mỗi lần render
  // [] : chỉ chạy 1 lần duy nhất
  // [value1, value2] chỉ chạy khi 1 trong 2 giá trị thay đổi

  return (
    <div className="child">
      <h2>Hello from Child</h2>
      <p>It's {time.toTimeString()}</p>
    </div>
  );
};

class App extends React.Component {
  constructor() {
    console.log("Constructor");
    super();

    this.state = {
      count: 1,
      shouldShow: true,
    };
  }

  hideClock = () => {
    this.setState({ shouldShow: !this.state.shouldShow });
  };

  render() {
    console.log("Render");
    return (
      <div>
        <h1>Life Cycle</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>

        {this.state.shouldShow && <FuncChild />}

        <button onClick={this.hideClock}>
          {this.state.shouldShow ? "Hide Clock" : "Show Clock"}
        </button>
      </div>
    );
  }
}

export default App;
