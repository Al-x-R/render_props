import React, {Component} from 'react';
import PropTypes from 'prop-types'

class DataProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            error: null,
            data: [],
        }
    }

    loadData = () => {
        const {getData} = this.props
        this.setState({
            isFetching: true,
        })
        getData().then(data => {
            this.setState({
                data,
                isFetching: false
            })
        }).catch(error => {
            this.setState({
                error,
                isFEtching: false,
            })
        })
    }

    componentDidMount() {
        this.loadData()
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

DataProvider.propTypes = {
    getData: PropTypes.func.isRequired

}

export default DataProvider;