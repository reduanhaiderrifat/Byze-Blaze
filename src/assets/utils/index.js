import toast from "react-hot-toast";

export const getblogs = () => {
  let blogs = [];
  const localblogs = localStorage.getItem("blogs");
  if (localblogs) {
    blogs = JSON.parse(localblogs);
  }
  return blogs;
};

export const setblogs = (blog) => {
  let blogs = getblogs();
  const isExit = blogs.find((b) => b.id === blog.id);
  if (isExit) {
    return toast.error("Already Exits");
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  toast.success("Blog Add Bookmarks Successfully!");
};

export const deleteblogs = (id) => {
  let blogs = getblogs();
  const remaining = blogs.filter((b) => b.id !== id);
  localStorage.setItem("blogs", JSON.stringify(remaining));
  toast.success("Blog Remove Bookmarks Successfully!");
};
