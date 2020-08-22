import React, {Component} from 'react';

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            users: [],
            error: null,
        }
    }

    getUsers = () => {
        this.setState({
            isFetching: true,
        })
        fetch('./users.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    users: data,
                    isFetching: false,
                })
            }).catch(error => {
            this.setState({
                error,
                isFetching: false,
            })
        })
    }

    componentDidMount() {
        this.getUsers()
    }

    render() {
        const {users, isFetching, error} = this.state

        if (error) {
            return alert(error.message)
        }
        if (isFetching) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <ul>
                    {
                        users.map(user => {
                            return <li key={user.id}>{user.firstName} {user.lastName}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default UsersList;