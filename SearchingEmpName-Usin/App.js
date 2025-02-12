import './App.css';
import {Users} from "./users";
import {useState} from "react";
function App() {
  const [query, setQuery] = useState("");
  console.log(query)
  console.log(Users.filter(user=>user.first_name.toLowerCase().includes("gowtham")))
  return (
    <div className="App">
      <input type="text"  
      placeholder="Search Employee" 
      className="search" 
      onChange={e=>setQuery(e.target.value)}
      />
      <ul className="employee-list">
        {Users.filter(user=>user.first_name.toLowerCase().includes(query)).map(user=>(
          <li key={user.id} className ="listItem">{user.first_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
