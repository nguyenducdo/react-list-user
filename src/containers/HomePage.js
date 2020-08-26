import React, {useState} from 'react';

import UserInfo from "../components/UserInfo";
import UserInput from "../components/UserInput";

export default function({user}) {
    const [isEdit, changeEdit] = useState(false);

    return (
        <div className="container mt-5">
            <h3 className="text-center">User info</h3>
            {
                isEdit
                    ? <UserInput user={user} cancelEdit={() => changeEdit(!isEdit)}/>
                    : <UserInfo user={user} doEdit={() => changeEdit(!isEdit)}/>
            }
        </div>
    );
}