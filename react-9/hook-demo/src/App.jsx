import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useReducer,
} from "react";
import "./App.css";

const AppContext = React.createContext({});

// AppContext.Provider value = {{}}
// AppContext.Consumer => useContext(AppContext) value

function App() {
  return (
    <div className="App">
      <Child count={count} setCount={setCount} />
    </div>
  );
}

export default App;
