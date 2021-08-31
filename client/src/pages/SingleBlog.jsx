import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "./BlogListPage";

const SingleBlog = () => {
	const [blog, setBlog] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const data = blogs.find((blog) => blog._id === id);
		setBlog(data);
	}, []);

	return (
		<div>
			<img src="/images/dp.png" alt="" />
			<h1>{blog?.title}</h1>

			<div dangerouslySetInnerHTML={{ __html: blog?.body }} />
		</div>
	);
};

export default SingleBlog;
