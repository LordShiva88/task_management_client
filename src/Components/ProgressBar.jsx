import { SiProgress } from "react-icons/si";
import { FcOk } from "react-icons/fc";
import { IoIosCheckboxOutline } from "react-icons/io";

const ProgressBar = () => {
  return (
    <div>
      <div className="flex justify-around font-bold p-4">
        <span className="flex items-center gap-2 text-blue-500">
          <IoIosCheckboxOutline className="text-xl" />
          TO DO
          <span className="btn btn-sm rounded-full bg-indigo-500 text-white">
            2
          </span>
        </span>
        <span className="flex items-center gap-2 text-yellow-500">
          <SiProgress className="text-xl" />
          IN PROGRESS{" "}
          <span className="btn btn-sm rounded-full bg-yellow-500 text-white">
            2
          </span>
        </span>
        <span className="flex items-center gap-2 text-green-500">
          <FcOk className="text-xl" />
          COMPLETE{" "}
          <span className="btn btn-sm rounded-full bg-green-500 text-white">
            2
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
