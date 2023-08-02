import { useState, useEffect } from 'react'
import Items from './components/Items'
import './App.css'

function App() {
  const [people, setPeople] = useState([])
// Component did mount
  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
    .then(res => res.json())
    .then((data) => setPeople(data.results))
  }, [])

  // useEffect(() => {
  //   console.log(people)
  // }, [people])
  return (
    <>
     <Items items={people}/>
    </>
  )
}

export default App
