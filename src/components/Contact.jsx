import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => (
  <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8">تواصل مع الدكتور</h2>
      <div className="flex justify-center gap-6 text-4xl mb-6">
        <a href="https://www.facebook.com/share/18kkYqig5N/"><FaFacebook className="hover:text-blue-400" /></a>
        <a href="https://www.instagram.com/dr.hatem.abdelkafy"><FaInstagram className="hover:text-pink-400" /></a>
        <a href="https://www.tiktok.com/@hatemabdelkafy"><FaTiktok className="hover:text-gray-400" /></a>
        <a href="https://wa.me/201069927168"><FaWhatsapp className="hover:text-green-400" /></a>
        <a href="tel:+201069927168"><FaPhoneAlt className="hover:text-blue-400" /></a>
      </div>
      <p className="text-xl">📞 +20 106 992 7168</p>
      <p>📍 المستشفى السعودي الألماني - مصر</p>
    </div>
  </section>
);
export default Contact;