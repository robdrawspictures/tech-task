import React from "react";
import { Link } from "react-router-dom";

function NotFound(){
    return (
		<>
			<header class="ds_page-header">
				<span class="ds_page-header__label  ds_content-label">
					User Directory
				</span>
				<h1 class="ds_page-header__title">Error</h1>

				<dl class="ds_page-header__metadata  ds_metadata">
					<div class="ds_metadata__item">
						<dt class="ds_metadata__key">Last updated</dt>
						<dd class="ds_metadata__value">A moment ago</dd>
					</div>
				</dl>
			</header>
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
					Page not found
				</h2>

				<p>
					The requested page could not be found, or is no longer
                    available.
				</p>
				<p>We apologise for any inconvenience.</p>

				<ul className="ds_error-summary__list">
					<li>
						<Link to="/">Return to User Directory</Link>
					</li>
				</ul>
			</div>
		</>
	);
}

export default NotFound;