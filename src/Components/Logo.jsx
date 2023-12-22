import logo from "../assets/logo.png";
const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="Logo" className="md:w-20 w-10" />
      <span
        style={{
          color: "#ff0000",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
        className="md:text-2xl "
      >
        TaskMagnet
      </span>
    </div>
  );
};

export default Logo;
