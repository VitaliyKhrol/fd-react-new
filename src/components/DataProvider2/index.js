import React, { Component } from 'react';

class DataProvider2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            error: null,
            isFetching: true,
        }
    }

    componentDidMount() {
        this.props.loadData()
            .then((data) => {
                this.setState({
                data: data.results
                })
               
            })
            .catch((error) => {
                this.setState({
                    error
                })
            })
            .finally((isFetching) => {
                this.setState({
                    isFetching: false
                })
            })

    }

    render() {
        return this.props.children(this.state);
    }
}

export default DataProvider2;
