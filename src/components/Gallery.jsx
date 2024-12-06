import Photo1 from '../assets/photo1.jpg';
import Photo2 from '../assets/photo2.jpg';
import Photo3 from '../assets/photo3.jpg';
import Photo4 from '../assets/photo4.jpg';
import Photo5 from '../assets/photo5.jpg';
import Photo6 from '../assets/photo6.jpg';

const Gallery = () => {
  return (
    <div className="text-white py-16" id="gallery">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-8">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Gallery</span>
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Here are some moments from my student journey and the things I enjoy. These pictures capture the essence of who I am.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Image 1 */}
          <div className="relative group rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-500">
            <img
              src={Photo1}
              alt="Moment 1"
              className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-xl text-white font-semibold">Moment 1</p>
            </div>
          </div>
          
          {/* Image 2 */}
          <div className="relative group rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-500">
            <img
              src={Photo2}
              alt="Moment 2"
              className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-xl text-white font-semibold">Moment 2</p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative group rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-500">
            <img
              src={Photo3}
              alt="Moment 3"
              className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-xl text-white font-semibold">Moment 3</p>
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative group rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-500">
            <img
              src={Photo4}
              alt="Moment 4"
              className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-xl text-white font-semibold">Moment 4</p>
            </div>
          </div>

          {/* Image 5 */}
          <div className="relative group rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-500">
            <img
              src={Photo5}
              alt="Moment 5"
              className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-xl text-white font-semibold">Moment 5</p>
            </div>
          </div>

          {/* Image 6 */}
          <div className="relative group rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-500">
            <img
              src={Photo6}
              alt="Moment 6"
              className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-xl text-white font-semibold">Moment 6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
