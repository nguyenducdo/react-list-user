import React, {useCallback, useState} from 'react';
import {useSelector} from "react-redux";

import UserInfo from "../components/UserInfo";
import UserInput from "../components/UserInput";

export default function() {
    const [isEdit, changeEdit] = useState(false);

    const user = useSelector(state => state.User);

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