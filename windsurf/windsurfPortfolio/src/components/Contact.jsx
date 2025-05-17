const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Contact Me
        </h2>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-[#2a2a2a] rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-[#2a2a2a] rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 bg-[#2a2a2a] rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Your message"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all text-white font-medium"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Alternatively, you can reach me at:
            </p>
            <div className="mt-4 space-y-4">
              <p className="text-gray-400">
                Email: gokulkrishnaraju@example.com
              </p>
              <p className="text-gray-400">
                Phone: +91 1234567890
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
