import React from "react";
import User from "./user";
import UserHistory from "./userHistory";

function UserGrid({users, userHistory}){

	let date = new Date();
	let lastUpdated = date.toLocaleDateString();
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
			<header className="ds_page-header">
				<span className="ds_page-header__label  ds_content-label">
					User Directory
				</span>
				<h1 className="ds_page-header__title">
					All Users
				</h1>

				<dl className="ds_page-header__metadata  ds_metadata">
					<div className="ds_metadata__item">
						<dt className="ds_metadata__key">Last updated</dt>
						<dd className="ds_metadata__value">{lastUpdated}</dd>
					</div>
				</dl>
			</header>
			<main className="ds_layout  ds_layout--article">
				<div className="ds_layout__content">
					<ul className="ds_category-list  ds_category-list--grid  ds_category-list--narrow">
						{UserList}
					</ul>
				</div>
				<div className="ds_layout__sidebar">
					<h2>Recently Viewed</h2>
					{userHistory.length !== 0 ? (
						<UserHistory history={recentlyViewed} users={users} />
					) : (
						<p>User history empty</p>
					)}
				</div>
			</main>
		</>
	);
}

export default UserGrid