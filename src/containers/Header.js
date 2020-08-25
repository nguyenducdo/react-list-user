import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header className="shadow-sm d-flex align-items-center" style={{height: 50}}>
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <a href="/">Trang chủ</a>
                        </div>
                        <div className="col-10 d-flex justify-content-end">
                            <a href="/login">Đăng nhập</a>
                            <a href="/login">Đăng xuất</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;