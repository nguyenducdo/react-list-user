import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {login} from "../actions/UserAction";
import {useHistory} from 'react-router-dom';

export default function () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const onSubmit = useCallback(
    //     e => {
    //         e.preventDefault();
    //         console.log("username: ", username);
    //         console.log("password: ", password);
    //     }, [username, password]);

    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("username: ", username);
        console.log("password: ", password);
        let loggedAccount = {
            id: 1,
            username,
            role: 'member'
        };
        dispatch(login(loggedAccount));
        history.push("/");
    }

    return (
        <div className="container">
            <div className="mx-auto" style={{width: 300}}>
                <h3 className="text-center my-5">Đăng nhập</h3>
                <form onSubmit={onSubmit}>
                    <div className="d-flex flex-column">
                        <input type="text" className="form-control mb-3" id="username" name="username"
                               placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
                        <input type="password" className="form-control mb-3" id="password" name="password"
                               placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                        <button type="submit" className="btn btn-primary">Đăng nhập</button>
                    </div>
                </form>
            </div>
        </div>
    );
}