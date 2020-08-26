import React from 'react';

export default function({user, doEdit}) {
    console.log(user);
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
                    ? <a href="/users">List user</a>
                    : null
            }
        </div>
    );
}