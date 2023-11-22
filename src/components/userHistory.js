import React from "react";
import FormatName from "../helpers/formatName";
import { Link } from "react-router-dom";

/* Receives an array of user IDs, and an array of user objects, returning
a list of Link elements for each user who has an ID matched to the array. */
function UserHistory({history, users}){

    const recentlyViewed = history.toReversed().map((user, index) => {
        const userURL = user && "/users/" + user["userId"];

        return (
			<li key={index}>
				<Link to={userURL}>
					<div className="user-history-item">
						<img
							src={users[user["userId"]].picture.thumbnail}
							alt={`${users[user["userId"]].name.first}-history`}
						/>
						<FormatName
							name={users[user["userId"]].name}
							displayTitle={false}
							tag={"p"}
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