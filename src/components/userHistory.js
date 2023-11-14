import React from "react";
import FormatName from "../helpers/formatName";
import { Link } from "react-router-dom";

function UserHistory({history, users}){

    console.log('----USER HISTORY----');
    console.log(history);

    const recentlyViewed = history.toReversed().map((user, index) => {
        const userURL = user && "/users/" + user;

        return (
            <Link to={userURL}>
			<div className="user-history-item" key={index}>
				<img
					src={users[user].picture.thumbnail}
					alt={users[user].name.first}
				/>
				<FormatName name={users[user].name} displayTitle={false} />
			</div>
            </Link>
		);
    })

    return (
        <ul>{recentlyViewed}</ul>
    )

}

export default UserHistory;