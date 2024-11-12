import './App.css'

function App() {
  let data
  fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((json) => console.log(json));

  return (
    <>
     <>
     hiii
     </>
    </>
  )
}

export default App
