import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";
import ForbiddenPage from "./ForbiddenPage";
export default function({children, ...rest}) {
    const user = useSelector(state => state.User);
    console.log("admin route user: ", user);
    return (
        <Route {...rest}
            render={
                ({location}) => {
                    if (!user || user.role !== 'admin') {
                        return (
                            <ForbiddenPage />
                        );
                    } else {
                        return children;
                    }
                }
            }
        />
    );
}