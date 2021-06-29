import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from './App';

import "./UserDetails.css"

export const UserDetails = (props) => {
    const users = useContext(UserContext);
    const {email} = useParams();
    const user = users.find(user => user.email === email)
    console.log(user)
    const {name} = user;
    const fullName = `${name.title} ${name.first} ${name.last}`
    return (
        <div>
            <h1 className="UserDetails-heading">User Details - ({fullName})</h1>
            <div className="UserDetails-container">
                <div className="UserDetails-ProfilePictureContainer">
                <img className="UserDetails-ProfilePicture" src={user.picture.large} alt="User Profile Pic" />
                </div>
            
            <p>Gender - {user.gender}</p>
            <p>Email - {user.email}</p>
            <p>Mobile - {user.cell}</p>
            <p>Nationality - {user.nat}</p>
            <p>Country - {user.location.country}</p>
            <p>City - {user.location.city}</p>
            <p>Postal Code - {user.location.postcode}</p>
            <p>Street Address - {user.location.street.number}, {user.location.street.name}</p>
            </div>
            


        </div>
    )
}
