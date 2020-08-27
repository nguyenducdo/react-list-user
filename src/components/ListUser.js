import React from 'react';

export default function({listUser}) {
    return (
        <ul>
            {
                listUser.map((user, index) => <li key={index}>{user.id},{user.username},{user.role}</li>)
            }
        </ul>
    );
}