import { useEffect, useState } from "react";
import { deleteblogs, getblogs } from "../../../assets/utils";
import Blog from "../../Blog/Blog";
import Empty from "../../Empty/Empty";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getitem = getblogs();
    setBlogs(getitem);
  }, []);
  const handleDelete = (id) => {
    deleteblogs(id);
    const getitem = getblogs();
    setBlogs(getitem);
  };
  if (blogs.length < 1) {
    return (
      <Empty
        message="No Bookmarks Available"
        address={"/blogs"}
        label={"go to books"}
      ></Empty>
    );
  }
  return (
    <div className="grid py-8 px-5 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog, idx) => (
        <Blog
          handleDelete={handleDelete}
          delatable={true}
          key={idx}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

export default Bookmarks;
