import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { setblogs } from "../../assets/utils";
const BlogDetails = () => {
  const blog = useLoaderData();
  const [tabIndex, setTabIndex] = useState(0);
  const handleBookmarks = (blog) => {
    setblogs(blog);
  };
  return (
    <div>
      <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              {blog.title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
              <div className="flex items-center md:space-x-2">
                <p className="text-sm">
                  {blog.reading_time_minutes} min read •{" "}
                  {new Date(blog.published_at).toLocaleString()}
                </p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                {blog.comments_count} counts • {blog.public_reactions_count}
                views
              </p>
            </div>
          </div>
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
            <Link
              onClick={() => setTabIndex(0)}
              to={``}
              rel="noopener noreferrer"
              href="#"
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 0 ? "border border-b-0" : "border-b"
              } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Content</span>
            </Link>
            <Link
              onClick={() => setTabIndex(1)}
              to={`author`}
              rel="noopener noreferrer"
              href="#"
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 1 ? "border border-b-0" : "border-b"
              } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Author</span>
            </Link>
            <div
              onClick={() => handleBookmarks(blog)}
              className="ml-5 bg-primary rounded-full p-3 hover:bg-opacity-30 bg-opacity-20 cursor-pointer"
            >
              <MdBookmarkAdd />
            </div>
          </div>

          <Outlet></Outlet>
        </article>
        <div>
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
