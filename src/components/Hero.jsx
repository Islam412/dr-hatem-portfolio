import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaStethoscope, FaAward, FaHospital, FaArrowRight, FaSparkles } from 'react-icons/fa';

const Hero = () => {
  const { t } = useTranslation();

  // تأثير الجسيمات
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 10 + 10
  }));

  return (
    <section id="home" className="min-h-screen pt-24 flex items-center relative overflow-hidden">
      {/* خلفية متحركة بتأثير ضوئي */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20"></div>
        
        {/* جسيمات متحركة */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle absolute"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              opacity: Math.random() * 0.5
            }}
          />
        ))}
        
        {/* دوائر ضوئية متحركة */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 -left-48 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-20 -right-48 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-pink-500/10 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 border border-blue-500/50"
            >
              <FaSparkles className="text-yellow-500 animate-pulse" />
              <span className="text-blue-400 font-semibold text-sm">استشاري عالمي معتمد</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="animated-gradient-text">{t('hero.title')}</span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-4 neon-text">{t('hero.subtitle')}</p>
            <p className="text-lg text-purple-400 mb-8">{t('hero.credentials')}</p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="glass-card px-6 py-3 rounded-full border border-blue-500/30 hover:border-blue-500 transition-all">
                <div className="flex items-center gap-3">
                  <FaStethoscope className="text-3xl text-blue-400" />
                  <span className="text-gray-200 font-semibold">استشاري أول</span>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="glass-card px-6 py-3 rounded-full border border-purple-500/30 hover:border-purple-500 transition-all">
                <div className="flex items-center gap-3">
                  <FaAward className="text-3xl text-purple-400" />
                  <span className="text-gray-200 font-semibold">زميل الكلية الملكية</span>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="glass-card px-6 py-3 rounded-full border border-green-500/30 hover:border-green-500 transition-all">
                <div className="flex items-center gap-3">
                  <FaHospital className="text-3xl text-green-400" />
                  <span className="text-gray-200 font-semibold">المستشفى السعودي الألماني</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59,130,246,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10">احجز موعداً الآن</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0, rotateY: 90 }}
            animate={{ x: 0, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-border-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 z-10"></div>
              <img 
                src="/doctor-main.jpg" 
                alt="Dr. Hatem Abdel Kafy"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* بطاقات عائمة */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 glass-card px-4 py-2 rounded-full border border-yellow-500/50"
            >
              🌟 20+ سنوات خبرة
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 glass-card px-4 py-2 rounded-full border border-green-500/50"
            >
              🏥 5000+ مريض
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;