"use client";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <div className="fixed bottom-16 right-3">
      <button
        onClick={scrollToTop}
        className="bg-gradient-to-r from-teal-500 to-blue-500 p-3 rounded-full text-white hover:from-yellow-500 hover:to-red-500 transition duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={14} />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
