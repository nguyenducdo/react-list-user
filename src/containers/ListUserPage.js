import React, {useState, useEffect} from 'react';
import ListUser from "../components/ListUser";

export default function() {
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        setListUser(
            [
                {
                    id: 1,
                    username: 'dodododo',
                    role: 'admin'
                },
                {
                    id: 2,
                    username: 'do2',
                    role: 'member'
                },
                {
                    id: 3,
                    username: 'do3',
                    role: 'member'
                }
            ]
        );
    }, []);

    return (
        <div className="container mt-5">
            <h3 className="text-center">List user</h3>
            <ListUser listUser={listUser}/>
        </div>
    );
}