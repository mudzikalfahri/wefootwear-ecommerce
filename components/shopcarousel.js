import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ShopCarousel() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Skeleton className="h-64" />;
  return (
    <div className="">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        transitionTime={500}
        interval={4000}
        className="rounded-2xl overflow-hidden shop shadow-lg"
      >
        <div className="relative">
          <img
            className="h-64 object-cover w-full pointer-events-none"
            loading="lazy"
            src="https://i.ibb.co/TYNgNgp/Homepage-Banner-AF1-React-170120.jpg"
          />
          <button className="cursor-pointer hover:bg-gray-200 absolute bottom-0 right-0 m-6 bg-white rounded-xl px-4 py-2 text-xs">
            See Product
          </button>
        </div>
        <div>
          <img
            className="h-64 object-cover w-full"
            loading="lazy"
            src="https://i.ibb.co/kHhhbbG/adidas-banner-grpn-US.jpg"
          />
        </div>
        <div>
          <img
            className="h-64 object-cover w-full"
            loading="lazy"
            src="https://i.ibb.co/WvN6bC5/PLPBanner-Converse-1920x700.png"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default ShopCarousel;