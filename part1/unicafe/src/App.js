import { useState } from "react";

const StatisticLine = (props) => {
  return (
    <tr>
        <td>{props.text} {props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <>
    <table>
      <thead>Statistics</thead>
      <tbody>
        <StatisticLine text="Good" value={props.good} />
        <StatisticLine text="Neutral" value={props.neutral} />
        <StatisticLine text="Bad" value={props.bad} />
        {" "}
        <StatisticLine text="All" value={props.all} />
        <StatisticLine text="Average" value={props.average} />
        <StatisticLine text="Positive" value={props.positive + " %"} />
      </tbody>
    </table>
    </>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + bad + neutral;
  const positive = (good / all) * 100;
  const average = (good - bad) / all;

  const handleGoodClick = () => {
    const addGoodClick = good + 1;
    setGood(addGoodClick);
  };

  const handleNeutralClick = () => {
    const addNeutralClick = neutral + 1;
    setNeutral(addNeutralClick);
  };

  const handleBadClick = () => {
    const addBadClick = bad + 1;
    setBad(addBadClick);
  };

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <h2>Statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>
//     </div>
//   );
// }

// export default App

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   console.log("rendering with counter value", counter);

//   const increaseByOne = () => {
//     console.log("increasing, value before", counter);
//     setCounter(counter + 1);
//   };

//   const decreaseByOne = () => {
//     console.log("decreasing, value before", counter);
//     setCounter(counter - 1);
//   };

//   const setToZero = () => {
//     console.log("resetting to zero, value before", counter);
//     setCounter(0);
//   };
//   return (
//     <div>
//       <Display counter={counter} />
//       <Button handleClick={increaseByOne} text="plus" />
//       <Button handleClick={setToZero} text="zero" />
//       <Button handleClick={decreaseByOne} text="minus" />
//     </div>
//   );
// };
// export default App;

// const Display = ({counter}) =>
//    <div>{counter}</div>;

// const Button = ({handleClick, text}) =>
//   <button onClick={handleClick}>
//   {text}
//   </button>

// const App = () => {
//   const name = "Peter";
//   const age = 10;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   );
// };

// export default App;

// const Hello = ({ name, age}) => {
//   const bornYear = () => new Date().getFullYear() - age

//   return(
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }
