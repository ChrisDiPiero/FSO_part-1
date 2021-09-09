import React, { useState } from 'react'

//start 1.6 - 1.14
const Display = props => <span>{props.value}</span>

// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(1)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const update = (review) => {


    switch (review) {
      case 'good':
        setGood(good + 1)
        break
      case 'neutral':
        setNeutral(neutral + 1)
        break
      case 'bad':
        setBad(bad + 1)
        break
      default:
        return
    }

    calculateAverage()
    calculatePositive()
  }

  const calculateAverage = () => {
    console.log(all)
    const calculate = (good - bad) / all 
    setAverage( calculate )
  }

  const calculatePositive = () => {
    const calculate = good / all
    setPositive( calculate )
  }

  // const setToGood = newValue => { setGoodCount(newValue) }
  // const setToNeutral = newValue => {setNeutralCount(newValue) }
  // const setToBad = newValue => { setBadCount(newValue) }

  return(
    <div>
      <h2>Give Feedback</h2>
      <button onClick={ () => { setAll(all + 1) 
                                update('good') } 
                      }>good</button>
      <button onClick={ () => { setAll(all + 1) 
                                update('neutral') }              
                        }>neutral</button>
      <button onClick={ () => { setAll(all + 1)  
                                update('bad') }
                        }>bad</button>

      <h2>Statistics</h2>
      <p>Good: <Display value={good}/></p>
      <p>Neutral: <Display value={neutral}/></p>
      <p>Bad: <Display value={bad}/></p>
      <p>All: <Display value={all - 1}/></p>
      <p>Average: <Display value={average}/></p>
      <p>Positive: <Display value={positive}/></p>
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

