import Proptypes from "prop-types";
import Image from "../../assets/image/404.jpg";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Blog = ({ blog, delatable, handleDelete }) => {
  return (
    <div className="hover:scale-105 border border-opacity-0 hover:border-pink-500 relative">
      <Link
        to={`/blog/${blog.id}`}
        rel="noopener noreferrer"
        href="#"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={blog.cover_image || Image}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {blog.title}
          </h3>
          <span className="text-xs dark:text-gray-600">
            {new Date(blog.readable_publish_date).toLocaleString()}
          </span>
          <p>{blog.description}</p>
        </div>
      </Link>
      {delatable && (
        <div
          onClick={() => handleDelete(blog.id)}
          className="  absolute -top-3 -right-3 p-2 hover:bg-pink-500 rounded-full  hover:scale-105 bg-primary "
        >
          <MdDelete />
        </div>
      )}
    </div>
  );
};

Blog.propTypes = {
  blog: Proptypes.object.isRequired,
  delatable: Proptypes.any.isRequired,
  handleDelete: Proptypes.func.isRequirede,
};
export default Blog;
