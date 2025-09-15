export default function Projects() {
  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Gamestop</h3>
          <p className="text-gray-700">
            Modern game sales platform with a vibrant UI and secure purchase
            flow.
          </p>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">FlyNow</h3>
          <p className="text-gray-700">
            Full-featured flight and hostel booking application using Django and
            React.
          </p>
        </div>
        {/* Add more project cards here */}
      </div>
    </section>
  );
}
