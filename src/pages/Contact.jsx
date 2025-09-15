export default function Contact() {
  return (
    <section className="p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Contact</h2>
      <p className="text-gray-700 mb-4">
        Feel free to reach out via email or LinkedIn.
      </p>
      <ul className="space-y-2 text-blue-600">
        <li>Email: <a href="mailto:nachiket@example.com" className="underline">nachiket@example.com</a></li>
        <li>LinkedIn: <a href="https://linkedin.com" className="underline">linkedin.com/in/nachiketbari</a></li>
        <li>GitHub: <a href="https://github.com/dashboard" className="underline">github.com/dashboard</a></li>
      </ul>
    </section>
  );
}
