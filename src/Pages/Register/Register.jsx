import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../Login/SocialLogin";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import ImageHost from "../../Hooks/ImageHost";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCreateUser = async (data) => {
    try {
      const image = { image: data.photo[0] };
      const userImage = await ImageHost(image);
      console.log(userImage)
      const result = await createUser(data.email, data.password);
      if (result) {
        toast.success("Registered Successfully!");
      }
      const { user } = result;
      await updateProfile(user, {
        displayName: data.name,
        photoURL: userImage,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className="hero relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(https://i.ibb.co/pxCYXmq/pexels-photo-268533.jpg)`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>

      <div className="">
        <Helmet>
          <title>TaskMagnet || Register</title>
        </Helmet>
        <div className="flex justify-between gap-10">
          <form
            onSubmit={handleSubmit(handleCreateUser)}
            className=" flex-1 space-y-4 shadow-lg p-10  bg-opacity-75 backdrop-blur-md rounded-md text-white md:max-w-xl"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="name"
                {...register("name", { required: true })}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
              />

              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="mt-5 absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                autoComplete="user"
              >
                {showPassword ? (
                  <FaEyeSlash className="text-black" />
                ) : (
                  <FaEye className="text-black" />
                )}
              </span>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <label className="block text-sm font-medium ">
                  Upload An Picture
                </label>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs text-black"
                {...register("photo")}
              />
              {errors.photo && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                className="mr-2"
              />
              <label htmlFor="acceptTerms" className="text-sm">
                Accept Terms and Conditions
              </label>
            </div>

            <button
              type="submit"
              className="btn w-full bg-[#D1A054] hover:bg-[#D2A000]"
            >
              Register
            </button>

            <div className="text-center">
              <p>
                Don&#39;t have an account?{" "}
                <Link to={"/login"} className="text-[#D1A054]">
                  Login Now
                </Link>
              </p>
              <h3>Or login in with</h3>
            </div>

            <SocialLogin></SocialLogin>
          </form>
          <div className="flex-1 w-full md:block hidden">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              alt="Phone image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
