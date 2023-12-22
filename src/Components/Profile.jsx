import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Profile = () => {
  
  return (
    <section className="bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg w-96 space-y-8">
      <div className="mt-6 w-fit mx-auto">
        <img
          src="https://i.ibb.co/CQstgQR/Whats-App-Image-2023-06-05-at-20-34-44-removebg-preview-1-1.jpg"
          className="rounded-full w-28 "
          alt="profile picture"
        />
      </div>
      <div className="items-center text-center">
        <div className="text-center">
          <h2 className="text-white font-bold text-4xl tracking-wide ">
            Liton Nath
          </h2>
          <p className="text-emerald-400 font-semibold mt-2">
            Junior Web Developer
          </p>
        </div>
      </div>
      <div className="h-1 w-full bg-black rounded-full">
        <div className="h-1 rounded-full bg-yellow-500 "></div>
      </div>
      <div className="flex items-center gap-5 justify-center">
        <span className="inline-block p-4  rounded-lg shadow-lg bg-blue-100/80 bg-gray-800">
          <FaGithub className="text-2xl hover:text-blue-600 transition-shadow" />
        </span>
        <span className="inline-block p-4  rounded-lg shadow-lg bg-blue-100/80 bg-gray-800">
          <FaFacebook className="text-2xl hover:text-blue-600 transition-shadow" />
        </span>
        <span className="inline-block p-4 rounded-lg shadow-lg bg-blue-100/80 bg-gray-800">
          <FaLinkedin className="text-2xl hover:text-blue-600 transition-shadow" />
        </span>
      </div>
      <button className="btn btn-outline w-full hover:bg-blue-500 uppercase ">
        Contact Me
      </button>
    </section>
  );
};

export default Profile;