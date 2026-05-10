import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        nav: { 
          home: 'Home', 
          diseases: 'Diseases', 
          procedures: 'Procedures',
          gallery: 'Gallery', 
          contact: 'Contact' 
        },
        hero: { 
          title: 'Dr. Hatem Abdel Kafy', 
          subtitle: 'Consultant of Rheumatology & Immunology',
          credentials: 'FRCP - Fellow of the Royal College of Physicians'
        },
        diseases: { 
          title: 'Diseases We Treat',
          subtitle: 'Comprehensive care for rheumatic and autoimmune conditions',
          rheumatoid: {
            name: 'Rheumatoid Arthritis',
            desc: 'Chronic inflammatory disorder affecting joints'
          },
          lupus: {
            name: 'Systemic Lupus Erythematosus',
            desc: 'Autoimmune disease affecting multiple organs'
          },
          fibro: {
            name: 'Fibromyalgia',
            desc: 'Widespread musculoskeletal pain with fatigue'
          },
          autoimmune: {
            name: 'Autoimmune Diseases',
            desc: 'Immune system attacking healthy cells'
          },
          arthritis: {
            name: 'Inflammatory Arthritis',
            desc: 'Joint inflammation and stiffness'
          }
        },
        procedures: {
          title: 'Medical Procedures',
          subtitle: 'Advanced diagnostic and therapeutic interventions',
          joint_injection: 'Joint Injections',
          muscle_biopsy: 'Muscle Biopsy',
          lab_tests: 'Laboratory Tests',
          immunotherapy: 'Immunotherapy'
        },
        gallery: {
          title: 'Photo Gallery',
          subtitle: 'Moments from Dr. Hatem\'s professional journey'
        },
        contact: { 
          title: 'Contact Dr. Hatem',
          subtitle: 'Book your appointment today',
          phone: 'Phone',
          whatsapp: 'WhatsApp',
          location: 'Saudi German Hospital - Egypt',
          email: 'Email',
          working_hours: 'Working Hours: Sat-Thu 10 AM - 6 PM'
        },
        footer: {
          rights: 'All rights reserved',
          designed: 'Designed with'
        }
      }
    },
    ar: {
      translation: {
        nav: { 
          home: 'الرئيسية', 
          diseases: 'الأمراض', 
          procedures: 'الإجراءات الطبية',
          gallery: 'المعرض', 
          contact: 'اتصل بنا' 
        },
        hero: { 
          title: 'دكتور حاتم عبد الكافي', 
          subtitle: 'استشاري الروماتيزم والمناعة',
          credentials: 'زميل الكلية الملكية البريطانية'
        },
        diseases: { 
          title: 'الأمراض التي نعالجها',
          subtitle: 'رعاية شاملة لأمراض الروماتيزم والمناعة',
          rheumatoid: {
            name: 'الروماتويد المفصلي',
            desc: 'اضطراب التهابي مزمن يصيب المفاصل'
          },
          lupus: {
            name: 'الذئبة الحمراء',
            desc: 'مرض مناعي ذاتي يصيب أعضاء متعددة'
          },
          fibro: {
            name: 'الفيبروميالجيا',
            desc: 'آلام عضلية منتشرة مع إرهاق'
          },
          autoimmune: {
            name: 'أمراض المناعة الذاتية',
            desc: 'جهاز المناعة يهاجم الخلايا السليمة'
          },
          arthritis: {
            name: 'التهابات المفاصل',
            desc: 'التهاب وتيبس المفاصل'
          }
        },
        procedures: {
          title: 'الإجراءات الطبية',
          subtitle: 'تدخلات تشخيصية وعلاجية متقدمة',
          joint_injection: 'حقن المفاصل',
          muscle_biopsy: 'خزعة العضلات',
          lab_tests: 'التحاليل المعملية',
          immunotherapy: 'العلاج المناعي'
        },
        gallery: {
          title: 'معرض الصور',
          subtitle: 'لحظات من مسيرة الدكتور حاتم المهنية'
        },
        contact: { 
          title: 'تواصل مع الدكتور حاتم',
          subtitle: 'احجز موعدك اليوم',
          phone: 'هاتف',
          whatsapp: 'واتساب',
          location: 'المستشفى السعودي الألماني - مصر',
          email: 'البريد الإلكتروني',
          working_hours: 'ساعات العمل: السبت-الخميس 10 ص - 6 م'
        },
        footer: {
          rights: 'جميع الحقوق محفوظة',
          designed: 'صمم بـ'
        }
      }
    }
  },
  lng: 'ar',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;