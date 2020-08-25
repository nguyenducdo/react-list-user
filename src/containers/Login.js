import React, {Component} from 'react';

class Login extends Component {
    componentDidMount() {
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="mx-auto" style={{width: 300}}>
                    <h3 className="text-center my-5">Đăng nhập</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="d-flex flex-column">
                            <input type="text" className="form-control mb-3" id="username" name="username" placeholder="Username"/>
                            <input type="password" className="form-control mb-3" id="password" name="password" placeholder="Password"/>
                            <button type="submit" className="btn btn-primary">Đăng nhập</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;