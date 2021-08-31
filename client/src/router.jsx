import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FrontLayout from "./layouts/FrontLayout";
import BlogListPage from "./pages/BlogListPage";
import HomePage from "./pages/HomePage";
import SingleBlog from "./pages/SingleBlog";

const AppRoutes = ({ component: Component, layout: Layout, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => (
				<Layout>
					<Component {...props} />
				</Layout>
			)}
		/>
	);
};

const RoutesComp = () => {
	return (
		<Router>
			<Switch>
				<AppRoutes component={HomePage} path="/" layout={FrontLayout} exact />
				<AppRoutes
					component={BlogListPage}
					path="/blogs"
					layout={FrontLayout}
					exact
				/>
				<AppRoutes
					component={SingleBlog}
					path="/blogs/:id"
					layout={FrontLayout}
				/>
			</Switch>
		</Router>
	);
};

export default RoutesComp;
