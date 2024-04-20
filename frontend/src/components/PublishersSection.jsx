import React from 'react';

const publishers = [
  {
    name: 'Publisher 1',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
    websiteUrl: 'https://example.com',
  },
  {
    name: 'Publisher 2',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
    websiteUrl: 'https://example.com',
  },
  {
    name: 'Publisher 3',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
    websiteUrl: 'https://example.com',
  }, {
    name: 'Publisher 3',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
    websiteUrl: 'https://example.com',
  }, {
    name: 'Publisher 3',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
    websiteUrl: 'https://example.com',
  }, {
    name: 'Publisher 3',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
    websiteUrl: 'https://example.com',
  },
];

const PublishersSection = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Publishers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {publishers.map((publisher, index) => (
            <div key={index} className="bg-cardColor p-6 rounded-xl shadow-lg">
              <div className="flex justify-center mb-4">
                <img src={publisher.imageUrl} alt={publisher.name} className="w-32 h-32 object-cover rounded-full" />
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">{publisher.name}</h3>
              <div className="flex justify-center">
                <a
                  href={publisher.websiteUrl}
                  className="block bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-full transition duration-300"
                >
                  Visit Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// const App = () => {
//   return (
//     <div>
//       <PublishersSection />
//       <div className="container mx-auto p-4">
//         <h2 className="text-3xl font-bold">Welcome to my website</h2>
//         <p className="mt-4">This is a simple example of a "Publishers" section with cards having a vertically larger height.</p>
//       </div>
//     </div>
//   );
// };

export default PublishersSection;
