import React from "react";
import FormatName from "../helpers/formatName";
import { Link } from "react-router-dom";

/* Receives an array of user IDs, and an array of user objects, returning
a list of Link elements for each user who has an ID matched to the array. */
function UserHistory({history, users}){

	if(!history){
		return (
			<div
				className="ds_error-summary"
				id="error-summary"
				aria-labelledby="error-summary-title"
				role="alert"
			>
				<h2 className="ds_error-summary__title" id="error-summary-title">
					No user history available
				</h2>

				<p>It appears you have not yet browsed any users, or your previous
					history could not be retrieved.

					We apologise for any inconvenience.
				</p>

				<ul className="ds_error-summary__list">
					<li>
						<Link to="/">Return to User Directory</Link>
					</li>
				</ul>
			</div>
		);
	}

    const recentlyViewed = history.toReversed().map((user, index) => {
        const userURL = user && "/users/" + user;

        return (
			<li>
				<Link to={userURL}>
					<div className="user-history-item" key={index}>
						<img
							src={users[user].picture.thumbnail}
							alt={`${users[user].name.first}-history`}
						/>
						<FormatName
							name={users[user].name}
							displayTitle={false}
                            tag={'p'}
						/>
					</div>
				</Link>
			</li>
		);
    })

    return (
        <ul>{recentlyViewed}</ul>
    )

}

export default UserHistory;