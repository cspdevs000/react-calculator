import { useReducer } from "react";
import DigitButton from "./DigitButton";
import './styles.css';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
}

function reducer(state, { type, payload }) {
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  )

  return (
    <div className="calc-grid">
      <div className="output">
        <div className="prev-operand">
          {previousOperand} {operation}
        </div>
        <div className="current-operand">
          {currentOperand}
        </div>
      </div>
      <button className="span-two">AC</button>
      <button className="">DEL</button>
      <DigitButton digit="÷" dispatch={dispatch} />
      <button className="">1</button>
      <button className="">2</button>
      <button className="">3</button>
      <button className="">*</button>
      <button className="">4</button>
      <button className="">5</button>
      <button className="">6</button>
      <button className="">+</button>
      <button className="">7</button>
      <button className="">8</button>
      <button className="">9</button>
      <button className="">-</button>
      <button className="">.</button>
      <button className="">0</button>
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
