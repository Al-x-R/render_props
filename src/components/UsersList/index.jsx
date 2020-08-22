import React from 'react';
import PropTypes from "prop-types";

function UsersList(props) {
    const {users} = props

    return (
        <div>
            <h1>Users</h1>
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

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        lastName: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
    })).isRequired,
}

export default UsersList;