import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const photos = ['/doc1.jpg', '/doc2.jpg', '/doc3.jpg']; // ضع صورك هنا

const PersonalPhotos = () => (
  <Swiper modules={[Autoplay]} autoplay={{ delay: 2000 }} loop spaceBetween={20} slidesPerView={2} className="w-full max-w-2xl mx-auto">
    {photos.map((src, i) => (
      <SwiperSlide key={i}><img src={src} className="rounded-2xl shadow-lg h-80 object-cover" /></SwiperSlide>
    ))}
  </Swiper>
);
export default PersonalPhotos;