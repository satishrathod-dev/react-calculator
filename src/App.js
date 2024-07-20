import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");

  const handleCalculate = (operation) => {
    if (!num1 || !num2) {
      setMessage(`Error! ${!num1 ? "Num1" : "Num2"} Cannot Be Empty`);
      setResult("");
      return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setMessage(`Error! Invalid input. Please enter valid input`);
      setResult("");
      return;
    }

    let calResult;
    switch (operation) {
      case "+":
        calResult = number1 + number2;
        break;

      case "-":
        calResult = number1 - number2;
        break;

      case "*":
        calResult = number1 * number2;
        break;

      case "/":
        calResult = number1 / number2;
        break;

      default:
        return;
    }
    setResult(calResult);
    setMessage("Success!");
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="inner-container">
        <input
          className="input-container"
          type="text"
          placeholder="Num 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          className="input-container"
          type="text"
          placeholder="Num 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <div className="buttons">
          <button onClick={() => handleCalculate("+")}>+</button>
          <button onClick={() => handleCalculate("-")}>-</button>
          <button onClick={() => handleCalculate("*")}>*</button>
          <button onClick={() => handleCalculate("/")}>/</button>
        </div>
      </div>
      {message && (
        <p className={message === "Success!" ? "success" : "error"}>
          {message}
        </p>
      )}
      {result && <div className="result">Result - {result}</div>}
    </div>
  );
}

export default App;
