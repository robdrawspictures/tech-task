import React from "react";
import User from "./user";
import UserHistory from "./userHistory";

function UserGrid({users, userHistory}){

    let recentlyViewed = userHistory;

    const UserList = users.map((user, index) => {
        return (
			<li className="ds_card  ds_card--has-hover" key={index}>
				<User user={user} index={index} />
			</li>
		);
    })

    return (
		<>
			<main className="ds_layout  ds_layout--article">
				<div className="ds_layout__content">
					<ul className="ds_category-list  ds_category-list--grid  ds_category-list--narrow">
						{UserList}
					</ul>
				</div>
					<div className="ds_layout__sidebar">
						<h2>Recently Viewed</h2>
						{userHistory.length !== 0 ? <UserHistory history={recentlyViewed} users={users} /> : <p>User history empty</p>}
					</div>
			</main>
		</>
	);
}

export default UserGrid