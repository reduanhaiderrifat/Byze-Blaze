import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-[calc(100vh-288px)] ">
        <div className="hero-content -mt-16 text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold  ">
              Wellcome to{" "}
              <span className="bg-gradient-to-r from-secondary via-primary to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">
                Byte Blaze
              </span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className=" space-x-2">
              <Link
                to="/blogs"
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                <span className="relative text-primary group-hover:text-white">
                  Blogs
                </span>
              </Link>
              <Link
                to="/bookmarks"
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-secondary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-secondary"></span>
                <span className="relative text-secondary group-hover:text-white">
                  Bookmarks
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
