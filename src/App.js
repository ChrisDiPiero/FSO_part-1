import React, { useState } from 'react'

//start 1.6 - 1.14
const StatisticLine = props => <p>{props.text}: {props.value}</p>

const Statistics = (props) => {
  if(!props.all) {
    return(
      <div>
        No stats for you.
      </div>
    )
  }
  return(
    <div>
      <h2>Statistics</h2>
      <StatisticLine text="Good"  value={props.good} />
      <StatisticLine text="Neutral"  value={props.neutral} />
      <StatisticLine text="Bad"  value={props.bad} />
      <StatisticLine text="All" value={props.all} />
      <StatisticLine text="Average" value={( props.good - props.bad ) / props.all} />
      <StatisticLine text="Positive" value={props.good / props.all} />
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
    setAll(all +1)
  }
  const neutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all +1)
  }
  const badClick = () => {
    setBad(bad + 1)
    setAll(all +1)
  }

  return(
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={goodClick} text="good" />
      <Button handleClick={neutralClick} text="neutral" />
      <Button handleClick={badClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

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
//       <button onClick={handleLeftClick}>
//         left
//       </button>
//       <button onClick={handleRightClick}>
//         right
//       </button>
//       {right}
//       <p>{allClicks.join(' ')}</p>
//     </div>
//   )
// }

// export default App;

// const Display = ({ counter }) => <div>{counter}</div>


// const Button = ({ onClick, text }) => {
//   return (
//     <button onClick={onClick}>
//       {text}
//     </button>
//   )
// }

// const [ counter, setCounter ] = useState(0);


// const increaseByOne = () => setCounter( counter + 1 );
// const decreaseByOne = () => setCounter( counter - 1 );
// const setToZero = () => setCounter(0);

// return (
//   <div>
//     <Display counter={counter}/>
//     <Button 
//       onClick={increaseByOne}
//       text='plus'
//     />
//     <Button 
//       onClick={setToZero}
//       text='zero'
//     />
//     <Button 
//       onClick={decreaseByOne}
//       text='minus'
//     />
//   </div>
// )

// const Header = (props) => {
//   console.log(props);
//   return(
//     <h1>{props.course.name}</h1>
//   )
// }

// const Part = (props) => {
//   return(
//     <p>{props.part} {props.exercises}</p>
//   )
// }

// const Content = (props) => {
//   return(
//     <div>
//       <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
//       <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
//       <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
//     </div>
//   )
// }

// const Total = (props) => {
//   return(
//     <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </div>
//   )
// }

