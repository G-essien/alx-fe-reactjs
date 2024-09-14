// import { useState, useEffect, useRef } from 'react';
// import data from '../data.json'; // Ensure this path is correct and the file exists

// const HomePage = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     setRecipes(data);
//     const interval = setInterval(() => {
//       setCurrentIndex(prevIndex => (prevIndex + 1) % recipes.length);
//     }, 30000); // Change slide every 30 seconds

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, [data]);

//   const handlePrev = () => {
//     setCurrentIndex(prevIndex => (prevIndex - 1 + recipes.length) % recipes.length);
//   };

//   const handleNext = () => {
//     setCurrentIndex(prevIndex => (prevIndex + 1) % recipes.length);
//   };

//   return (
//     <div>
//       {/* Navigation Bar */}
//       <nav className="flex flex-col sm:flex-row justify-between items-center bg-green-500 p-4 shadow-md">
//         <div className="text-white text-3xl font-bold">NiceLogo</div>
//         <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-white mt-4 sm:mt-0">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//         <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
//           <button className="bg-white text-green-500 px-4 py-2 rounded-lg">Sign Up</button>
//           <button className="bg-white text-green-500 px-4 py-2 rounded-lg">Login</button>
//           <div className="relative">
//             <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-1 9H4l-1-9z" />
//             </svg>
//             <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="bg-green-200 p-12 text-center">
//         <h1 className="text-4xl font-bold text-gray-800">Hi, Good Morning!</h1>
//         <p className="mt-4 text-gray-600">Explore our latest recipes, perfect for any time of day!</p>
        
//         {/* Carousel */}
//         <div className="relative mt-8">
//           <div className="flex overflow-hidden" ref={carouselRef}>
//             {recipes.map((recipe, index) => (
//               <div
//                 key={recipe.id}
//                 className={`carousel-item bg-white shadow-lg rounded-lg p-4 flex-shrink-0 w-full transition-transform duration-500 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`}
//               >
//                 <img src={recipe.image} alt={recipe.title} className="rounded-lg w-full h-40 object-cover" />
//                 <p className="text-gray-800 mt-2">{recipe.title} - {recipe.rating}%</p>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={handlePrev}
//             className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-green-500 px-4 py-2 rounded-lg"
//           >
//             &lt;
//           </button>
//           <button
//             onClick={handleNext}
//             className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-green-500 px-4 py-2 rounded-lg"
//           >
//             &gt;
//           </button>
//         </div>

//         <button className="mt-8 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
//           Explore More Recipes
//         </button>
//       </section>

//       {/* Main Section 1: Popular Foods */}
//       <section className="p-12 bg-gray-100">
//         <h2 className="text-3xl font-bold text-center text-gray-800">Popular Dishes</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
//           {recipes.map(recipe => (
//             <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
//               <img src={recipe.image} alt={recipe.title} className="rounded-lg w-full h-40 object-cover" />
//               <h3 className="text-xl font-semibold mt-4">{recipe.title}</h3>
//               <p className="text-gray-600">{recipe.summary}</p>
//               <div className="flex justify-between mt-4">
//                 <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Add to Cart</button>
//                 <button className="text-blue-500">More Info</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Main Section 2: Testimonials */}
//       <section className="bg-green-200 p-12">
//         <h2 className="text-3xl font-bold text-center">What Our Users Say</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//           <div className="bg-white rounded-lg shadow-lg p-4">
//             <img src="https://via.placeholder.com/150" alt="User 1" className="w-16 h-16 rounded-full mx-auto" />
//             <h3 className="text-center mt-4 font-semibold">John Doe</h3>
//             <p className="text-center mt-2 text-gray-600">The recipes here are amazing!</p>
//             <div className="flex justify-center mt-4">
//               {[...Array(5)].map((_, i) => (
//                 <svg key={i} className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 17.3l6.18 3.85-1.64-7.03 5.46-4.74-7.13-.61L12 2.5l-2.87 6.26-7.13.61 5.46 4.74L5.82 21.15z" />
//                 </svg>
//               ))}
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-lg p-4">
//             <img src="https://via.placeholder.com/150" alt="User 2" className="w-16 h-16 rounded-full mx-auto" />
//             <h3 className="text-center mt-4 font-semibold">Jane Smith</h3>
//             <p className="text-center mt-2 text-gray-600">I loved the variety of dishes!</p>
//             <div className="flex justify-center mt-4">
//               {[...Array(4)].map((_, i) => (
//                 <svg key={i} className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 17.3l6.18 3.85-1.64-7.03 5.46-4.74-7.13-.61L12 2.5l-2.87 6.26-7.13.61 5.46 4.74L5.82 21.15z" />
//                 </svg>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Section 3: Contact Form */}
//       <section className="bg-gray-50 p-12">
//         <h2 className="text-3xl font-bold text-center">Contact Us</h2>
//         <form className="mt-8 max-w-xl mx-auto">
//           <input type="text" placeholder="Your Name" className="w-full p-4 border rounded-lg mb-4" />
//           <input type="email" placeholder="Your Email" className="w-full p-4 border rounded-lg mb-4" />
//           <textarea placeholder="Your Message" className="w-full p-4 border rounded-lg mb-4 h-32"></textarea>
//           <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">Send Message</button>
//         </form>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white p-8">
//         <div className="flex flex-col sm:flex-row justify-between">
//           <p>&copy; 2024 Recipe Sharing Platform</p>
//           <div className="flex space-x-4 mt-4 sm:mt-0">
//             <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X</a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }



import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import data from '../data.json'; 

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    setRecipes(data);
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % recipes.length);
    }, 30000); // Change slide every 30 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [data]);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + recipes.length) % recipes.length);
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % recipes.length);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="flex flex-col sm:flex-row justify-between items-center bg-green-500 p-4 shadow-md">
        <div className="text-white text-3xl font-bold">NiceLogo</div>
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-white mt-4 sm:mt-0">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
          <button className="bg-white text-green-500 px-4 py-2 rounded-lg">Sign Up</button>
          <button className="bg-white text-green-500 px-4 py-2 rounded-lg">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-green-200 p-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Hi, Good Morning!</h1>
        <p className="mt-4 text-gray-600">Explore our latest recipes, perfect for any time of day!</p>
        
        {/* Carousel */}
        <div className="relative mt-8">
          <div className="flex overflow-hidden" ref={carouselRef}>
            {recipes.map((recipe, index) => (
              <div
                key={recipe.id}
                className={`carousel-item bg-white shadow-lg rounded-lg p-4 flex-shrink-0 w-full transition-transform duration-500 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`}
              >
                <img src={recipe.image} alt={recipe.title} className="rounded-lg w-full h-40 object-cover" />
                <p className="text-gray-800 mt-2">{recipe.title} - {recipe.rating}%</p>
              </div>
            ))}
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-green-500 px-4 py-2 rounded-lg"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-green-500 px-4 py-2 rounded-lg"
          >
            &gt;
          </button>
        </div>

        <button className="mt-8 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
          Explore More Recipes
        </button>
      </section>

      {/* Main Section 1: Popular Foods */}
      <section className="p-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800">Popular Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {recipes.map(recipe => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
              <img src={recipe.image} alt={recipe.title} className="rounded-lg w-full h-40 object-cover" />
              <h3 className="text-xl font-semibold mt-4">{recipe.title}</h3>
              <p className="text-gray-600">{recipe.summary}</p>
              <div className="flex justify-between mt-4">
                <Link to={`/recipe/${recipe.id}`} className="bg-green-500 text-white px-4 py-2 rounded-lg">View Recipe</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
