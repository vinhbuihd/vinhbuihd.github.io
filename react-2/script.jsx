function Greeting() {
  return (
    <div className="greeting">
      <h1>Hello</h1>
      <p>Bạn có khỏe không?</p>
    </div>
  );
}

// class Greeting extends React.Component {
//   //   constructor() {}

//   render() {
//     return (
//       <div className="greeting">
//         <h1>Hello</h1>
//         <p>Bạn có khỏe không?</p>
//       </div>
//     );
//   }
// }

// class Button extends React.Component {
//   render() {
//     return <button onClick={this.props.click}>{this.props.label}</button>;
//   }
// }

const Button = (props) => (
  <button label={props.label} onClick={props.click}></button>
);

// function Button(props) {
//   return <button label={props.label} onClick={props.click}></button>;
// }

Greeting.displayName = "Xin chào";
App.displayName = "App tổng";
Button.displayName = "Nút";

Button.propTypes = {
  label: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

Button.defaultProps = {
  label: "Click me!",
  click: () => console.log("aaaaaaaaaaaaaaaa......."),
};

function App() {
  return (
    <div className="container">
      <Greeting />
      <Greeting />
      <Button />
      <Button label="Click me me me!" click={() => console.log(2222222)} />
      <Button label="Click me me me me!" click={() => console.log(333333333)} />
      <Button
        label="Click me me me me me!"
        click={() => console.log(444444444)}
      />
    </div>
  );
}

ReactDOM.render(<App />, app);
