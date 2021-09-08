import React, { useState } from 'react'

//start 1.6 - 1.14
const Display = props => <span>{props.value}</span>

// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )

const App = () => {

  const [goodCount, setGoodCount] = useState(0)
  const [neutralCount, setNeutralCount] = useState(0)
  const [badCount, setBadCount] = useState(0)

  // const setToGood = newValue => { setGoodCount(newValue) }
  // const setToNeutral = newValue => {setNeutralCount(newValue) }
  // const setToBad = newValue => { setBadCount(newValue) }

  return(
    <div>
      <h2>give feedback</h2>
      <button onClick={ () => setGoodCount(goodCount + 1) }>good</button>
      <button onClick={ () => setNeutralCount(neutralCount + 1) }>neutral</button>
      <button onClick={ () => setBadCount(badCount + 1) }>bad</button>
      <h2>Statistics</h2>
      <p>good: <Display value={goodCount}/></p>
      <p>neutral: <Display value={neutralCount}/></p>
      <p>bad: <Display value={badCount}/></p>
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

