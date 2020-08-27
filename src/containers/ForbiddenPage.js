import React from 'react';
import {useHistory} from 'react-router-dom';

export default function () {
    const history = useHistory();

    return (
        <div className="container mt-5">
            <h3>Not have permission</h3>
            <div className="d-flex align-items-center">
                <span>Back to </span>
                <button type="button" className="btn btn-link p-0" onClick={() => history.push("/")}>homepage</button>
            </div>
        </div>
    );
}