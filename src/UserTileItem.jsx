import React from 'react'
import { useHistory } from 'react-router-dom';
import "./UserTileItem.css"


export const UserTileItem = ({user}) => {
    const {name} = user;
    const fullName = `${name.title} ${name.first} ${name.last}`

    let history = useHistory();

  function handleClick(userData) {
    history.push("/userdetails/"+userData.email);
  }
    return (
        <div className="UserTileItem-Profile">
            <img className="UserTileItem-ProfilePicture" src={user.picture.large} alt="User Profile Pic" />
            <p>{fullName}</p>
            <p>{user.email}</p>            
            <button className="UserTileItem-Details" onClick={() => handleClick(user)}>User Details</button>    
        </div>
    )
}
