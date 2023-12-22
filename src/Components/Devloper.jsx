const DeveloperSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">For Developers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Task Management</h3>
            <p className="text-gray-700">
              Efficiently manage your tasks with our intuitive task management
              system. Stay organized and focused on your projects.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Drag-and-Drop</h3>
            <p className="text-gray-700">
              Enjoy a seamless user experience with drag-and-drop functionality.
              Easily move tasks between different lists.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Developer-Friendly</h3>
            <p className="text-gray-700">
              Tailored for developers with a clean and customizable interface.
              Write code, stay organized, and boost productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
