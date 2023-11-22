import React from "react";
import { Link } from "react-router-dom";
import FormatName from "../helpers/formatName";

function UserHistoryDetail({history, users}){
    	if (!history || history.length === 0) {
			return (
				<div
					className="ds_error-summary"
					id="error-summary"
					aria-labelledby="error-summary-title"
					role="alert"
				>
					<h2
						className="ds_error-summary__title"
						id="error-summary-title"
					>
						No user history available
					</h2>

					<p>
						It appears you have not yet browsed any users, or your
						previous history could not be retrieved.
					</p>
					<p>We apologise for any inconvenience.</p>

					<ul className="ds_error-summary__list">
						<li>
							<Link to="/">Return to User Directory</Link>
						</li>
					</ul>
				</div>
			);
		}

        const recentlyViewed = history.toReversed().map((user, index) => {
            const userURL = user && "/users/" + user["userId"];
            const currentUser = users[user["userId"]];
            const accessDate = user["lastAccess"];

            return (
				<li className="ds_category-item" key={index}>
					{/* <img
						className="ds_aspect-box--square"
						src={currentUser.picture.thumbnail}
						alt={`${currentUser.name.first}-history`}
					/> */}
					<Link to={userURL}>
						<FormatName
							name={currentUser.name}
							displayTitle={false}
						/>

						<p class="ds_category-item__summary">
							Last Accessed: {accessDate}
						</p>
					</Link>
				</li>
			);
        });

        return (
            <nav aria-label="Category navigation">
                <ul className="ds_category-list">{recentlyViewed}</ul>
            </nav>
        );
}

export default UserHistoryDetail;