import React from 'react';

function User(props) {
    return <div>{props.name}</div>;
}

function UserList(props) {
    return (
        <div>
            {props.users.map((user, index) => (
                <User key={index} name={user.name} />
            ))}
        </div>
    );
}

export default UserList;