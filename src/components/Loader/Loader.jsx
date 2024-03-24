import { Audio } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-288px)]">
      <Audio size={100} color="#F92FD3" />
    </div>
  );
};

export default Loader;
