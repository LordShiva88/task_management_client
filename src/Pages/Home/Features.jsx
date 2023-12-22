import {
  FaLightbulb,
  FaGraduationCap,
  FaComments,
  FaTrophy,
  FaArrowUp,
} from "react-icons/fa";

const DeveloperSection = () => {
  const developerInfo = {
    title: "Developers",
    description:
      "Welcome, fellow developer! Explore coding challenges, tutorials, and connect with other developers. Stay updated with the latest technologies and sharpen your coding skills here.",
    benefits: [
      {
        text: "Access a vast library of coding challenges and solutions.",
        icon: <FaLightbulb className="icon" />,
      },
      {
        text: "Learn from tutorials covering a wide range of programming topics.",
        icon: <FaGraduationCap className="icon" />,
      },
      {
        text: "Connect with a community of developers for collaboration and networking.",
        icon: <FaComments className="icon" />,
      },
      {
        text: "Stay updated with industry trends and tech news.",
        icon: <FaArrowUp className="icon" />,
      },
      {
        text: "Participate in coding competitions and showcase your skills.",
        icon: <FaTrophy className="icon" />,
      },
    ],
  };

  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-700 text-white py-12">
      <div className="container mx-auto flex flex-col px-4 md:px-0 lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 lg:pr-8">
          <h2 className="text-4xl font-bold mb-4">🚀 {developerInfo.title}</h2>
          <p className="text-lg">{developerInfo.description}</p>
        </div>
        <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
          <h3 className="text-2xl font-bold mb-4">Key Benefits:</h3>
          <ul className="list-disc pl-4">
            {developerInfo.benefits.map((benefit, index) => (
              <li
                key={index}
                className="mb-2 flex items-center transition transform hover:scale-105 rounded-full px-3 py-2 bg-gray-900 hover:bg-gray-800"
              >
                <span className="mr-2 text-yellow-400">{benefit.icon}</span>
                <span className="text-white">{benefit.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
