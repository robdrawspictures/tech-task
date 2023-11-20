import React from "react";
import FormatName from "../helpers/formatName";
import { Link } from "react-router-dom";

function UserHistory({history, users}){

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