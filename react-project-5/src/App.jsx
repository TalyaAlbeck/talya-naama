import { useEffect, useState } from 'react';
import './App.css'
import LogIn from './components/LogIn'

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
      fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((dat) => {setData(dat); console.log(data)})
  }, [])

  return (
    <>
     <h1>{!data ? "loading..." : data[0].name}</h1>
     {/* <LogIn /> */}
    </>
  )
}

export default App
