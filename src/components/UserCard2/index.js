import React from "react";
import './style.scss';
import PropTypes from 'prop-types';

function UserCard2 (props) {
 
        const {user: {name: {first, last}, email, picture: {large}}} = props;
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


UserCard2.defaultProps ={
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


UserCard2.propTypes ={
    name: PropTypes.shape({
        first:PropTypes.string.isRequired,
        last: PropTypes.string.isRequired
    }).isRequired,
    email:PropTypes.string.isRequired,
    picture:PropTypes.shape({
        large:PropTypes.string.isRequired
    }).isRequired
}.isRequired


export default UserCard2;