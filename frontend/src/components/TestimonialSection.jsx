import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    text: 'Testimonial 1',
    comment: "I've been using this product for a week now and I can't recommend it enough",
    author: 'Author 1',
  },
  {
    id: 2,
    text: 'Testimonial 2',
    comment: "I've been using this product for a week now and I can't recommend it enough",
    author: 'Author 2',
  },
  {
    id: 3,
    text: 'Testimonial 3',
    comment: "I've been using this product for a week now and I can't recommend it enough",
    author: 'Author 3',
  },
];

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className=" py-20">
      <div className="container mx-auto px-6 lg:w-10/12">
        <h2 className="text-3xl text-white font-bold text-center mb-8">Testimonials</h2>
        <div className="bg-cardColor p-6 rounded-lg shadow-lg text-center">
          <p className="text-lg mb-4 text-white">{testimonials[currentTestimonial].text}</p>
          <p className=" mb-4 text-white textg">{testimonials[currentTestimonial].comment}</p>
          <p className="text-gray-400 ">- {testimonials[currentTestimonial].author}</p>
          <div className="flex justify-center mt-4">
            <button
              onClick={prevTestimonial}
              className="bg-blue-700 hover:bg-blue-500 py-2 px-4 rounded-full  transition duration-300"
            >
              Previous
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-blue-700 hover:bg-blue-500 py-2 px-4 rounded-full transition duration-300 ml-4"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// const App = () => {
//   return (
//     <div>
//       <TestimonialSection />
//       <div className="container mx-auto p-4">
//         <h2 className="text-3xl font-bold">Welcome to my website</h2>
//         <p className="mt-4">This is a simple example of a testimonial section with navigation buttons to show different testimonials.</p>
//       </div>
//     </div>
//   );
// };

export default TestimonialSection;
