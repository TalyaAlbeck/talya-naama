    
export function fetchUsers(data, setData) {
  fetch("http://localhost:3000/users")
  .then((res) => res.json())
  .then((dat) => {setData(dat);})
}
