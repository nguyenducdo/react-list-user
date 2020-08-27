import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';

export default function({user, doEdit}) {
    const history = useHistory();
    const location = useLocation();
    console.log("path: ", location.pathname);

    return (
        <div className="mt-5" style={{width: 500}}>
            <div className="row mb-3">
                <label className="col-4">id: </label>
                <span className="col-8">{user.id}</span>
            </div>
            <div className="row mb-3">
                <label className="col-4">username: </label>
                <span className="col-8">{user.username}</span>
            </div>
            <div className="row mb-3">
                <label className="col-4">role: </label>
                <span className="col-8">{user.role}</span>
            </div>
            <button type="button" className="btn btn-link px-0" onClick={doEdit}>Chinh sua</button>
            <br/>
            {
                user.role === 'admin'
                    ? <button className="btn btn-link px-0" onClick={() => history.push("/users")}>List user</button>
                    : null
            }
        </div>
    );
}