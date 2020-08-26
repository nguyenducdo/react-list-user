import React, {useState, useCallback} from 'react';

export default function({user, cancelEdit}) {
    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState('');

    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            console.log("username: ", username);
            console.log("password: ", password);
        },
        [username, password]
    );

    return (
        <div className="mt-5" style={{width: 500}}>
            <form onSubmit={onSubmit}>
                <div className="row mb-3">
                    <label className="col-4">id: </label>
                    <span className="col-8">{user.id}</span>
                </div>
                <div className="row mb-3">
                    <label htmlFor="username" className="col-4">username: </label>
                    <input type="text" className="col-8 form-control" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="row mb-3">
                    <label htmlFor="password" className="col-4">password: </label>
                    <input type="password" className="col-8 form-control" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary px-3 mr-3">Cap nhat</button>
                <button type="button" className="btn btn-outline-secondary" onClick={cancelEdit}>Huy</button>
            </form>
        </div>
    );
}