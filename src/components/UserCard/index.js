import React from "react";
import './style.css';
import PropTypes from 'prop-types';

class UserCard extends React.Component {
    
    render() {
        const {user: {name: {first, last}, email, picture: {large}}} = this.props;
        return (
            <div className='card-wrapper'>
                <div className='image-wrapper'>
                     <img src={large} className='avatar'/>
                </div>
                <h2>{first} {last}</h2>
                <p className='desc'>{email}</p>
                <button>Connect</button>
            </div>
        )
    }
}


UserCard.defaultProps ={
    user:{
        name:{
            first: 'Anonim',
            last:'Anon'
        },
        email:'',
        picture:{
            large:''
        }
    }
}


UserCard.propTypes ={
    name: PropTypes.shape({
        first:PropTypes.string.isRequired,
        last: PropTypes.string.isRequired
    }).isRequired,
    email:PropTypes.string.isRequired,
    picture:PropTypes.shape({
        large:PropTypes.string.isRequired
    }).isRequired
}.isRequired


export default UserCard;