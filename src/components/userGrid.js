import React from "react";
import User from "./user";
import UserHistory from "./userHistory";

function UserGrid({users, userHistory}){

    let recentlyViewed = userHistory;

    const UserList = users.map((user, index) => {
        return (
			<li key={index}>
				<User user={user} index={index}/>
			</li>
		);
    })

    return (
		<>
			<div className="display-container">
				<div className="user-display">
					<ul className="user-list">{UserList}</ul>
				</div>
				{userHistory.length > 0 && (
					<div className="recently-viewed">
						<h2>Recently Viewed</h2>
						<UserHistory history={recentlyViewed} users={users} />
					</div>
				)}
			</div>
		</>
	);
}

export default UserGrid