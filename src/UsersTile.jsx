import React, { useContext } from 'react'
import { UserTileItem } from './UserTileItem';
import "./UsersTile.css"
import { UserContext } from './App';

export const UsersTile = () => {
  const users = useContext(UserContext);
 console.log(users[0])
 
    return (
        <div className="UsersTile-container">
            {users.map(user => <UserTileItem className="UsersTile-item" key={user.id.value} user={user} />)}
        </div>
    )
}
