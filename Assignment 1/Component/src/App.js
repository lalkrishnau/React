import './App.css';
import * as data from './data';
import UserTable from './components/UserTable';
import UserList from './components/UserList';

let users = data.users;

function App() {
  return (
    <div className='container'>
      <h1>Components Assignment</h1>
      <UserTable users = {users}/>
      <hr/>
      <UserList users = {users}/>

    </div>
  );
}

export default App;
