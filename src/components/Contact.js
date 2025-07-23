import React from "react";

export const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
      <form className="max-w-xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Leave a message..."
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-xl transition duration-300"
        >
          Submit Your Message!
        </button>
      </form>
    </div>
  );
};
