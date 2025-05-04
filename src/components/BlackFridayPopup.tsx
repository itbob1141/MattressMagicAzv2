import { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'

interface BlackFridayPopupProps {
   children: React.ReactNode;
}

export default function BlackFridayPopup({ children }: BlackFridayPopupProps) {
   const [isOpen, setIsOpen] = useState(false);

   // Configure your sale duration here
   const SALE_CONFIG = {
      startDate: '2024-11-20T00:00:00',
      endDate: '2024-12-03T23:59:59',
      timezone: 'America/Los_Angeles',
   };

   useEffect(() => {
      const checkSaleStatus = () => {
         const now = new Date();
         const saleStart = new Date(SALE_CONFIG.startDate);
         const saleEnd = new Date(SALE_CONFIG.endDate);

         // Check if current time is within sale period
         const isSaleActive = now >= saleStart && now <= saleEnd;

         if (!isSaleActive) {
            setIsOpen(false);
            return;
         }

         // Only proceed with popup logic if sale is active
         const hasClosedPopup = localStorage.getItem('blackFridayPopupClosed');

         if (!hasClosedPopup) {
            const timer = setTimeout(() => {
               setIsOpen(true);
            }, 1500);

            return () => clearTimeout(timer);
         }
      };

      // Initial check
      checkSaleStatus();

      // Optional: Check every hour if sale status has changed
      // This helps if user keeps the tab open for a long time
      const intervalId = setInterval(checkSaleStatus, 3600000); // 1 hour

      return () => clearInterval(intervalId);
   }, []);

   const handleClose = () => {
      setIsOpen(false);
      localStorage.setItem('blackFridayPopupClosed', 'true');
   };

   // Early return if popup shouldn't be shown
   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
         <div
            className="relative w-full max-w-3xl bg-gradient-to-b from-zinc-900 to-black rounded-xl shadow-2xl overflow-hidden">
            <button
               onClick={handleClose}
               className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
               aria-label="Close popup"
            >
               <XMarkIcon className="h-6 w-6"/>
            </button>

            <div className="flex flex-col md:flex-row">
               {/* Image placeholder */}
               <div className="w-full md:w-1/2 h-48 md:h-auto bg-zinc-800">
                  {children}
               </div>

               {/* Content */}
               <div className="w-full md:w-1/2 p-8 text-white">
                  {/* Sale badge */}
                  <div
                     className="inline-block px-4 py-1 mb-4 bg-red-600 text-white text-sm font-bold rounded-full animate-pulse">
                     UP TO 70% OFF
                  </div>

                  <h2 className="text-3xl font-bold mb-2">
                     BLACK FRIDAY
                     <span className="block text-4xl text-red-500">SALE!</span>
                  </h2>

                  <p className="mb-6 text-gray-300 leading-relaxed">
                     Don't fight the crowds in Phoenix! Enjoy Black Friday deals all month long right in your hometown
                     at Mattress Magic AZ. Save up to 70% off select mattresses and furniture sets when you
                     mention our website sale in-store!
                  </p>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                     <a
                        href="/shop"
                        className="block w-full py-3 bg-red-600 text-white text-center font-bold rounded-lg hover:bg-red-700 transition-colors"
                     >
                        Shop Now
                     </a>
                     <a
                        href="/contact"
                        className="block w-full py-3 border border-white text-white text-center font-bold rounded-lg hover:bg-white hover:text-black transition-colors"
                     >
                        Contact Us
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};