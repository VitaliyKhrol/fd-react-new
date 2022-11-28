import React, { Component } from 'react';

class UserLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isFetching: true,
            error: null
        }
    }

    componentDidMount() {
        this.props.loadData()
        .then((data) => {
            this.setState({
                data
            })
        })
        .catch((error)=>{
            this.setState({
                error
            })
        })
        .finally(()=>{
            this.setState({
                isFetching: false
            })
        })
    }

    render() {
      const layout = this.props.renderThis(this.state);
      return layout;
    }
}

export default UserLoader;