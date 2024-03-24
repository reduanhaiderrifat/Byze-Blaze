import { useLoaderData } from "react-router-dom";

const Content = () => {
  const blog = useLoaderData();
  return (
    <div>
      <div
        // to={`/blog/${blog.id}`}
        rel="noopener noreferrer"
        href="#"
        className=" mx-auto group border hover:no-underline focus:no-underline dark:bg-gray-50"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={blog.cover_image || Image}
        />

        <div className="p-6 space-y-2">
          {blog.tags.map((tag, idx) => (
            <a
              key={idx}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
            >
              #{tag}
            </a>
          ))}
          <h3
            href={blog.website_url}
            className="text-2xl font-semibold cursor-pointer group-hover:underline group-focus:underline"
          >
            {blog.title}
          </h3>
          <span className="text-xs dark:text-gray-600">
            {new Date(blog.readable_publish_date).toLocaleString()}
          </span>
          <p>{blog.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
