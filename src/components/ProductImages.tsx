import { useState } from 'react';

// @ts-ignore
const ProductImages = ({ images, alt }) => {
   const [selectedImage, setSelectedImage] = useState(0);

   return (
      <div className="flex flex-col">
         {/* Main image display */}
         <div className="aspect-h-1 aspect-w-1 w-full">
            <div
               role="tabpanel"
               aria-labelledby={`tabs-${selectedImage}-tab`}
               // @ts-ignore
               tabIndex="0"
            >
               <img
                  src={images[selectedImage]}
                  alt={`Product image ${selectedImage + 1}`}
                  className="h-full w-full object-cover object-center sm:rounded-lg"
               />
            </div>
         </div>

         {/* Thumbnail selector */}
         <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <div
               className="grid grid-cols-4 gap-6"
               aria-orientation="horizontal"
               role="tablist"
            >

               {
                  // @ts-ignore
                  images.map((image, index) => (
                  <button
                     key={index}
                     id={`tabs-${index}-tab`}
                     className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                     aria-controls={`tabs-${index}-panel`}
                     role="tab"
                     type="button"
                     onClick={() => setSelectedImage(index)}
                     aria-selected={selectedImage === index}
                  >
                     <span className="sr-only">Product image {index + 1}</span>
                     <span className="absolute inset-0 overflow-hidden rounded-md">
                      <img
                         src={image}
                         alt={`${alt} ${index + 1}`}
                         className="h-full w-full object-cover object-center"
                      />
              </span>
                     <span
                        className={`pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2 ${
                           selectedImage === index ? 'ring-copaBlue-500' : 'ring-transparent'
                        }`}
                        aria-hidden="true"
                     />
                  </button>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ProductImages;