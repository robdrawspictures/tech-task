import React from "react";
import FormatName from "../helpers/formatName";
import FormatAddress from "../helpers/formatAddress";
import { Link } from "react-router-dom";

const User = ({ user, index }) => {

	const userURL = user && "/users/" + index;

	return (
		<>
			<div className="user-card">
				<div className="user-card-info">
					<FormatName
						name={user.name}
						displayTitle="false"
						url={userURL}
					/>
					<div className="ds_card__media">
						<div className="ds_aspect-box">
							<img
								alt={user.name.first}
								aria-hidden="true"
								className="ds_aspect-box__inner"
								src={user.picture.large}
							/>
						</div>
					</div>
					<div className="user-card-details">
						<div className="ds_contact-details">
							<h2 className="ds_contact-details__title">
								Contact
							</h2>
							<address>
								<dl>
									<div className="ds_contact-details__item">
										<dt>Email</dt>
										<dd translate="no">
											<a href={`mailto:${user.email}`}>
												{user.email}
											</a>
										</dd>
									</div>
									<div className="ds_contact-details__item">
										<dt>Phone</dt>
										<dd>{user.phone}</dd>
									</div>
									<div className="ds_contact-details__item">
										<dt>National Insurance number</dt>
										<dd>{user.id.value}</dd>
									</div>
								</dl>
							</address>
						</div>
						<details className="ds_details">
							<summary className="ds_details__summary">
								View Address
							</summary>
							<div className="ds_details__text">
								<FormatAddress user={user} isDetail={false} />
							</div>
						</details>
					</div>
				</div>
				<Link to={userURL} className="ds_button">
					View Details
				</Link>
			</div>
		</>
	);
};

export default User;

        <li class="ds_card  ds_card--has-hover">
			<div class="ds_card__media">
				<div class="ds_aspect-box">
					<img
						alt=""
						aria-hidden="true"
						class="ds_aspect-box__inner"
						src="/binaries/content/gallery/designsystem/examples/processedcoo-jpg"
					/>
				</div>
			</div>

			<article class="ds_category-item  ds_card__content">

				<p class="ds_category-item__summary">
					Guidance for farming, animal health, agriculture and food
					businesses in Scotland.
				</p>
			</article>
		</li>;
