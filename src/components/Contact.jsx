import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaCopy, FaCheck, FaStar, FaHeartbeat, FaArrowRight,
  FaPhoneVolume, FaCalendarCheck, FaUserMd, FaMobileAlt
} from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const isArabic = i18n.language === 'ar';

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://www.facebook.com/share/18kkYqig5N/', name: isArabic ? 'فيسبوك' : 'Facebook', color: 'bg-blue-600', glow: 'shadow-blue-500/50' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/dr.hatem.abdelkafy', name: isArabic ? 'إنستجرام' : 'Instagram', color: 'bg-pink-600', glow: 'shadow-pink-500/50' },
    { icon: <FaTiktok />, url: 'https://www.tiktok.com/@hatemabdelkafy', name: isArabic ? 'تيك توك' : 'TikTok', color: 'bg-gray-800', glow: 'shadow-gray-500/50' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/201069927168', name: isArabic ? 'واتساب' : 'WhatsApp', color: 'bg-green-600', glow: 'shadow-green-500/50' }
  ];

  const contactInfo = [
    { 
      icon: <FaPhoneAlt />, 
      label: isArabic ? 'الهاتف' : 'Phone',
      value: '+20 106 992 7168', 
      rawValue: '+201069927168',
      href: 'tel:+201069927168', 
      color: 'from-blue-500 to-blue-600',
      available: isArabic ? 'متاح 24 ساعة' : 'Available 24/7',
      isExternal: false // يفتح تطبيق الهاتف
    },
    { 
      icon: <FaWhatsapp />, 
      label: isArabic ? 'واتساب' : 'WhatsApp',
      value: '+20 106 992 7168', 
      rawValue: '+201069927168',
      href: 'https://wa.me/201069927168', 
      color: 'from-green-500 to-green-600',
      available: isArabic ? 'متاح 24 ساعة' : 'Available 24/7',
      isExternal: true // يفتح في صفحة جديدة
    },
    { 
      icon: <FaEnvelope />, 
      label: isArabic ? 'البريد الإلكتروني' : 'Email',
      value: 'info@drhatem.com', 
      rawValue: 'info@drhatem.com',
      href: 'mailto:info@drhatem.com', 
      color: 'from-purple-500 to-purple-600',
      available: null,
      isExternal: false // يفتح تطبيق البريد
    },
    { 
      icon: <FaMapMarkerAlt />, 
      label: isArabic ? 'الموقع' : 'Location',
      value: isArabic ? 'المستشفى السعودي الألماني - مصر' : 'Saudi German Hospital - Egypt',
      rawValue: isArabic ? 'المستشفى السعودي الألماني - مصر' : 'Saudi German Hospital - Egypt',
      href: 'https://maps.google.com/?q=Saudi+German+Hospital+Cairo', 
      color: 'from-red-500 to-red-600',
      available: null,
      isExternal: true // يفتح خرائط جوجل في صفحة جديدة
    }
  ];

  const copyPhone = () => {
    navigator.clipboard.writeText('+201069927168');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `مرحباً دكتور حاتم، أنا ${formData.name}\nرقمي: ${formData.phone}\nالرسالة: ${formData.message || 'أرغب في حجز موعد'}`;
    const whatsappUrl = `https://wa.me/201069927168?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Floating particles animation
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 10 + 10
  }));

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* خلفية متحركة */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-blue-900/20"></div>
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, -100, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 -left-48 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            y: [0, -80, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-20 -right-48 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"
        />
        
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-400/30"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 360]
            }}
            transition={{ 
              scale: { duration: 2, repeat: Infinity },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            className="inline-block mb-4"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
              <FaHeartbeat className="text-3xl text-white" />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="animated-gradient-text">{isArabic ? 'تواصل مع الدكتور حاتم' : 'Contact Dr. Hatem'}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {isArabic 
              ? 'احجز موعدك اليوم واستشر أفضل استشاري في أمراض الروماتيزم والمناعة'
              : 'Book your appointment today and consult the best consultant in rheumatology and immunology'}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Contact Cards */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FaUserMd className="text-blue-400" />
                {isArabic ? 'معلومات التواصل' : 'Contact Information'}
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.isExternal ? "_blank" : "_self"}
                    rel={info.isExternal ? "noopener noreferrer" : ""}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center text-white text-xl shrink-0`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                      {(info.label === (isArabic ? 'الهاتف' : 'Phone') || info.label === (isArabic ? 'واتساب' : 'WhatsApp')) ? (
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-1 flex-wrap" style={{ direction: 'ltr' }}>
                            <span className="text-blue-400 text-xl font-bold">+20</span>
                            <span className="text-white text-xl font-bold">106</span>
                            <span className="text-white text-xl font-bold">992</span>
                            <span className="text-white text-xl font-bold">7168</span>
                          </div>
                          {info.available && (
                            <p className="text-xs text-green-400" style={{ direction: 'rtl' }}>{info.available}</p>
                          )}
                        </div>
                      ) : (
                        <p className="text-white text-lg font-bold">
                          {info.value}
                        </p>
                      )}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition shrink-0">
                      <FaArrowRight className="text-gray-400 group-hover:text-white transition-colors text-sm" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FaClock className="text-green-400" />
                {isArabic ? 'ساعات العمل' : 'Working Hours'}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
                  <div>
                    <p className="text-gray-300 font-semibold">{isArabic ? 'السبت - الأربعاء' : 'Saturday - Wednesday'}</p>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-lg" style={{ direction: 'ltr' }}>10:00 AM - 8:00 PM</p>
                    <p className="text-xs text-green-400">{isArabic ? 'متاح للاستشارات' : 'Available for consultations'}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
                  <div>
                    <p className="text-gray-300 font-semibold">{isArabic ? 'الخميس' : 'Thursday'}</p>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-lg" style={{ direction: 'ltr' }}>10:00 AM - 4:00 PM</p>
                    <p className="text-xs text-yellow-400">{isArabic ? 'مواعيد محدودة' : 'Limited appointments'}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
                  <div>
                    <p className="text-gray-300 font-semibold">{isArabic ? 'الجمعة' : 'Friday'}</p>
                  </div>
                  <div>
                    <p className="text-green-400 font-bold text-lg">{isArabic ? 'عطلة رسمية' : 'Official Holiday'}</p>
                    <p className="text-xs text-gray-500">{isArabic ? 'طوارئ فقط' : 'Emergency only'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Copy */}
            <div className="glass-card p-6 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-right">
                  <p className="text-sm text-gray-300 mb-2 flex items-center gap-2 justify-center md:justify-start">
                    <FaMobileAlt className="text-blue-400" />
                    {isArabic ? 'رقم الهاتف السريع' : 'Quick Phone Number'}
                  </p>
                  <div className="flex items-center gap-2 justify-center md:justify-start" style={{ direction: 'ltr' }}>
                    <span className="text-2xl md:text-3xl font-bold text-blue-400">+20</span>
                    <span className="text-2xl md:text-3xl font-bold text-white">106</span>
                    <span className="text-2xl md:text-3xl font-bold text-white">992</span>
                    <span className="text-2xl md:text-3xl font-bold text-white">7168</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2" style={{ direction: 'rtl' }}>
                    {isArabic ? 'متاح 24 ساعة للاستشارات العاجلة' : 'Available 24/7 for emergency consultations'}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={copyPhone}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all flex items-center gap-2 border border-white/20"
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-green-400 text-lg" />
                      <span className="text-green-400 font-semibold">{isArabic ? 'تم النسخ' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <FaCopy className="text-blue-400 text-lg" />
                      <span className="text-white font-semibold">{isArabic ? 'نسخ الرقم' : 'Copy Number'}</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Social & Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Social Media */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                {isArabic ? 'تابع الدكتور على وسائل التواصل' : 'Follow Dr. Hatem on Social Media'}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${social.color} text-white p-3 rounded-xl flex items-center justify-center gap-2 hover:shadow-xl transition-all ${social.glow} hover:shadow-lg`}
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="text-sm font-semibold">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Appointment Form */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FaCalendarCheck className="text-blue-400" />
                {isArabic ? 'احجز موعدك الآن' : 'Book Your Appointment Now'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder={isArabic ? 'الاسم الكامل' : 'Full Name'}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={isArabic ? 'رقم الهاتف' : 'Phone Number'}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  style={{ direction: 'ltr' }}
                />
                <textarea
                  name="message"
                  placeholder={isArabic ? 'رسالتك (اختياري)' : 'Your Message (Optional)'}
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-xl" />
                  {isArabic ? 'أرسل عبر واتساب' : 'Send via WhatsApp'}
                </motion.button>
              </form>
            </div>

            {/* Map */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-purple-400" />
                {isArabic ? 'موقع المستشفى' : 'Hospital Location'}
              </h3>
              <div className="rounded-xl overflow-hidden h-48 mb-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.35522394814!2d31.21632955!3d30.0444196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840d5e2a6c6c7%3A0x5b6c8c9f4e6d7e8f!2sSaudi%20German%20Hospital%20Cairo!5e0!3m2!1sen!2seg!4v1699999999999!5m2!1sen!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Hospital Location"
                ></iframe>
              </div>
              <div className="flex gap-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="https://maps.google.com/?q=Saudi+German+Hospital+Cairo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl bg-blue-600/20 text-blue-400 text-center text-sm font-semibold hover:bg-blue-600/30 transition"
                >
                  {isArabic ? 'فتح في خرائط جوجل' : 'Open in Google Maps'}
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="https://waze.com/ul?q=Saudi%20German%20Hospital%20Cairo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl bg-purple-600/20 text-purple-400 text-center text-sm font-semibold hover:bg-purple-600/30 transition"
                >
                  {isArabic ? 'فتح في Waze' : 'Open in Waze'}
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Call Button - هذا يفتح تطبيق الهاتف */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8"
        >
          <motion.a
            href="tel:+201069927168"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white font-bold text-lg hover:shadow-xl transition-all"
          >
            <FaPhoneVolume className="text-xl animate-pulse" />
            {isArabic ? 'اتصل الآن للاستشارة الفورية' : 'Call Now for Immediate Consultation'}
            <FaArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;