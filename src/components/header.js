import React from "react";
import { Link } from "react-router-dom";
import headerIMG from "../assets/scottish-government.svg";

function Header({lastViewed}){

    console.log('HEADER: ' + lastViewed);

    let lastURL = '/users/' + lastViewed;

    return (
		<header
			className="ds_site-header  ds_site-header--gradient"
			role="banner"
		>
			<div className="ds_wrapper">
				<div className="ds_site-header__content">
					<div className="ds_site-branding">
						<a
							className="ds_site-branding__logo  ds_site-branding__link"
							href="/"
						>
							<img
								className="ds_site-branding__logo-image"
								src={headerIMG}
								alt="Scottish Government"
							/>
						</a>

						<div className="ds_site-branding__title">
							User Directory
						</div>
					</div>

					<div className="ds_site-header__controls">
						<label
							aria-controls="mobile-navigation"
							className="ds_site-header__control  js-toggle-menu"
							htmlFor="menu"
						>
							<span className="ds_site-header__control-text">
								Menu
							</span>
							<svg
								className="ds_icon  ds_site-header__control-icon"
								aria-hidden="true"
								role="img"
							>
								<use href="/assets/images/icons/icons.stack.svg#menu"></use>
							</svg>
							<svg
								className="ds_icon  ds_site-header__control-icon  ds_site-header__control-icon--active-icon"
								aria-hidden="true"
								role="img"
							>
								<use href="/assets/images/icons/icons.stack.svg#close"></use>
							</svg>
						</label>
					</div>

					<input
						className="ds_site-navigation__toggle"
						id="menu"
						type="checkbox"
					/>
					<nav
						id="mobile-navigation"
						className="ds_site-navigation  ds_site-navigation--mobile"
						data-module="ds-mobile-navigation-menu"
					>
						<ul className="ds_site-navigation__list">
							<li className="ds_site-navigation__item">
								<Link
									to="/"
									className="ds_site-navigation__link"
								>
									All Users
								</Link>
							</li>
							<li className="ds_site-navigation__item">
								<Link
									to="/user-history"
									className="ds_site-navigation__link"
								>
									User History
								</Link>
							</li>
							<li className="ds_site-navigation__item">
								<Link
									key={lastViewed}
									to={lastURL}
									className="ds_site-navigation__link"
								>
									Last User Viewed
								</Link>
							</li>
						</ul>
					</nav>

					<div
						className="ds_site-search  ds_site-header__search"
						data-module="ds-site-search"
					>
						<form role="search" className="ds_site-search__form">
							<label
								className="ds_label  visually-hidden"
								htmlFor="site-search"
							>
								Search
							</label>

							<div className="ds_input__wrapper  ds_input__wrapper--has-icon">
								<input
									name="q"
									required=""
									id="site-search"
									className="ds_input  ds_site-search__input"
									type="text"
									placeholder="Search"
									autoComplete="off"
								/>

								<button
									type="submit"
									className="ds_button  js-site-search-button"
								>
									<span className="visually-hidden">
										Search
									</span>
									<svg
										className="ds_icon"
										aria-hidden="true"
										role="img"
									>
										<use href="/assets/images/icons/icons.stack.svg#search"></use>
									</svg>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className="ds_site-header__navigation">
				<div className="ds_wrapper">
					<nav className="ds_site-navigation">
						<ul className="ds_site-navigation__list">
							<li className="ds_site-navigation__item">
								<Link
									to="/"
									className="ds_site-navigation__link"
								>
									All Users
								</Link>
							</li>
							<li className="ds_site-navigation__item">
								<Link
									to="/user-history"
									className="ds_site-navigation__link"
								>
									User History
								</Link>
							</li>
							<li className="ds_site-navigation__item">
								<Link
									key={lastViewed}
									to={lastURL}
									className="ds_site-navigation__link"
								>
									Last User Viewed
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;