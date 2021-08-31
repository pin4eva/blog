import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FrontLayout = ({ children }) => {
	return (
		<Wrapper>
			<header>
				<nav className="navbar container">
					<Link className="nav-brand" to="/">
						Logo
					</Link>

					<ul className="nav">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/blogs" className="nav-link">
								Blogs
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<div className="container">{children}</div>
		</Wrapper>
	);
};

export default FrontLayout;

const Wrapper = styled.div``;
