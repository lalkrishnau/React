import React from 'react';

const UserList = (props) => {

    let {users} = props

    function renderUserList(users) {
        return users.map(user=>{
            return (
                <ul className='list' key={user.id}>
                    <li>{JSON.stringify(user)}</li>
                </ul>
            )
        })
        
    }

    return (
        <div>
            {renderUserList(users)}
        </div>
    );
};

export default UserList;