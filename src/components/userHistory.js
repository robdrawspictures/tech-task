import React from "react";
import { Link } from "react-router-dom";

/* Receives an array of user IDs, and an array of user objects, returning
a list of Link elements for each user who has an ID matched to the array. */
function UserHistory({history, users}){

    const recentlyViewed = history.toReversed().map((user, index) => {
        const userURL = user && "/users/" + user["userId"];
		const userName = users[user["userId"]].name;
		const formattedUser = userName.first + ' ' + userName.last;

        return (
			<li className="ds_category-item" key={index}>
				<Link to={userURL}>
							<img
								src={users[user["userId"]].picture.thumbnail}
								alt={`${
									users[user["userId"]].name.first
								}-history`}
							/>
							<p>{formattedUser}</p>
				</Link>
			</li>
		);
    })

    return (
        <ul className="ds_category-list">{recentlyViewed}</ul>
    )

}

export default UserHistory;