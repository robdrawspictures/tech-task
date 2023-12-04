import React from "react";
import { Link } from "react-router-dom";
import FormatName from "../helpers/formatName";

function UserHistoryDetail({history, users}){

    	let date = new Date();
		let lastUpdated = date.toLocaleDateString();

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

						<p className="ds_category-item__summary">
							Last Accessed: {accessDate}
						</p>
					</Link>
				</li>
			);
        });

        return (
            <>
                <header className="ds_page-header">
                    <span className="ds_page-header__label  ds_content-label">
                        User Directory
                    </span>
                    <h1 className="ds_page-header__title">
                        User History
                    </h1>

                    <dl className="ds_page-header__metadata  ds_metadata">
                        <div className="ds_metadata__item">
                            <dt className="ds_metadata__key">Last updated</dt>
                            <dd className="ds_metadata__value">{lastUpdated}</dd>
                        </div>
                    </dl>
                </header>
                {(!history || history.length === 0) ?
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
                :
                <nav aria-label="Category navigation">
                    <ul className="ds_category-list">{recentlyViewed}</ul>
                </nav>
                }
            </>
        );
}

export default UserHistoryDetail;