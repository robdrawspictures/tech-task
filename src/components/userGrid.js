import React from "react";
import User from "./user";

function UserGrid({users}){
    // console.log('-----USERS-----');
    // console.log(users.users);

    const UserList = users.map((user, index) => {
        return (
			<div key={index}>
				<User user={user} index={index}/>
			</div>
		);
    })

    return (
		<>
			<div className="user-display">
				<h1>Users</h1>
				<ul className="user-list">{UserList}</ul>
			</div>
		</>
	);
}

export default UserGrid