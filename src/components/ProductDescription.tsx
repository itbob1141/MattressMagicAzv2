import React from 'react';

interface ParsedDescription {
   mainDescription: string;
   features: string[];
}

interface ProductDescriptionProps {
   description: string;
}

const parseDescription = (text: string): ParsedDescription => {
   const parts = text.split('Key Features:');

   if (parts.length === 2) {
      // Has key features section
      const [mainDesc, featuresText] = parts;
      const features = featuresText
         .split('\n')
         .filter((line: string) => line.trim().startsWith('-'))
         .map((feature: string) => feature.trim().substring(2));

      return {
         mainDescription: mainDesc.trim(),
         features
      };
   }

   // No key features section, return simple description
   return {
      mainDescription: text.trim(),
      features: []
   };
};

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
   const { mainDescription, features } = parseDescription(description);

   return (
      <div className="space-y-4">
         {/* Main description */}
         <p className="text-gray-700 leading-relaxed">
            {mainDescription}
         </p>

         {/* Key Features section */}
         {features.length > 0 && (
            <div className="mt-4">
               <h3 className="font-semibold text-lg mb-2">Key Features:</h3>
               <ul className="list-disc pl-5 space-y-1">
                  {features.map((feature, index) => (
                     <li key={index} className="text-gray-700">
                        {feature}
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </div>
   );
};

export default ProductDescription;