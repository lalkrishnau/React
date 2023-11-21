import React from 'react';

const UserTable = (props) => {
  let{users}=props

    function renderUsers(){
        return users.map(user=>{
            return(
                <tr key={user.id}>
                  <td>{user.id}</td>  
                  <td>{user.name}</td>  
                  <td>{user.email}</td>
                  <td>{user.age}</td>  
                </tr>
            )
        })


    }

  return (
    <div>
     <table className='table table-hover'>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </thead>
                <tbody>
                  {renderUsers()}
                </tbody>
            </table>
    </div>
  );
};

export default UserTable;