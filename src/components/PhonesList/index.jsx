import React from 'react';
import PropTypes from "prop-types";

function PhonesList(props) {

    const {phones} = props

    return (
        <div>
            <ul>
                {
                    phones.map(phone => {
                        return <li key={phone.id}>{phone.brand} {phone.model}</li>
                    })
                }
            </ul>
        </div>
    );
}

PhonesList.propTypes = {
    phones: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        model: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
    }))
}

export default PhonesList;