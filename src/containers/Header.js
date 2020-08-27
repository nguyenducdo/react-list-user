import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {logout} from "../actions/UserAction";

export default function() {
    const user = useSelector(state => state.User);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <header className="shadow-sm d-flex align-items-center" style={{height: 50}}>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <button type="button" className="btn btn-link p-0" onClick={() => history.push("/")}>Trang chủ</button>
                    </div>
                    <div className="col-10 d-flex justify-content-end">
                        {
                            !user
                                ?   <button type="button" className="btn btn-link p-0" onClick={() => history.push("/login")}>Đăng nhập</button>
                                :   <div className="d-flex align-items-center">
                                        <span>Hello {user.username}, </span>
                                        <button type="button" className="btn btn-link p-0" onClick={() => dispatch(logout())}>Đăng xuất</button>
                                    </div>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}
