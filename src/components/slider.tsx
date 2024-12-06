import React from "react";

import { Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// didn't found slider in trilogy
export default function Slider({
  children,
  id,
}: {
  children: React.ReactNode;
  id: number;
}) {
  return (
    <div className={`container-${id}`}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={`mySwiper-${id}`}
      >
        {children}
      </Swiper>
    </div>
  );
}
