import React from "react";
import { Link } from "react-router-dom";

const BlogListPage = () => {
	return (
		<div>
			<h1>Blog list page</h1>

			<div className="mt-4">
				<ul>
					{blogs.map((blog, i) => (
						<li key={i} className="mb-2">
							<Link
								className="link-dark text-decoration-none"
								to={`/blogs/${blog._id}`}
							>
								{blog.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default BlogListPage;

export const blogs = [
	{
		_id: "1",
		title: "Our first blog",
		body: `<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				earum laboriosam odit dolorem sapiente cupiditate animi dignissimos
				repudiandae, id aliquid ducimus. Impedit veritatis modi natus facilis
				corrupti, fuga, similique velit maxime unde voluptas itaque est minus
				cumque illo iusto soluta officiis libero fugiat! Corporis temporibus,
				quae quidem laboriosam quaerat quibusdam quam officiis porro impedit
				fugit fuga eaque quasi quis dolore reprehenderit debitis soluta
				blanditiis, nisi ut omnis voluptatum beatae vitae.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				earum laboriosam odit dolorem sapiente cupiditate animi dignissimos
				repudiandae, id aliquid ducimus. Impedit veritatis modi natus facilis
				corrupti, fuga, similique velit maxime unde voluptas itaque est minus
				cumque illo iusto soluta officiis libero fugiat! Corporis temporibus,
				quae quidem laboriosam quaerat quibusdam quam officiis porro impedit
				fugit fuga eaque quasi quis dolore reprehenderit debitis soluta
				blanditiis, nisi ut omnis voluptatum beatae vitae.
			</p>`,
	},
	{
		_id: "2",
		title: "Our second blog",
		body: `<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				earum laboriosam odit dolorem sapiente cupiditate animi dignissimos
				repudiandae, id aliquid ducimus. Impedit veritatis modi natus facilis
				corrupti, fuga, similique velit maxime unde voluptas itaque est minus
				cumque illo iusto soluta officiis libero fugiat! Corporis temporibus,
				quae quidem laboriosam quaerat quibusdam quam officiis porro impedit
				fugit fuga eaque quasi quis dolore reprehenderit debitis soluta
				blanditiis, nisi ut omnis voluptatum beatae vitae.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				earum laboriosam odit dolorem sapiente cupiditate animi dignissimos
				repudiandae, id aliquid ducimus. Impedit veritatis modi natus facilis
				corrupti, fuga, similique velit maxime unde voluptas itaque est minus
				cumque illo iusto soluta officiis libero fugiat! Corporis temporibus,
				quae quidem laboriosam quaerat quibusdam quam officiis porro impedit
				fugit fuga eaque quasi quis dolore reprehenderit debitis soluta
				blanditiis, nisi ut omnis voluptatum beatae vitae.
			</p>`,
	},
	{
		_id: "3",
		title: "Our third blog",
		body: `<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				earum laboriosam odit dolorem sapiente cupiditate animi dignissimos
				repudiandae, id aliquid ducimus. Impedit veritatis modi natus facilis
				corrupti, fuga, similique velit maxime unde voluptas itaque est minus
				cumque illo iusto soluta officiis libero fugiat! Corporis temporibus,
				quae quidem laboriosam quaerat quibusdam quam officiis porro impedit
				fugit fuga eaque quasi quis dolore reprehenderit debitis soluta
				blanditiis, nisi ut omnis voluptatum beatae vitae.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				earum laboriosam odit dolorem sapiente cupiditate animi dignissimos
				repudiandae, id aliquid ducimus. Impedit veritatis modi natus facilis
				corrupti, fuga, similique velit maxime unde voluptas itaque est minus
				cumque illo iusto soluta officiis libero fugiat! Corporis temporibus,
				quae quidem laboriosam quaerat quibusdam quam officiis porro impedit
				fugit fuga eaque quasi quis dolore reprehenderit debitis soluta
				blanditiis, nisi ut omnis voluptatum beatae vitae.
			</p>`,
	},
];
