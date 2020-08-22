import React, {Component} from 'react';

class PhonesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isFetching: false,
            phones: []
        }
    }

    getPhones = () => {
        this.setState({
            isFetching: true
        })
        fetch('./phones.json')
            .then(res => res.json())
            .then(data => {
            this.setState({
                phones: data,
                isFEtching: false
            })
        }).catch(error => {
            this.setState({
                error,
                isFetching: false
            })
        })
    }

    componentDidMount() {
        this.getPhones()
    }

    render() {
        const {phones, isFetching, error} = this.state

        if(error) {
            return alert(error.message)
        }
        // if (isFetching) {
        //     return <div>Loading...</div>
        // }
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
}

export default PhonesList;