import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        nav: { home: 'Home', diseases: 'Diseases', operations: 'Operations', gallery: 'Gallery', contact: 'Contact' },
        hero: { title: 'Dr. Hatem Abdel Kafy', subtitle: 'Consultant of Rheumatology & Immunology' },
        diseases: { title: 'Diseases We Treat', rheumatoid: 'Rheumatoid Arthritis', lupus: 'Lupus', fibro: 'Fibromyalgia' },
        operations: { title: 'Medical Procedures', joint: 'Joint Injection', biopsy: 'Muscle Biopsy' },
        contact: { phone: 'Phone', whatsapp: 'WhatsApp' }
      }
    },
    ar: {
      translation: {
        nav: { home: 'الرئيسية', diseases: 'الأمراض', operations: 'العمليات', gallery: 'المعرض', contact: 'اتصل بنا' },
        hero: { title: 'دكتور حاتم عبد الكافي', subtitle: 'استشاري الروماتيزم والمناعة' },
        diseases: { title: 'الأمراض التي نعالجها', rheumatoid: 'الروماتويد المفصلي', lupus: 'الذئبة الحمراء', fibro: 'آلام الفيبروميالجيا' },
        operations: { title: 'الإجراءات الطبية', joint: 'حقن المفاصل', biopsy: 'خزعة العضلات' },
        contact: { phone: 'هاتف', whatsapp: 'واتساب' }
      }
    }
  },
  lng: 'ar',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;