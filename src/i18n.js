import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        doctorName: 'Dr. Hatem Abdel Kafy',
        backToTop: 'Back to Top',
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
          credentials: 'FRCP - Fellow of the Royal College of Physicians',
          certified: 'Certified International Consultant',
          consultant: 'Senior Consultant',
          royal: 'Royal College Fellow',
          hospital: 'Saudi German Hospital',
          bookAppointment: 'Book Appointment Now',
          yearsExp: '20+ Years Experience',
          patients: '5000+ Patients'
        },
        diseases: { 
          title: 'Diseases We Treat',
          subtitle: 'Comprehensive care for rheumatic and autoimmune conditions',
          rheumatoid: {
            name: 'Rheumatoid Arthritis',
            desc: 'Chronic inflammatory disorder that primarily affects joints'
          },
          lupus: {
            name: 'Systemic Lupus Erythematosus',
            desc: 'Autoimmune disease where the immune system attacks its own tissues'
          },
          fibro: {
            name: 'Fibromyalgia',
            desc: 'Widespread musculoskeletal pain accompanied by fatigue and sleep issues'
          },
          autoimmune: {
            name: 'Autoimmune Diseases',
            desc: 'Conditions where the immune system mistakenly attacks healthy cells'
          },
          arthritis: {
            name: 'Inflammatory Arthritis',
            desc: 'Joint inflammation and stiffness causing pain and reduced mobility'
          },
          // الأعراض لكل مرض
          rheumatoidSymptom1: 'Joint pain',
          rheumatoidSymptom2: 'Morning stiffness',
          rheumatoidSymptom3: 'Swelling and redness',
          rheumatoidSymptom4: 'General weakness',
          lupusSymptom1: 'Skin rash',
          lupusSymptom2: 'Joint pain',
          lupusSymptom3: 'Chronic fatigue',
          lupusSymptom4: 'Hair loss',
          fibroSymptom1: 'Widespread muscle pain',
          fibroSymptom2: 'Sleep disorders',
          fibroSymptom3: 'Headaches',
          fibroSymptom4: 'Poor memory',
          autoimmuneSymptom1: 'Chronic inflammation',
          autoimmuneSymptom2: 'Weight loss',
          autoimmuneSymptom3: 'Fever',
          autoimmuneSymptom4: 'Muscle pain',
          arthritisSymptom1: 'Joint stiffness',
          arthritisSymptom2: 'Redness',
          arthritisSymptom3: 'Difficulty moving',
          arthritisSymptom4: 'Swelling',
          // العلاج
          rheumatoidTreatment: 'Biological therapy + Disease-modifying antirheumatic drugs',
          lupusTreatment: 'Corticosteroids + Immunosuppressants',
          fibroTreatment: 'Behavioral therapy + Analgesic medications',
          autoimmuneTreatment: 'Immunotherapy + Immunosuppressive drugs',
          arthritisTreatment: 'Physical therapy + Anti-inflammatory drugs',
          details: 'Details',
          consultation: 'Consultation',
          overview: 'Overview',
          symptoms: 'Common Symptoms',
          treatment: 'Treatment Plan',
          recoveryRate: 'Recovery Rate',
          bookConsult: 'Book Consultation with Dr. Hatem',
          moreInfo: 'We offer the latest treatment methods and advanced techniques in treating rheumatic and autoimmune diseases'
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
          subtitle: "Moments from Dr. Hatem's professional journey"
        },
        contact: { 
          title: 'Contact Dr. Hatem',
          subtitle: 'Book your appointment today',
          phone: 'Phone',
          whatsapp: 'WhatsApp',
          location: 'Saudi German Hospital - Egypt',
          email: 'Email',
          contactInfo: 'Contact Information',
          workingHours: 'Working Hours',
          quickNumber: 'Quick Phone Number',
          available247: 'Available 24/7',
          satWed: 'Saturday - Wednesday',
          thu: 'Thursday',
          fri: 'Friday',
          allWeek: 'All week',
          officialHoliday: 'Official Holiday',
          emergencyOnly: 'Emergency only',
          availableConsult: 'Available for consultations',
          limitedAppointments: 'Limited appointments',
          followSocial: 'Follow Dr. Hatem on Social Media',
          bookNow: 'Book Your Appointment Now',
          fullName: 'Full Name',
          phoneNumber: 'Phone Number',
          yourMessage: 'Your Message (Optional)',
          sendViaWhatsApp: 'Send via WhatsApp',
          hospitalLocation: 'Hospital Location',
          openGoogleMaps: 'Open in Google Maps',
          openWaze: 'Open in Waze',
          copyNumber: 'Copy Number',
          copied: 'Copied!',
          callNow: 'Call Now for Immediate Consultation',
          emergencyConsult: 'Available 24/7 for emergency consultations'
        },
        footer: {
          rights: 'All rights reserved',
          designed: 'Designed with'
        }
      }
    },
    ar: {
      translation: {
        doctorName: 'دكتور حاتم عبد الكافي',
        backToTop: 'العودة للأعلى',
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
          credentials: 'زميل الكلية الملكية البريطانية - استشاري أول',
          certified: 'استشاري عالمي معتمد',
          consultant: 'استشاري أول',
          royal: 'زميل الكلية الملكية',
          hospital: 'المستشفى السعودي الألماني',
          bookAppointment: 'احجز موعداً الآن',
          yearsExp: '٢٠+ سنوات خبرة',
          patients: '٥٠٠٠+ مريض'
        },
        diseases: { 
          title: 'الأمراض التي نعالجها',
          subtitle: 'رعاية شاملة لأمراض الروماتيزم والمناعة',
          rheumatoid: {
            name: 'الروماتويد المفصلي',
            desc: 'اضطراب التهابي مزمن يصيب المفاصل بشكل رئيسي'
          },
          lupus: {
            name: 'الذئبة الحمراء',
            desc: 'مرض مناعي ذاتي حيث يهاجم الجهاز المناعي أنسجة الجسم'
          },
          fibro: {
            name: 'الفيبروميالجيا',
            desc: 'آلام عضلية منتشرة مصحوبة بالإرهاق واضطرابات النوم'
          },
          autoimmune: {
            name: 'أمراض المناعة الذاتية',
            desc: 'حالات يهاجم فيها الجهاز المناعي الخلايا السليمة بالخطأ'
          },
          arthritis: {
            name: 'التهابات المفاصل',
            desc: 'التهاب وتيبس المفاصل مما يسبب ألماً وصعوبة في الحركة'
          },
          // الأعراض لكل مرض بالعربية
          rheumatoidSymptom1: 'آلام المفاصل',
          rheumatoidSymptom2: 'تيبس الصباح',
          rheumatoidSymptom3: 'تورم واحمرار',
          rheumatoidSymptom4: 'ضعف عام',
          lupusSymptom1: 'طفح جلدي',
          lupusSymptom2: 'آلام المفاصل',
          lupusSymptom3: 'التعب المزمن',
          lupusSymptom4: 'تساقط الشعر',
          fibroSymptom1: 'ألم عضلي منتشر',
          fibroSymptom2: 'اضطرابات النوم',
          fibroSymptom3: 'الصداع',
          fibroSymptom4: 'الذاكرة الضعيفة',
          autoimmuneSymptom1: 'التهاب مزمن',
          autoimmuneSymptom2: 'فقدان الوزن',
          autoimmuneSymptom3: 'الحمى',
          autoimmuneSymptom4: 'آلام العضلات',
          arthritisSymptom1: 'تصلب المفاصل',
          arthritisSymptom2: 'احمرار',
          arthritisSymptom3: 'صعوبة الحركة',
          arthritisSymptom4: 'تورم',
          // العلاج بالعربية
          rheumatoidTreatment: 'العلاج البيولوجي + الأدوية المضادة للروماتيزم',
          lupusTreatment: 'الكورتيكوستيرويدات + مثبطات المناعة',
          fibroTreatment: 'العلاج السلوكي + الأدوية المسكنة',
          autoimmuneTreatment: 'العلاج المناعي + الأدوية المثبطة',
          arthritisTreatment: 'العلاج الطبيعي + مضادات الالتهاب',
          details: 'تفاصيل',
          consultation: 'استشارة',
          overview: 'نظرة عامة',
          symptoms: 'الأعراض الشائعة',
          treatment: 'خطة العلاج',
          recoveryRate: 'نسبة التحسن',
          bookConsult: 'احجز استشارة مع الدكتور حاتم',
          moreInfo: 'نقدم أحدث الأساليب العلاجية والتقنيات المتقدمة في علاج أمراض الروماتيزم والمناعة'
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
          phone: 'الهاتف',
          whatsapp: 'واتساب',
          location: 'المستشفى السعودي الألماني - مصر',
          email: 'البريد الإلكتروني',
          contactInfo: 'معلومات التواصل',
          workingHours: 'ساعات العمل',
          quickNumber: 'رقم الهاتف السريع',
          available247: 'متاح ٢٤ ساعة',
          satWed: 'السبت - الأربعاء',
          thu: 'الخميس',
          fri: 'الجمعة',
          allWeek: 'طوال الأسبوع',
          officialHoliday: 'عطلة رسمية',
          emergencyOnly: 'طوارئ فقط',
          availableConsult: 'متاح للاستشارات',
          limitedAppointments: 'مواعيد محدودة',
          followSocial: 'تابع الدكتور على وسائل التواصل',
          bookNow: 'احجز موعدك الآن',
          fullName: 'الاسم الكامل',
          phoneNumber: 'رقم الهاتف',
          yourMessage: 'رسالتك (اختياري)',
          sendViaWhatsApp: 'أرسل عبر واتساب',
          hospitalLocation: 'موقع المستشفى',
          openGoogleMaps: 'فتح في خرائط جوجل',
          openWaze: 'فتح في Waze',
          copyNumber: 'نسخ الرقم',
          copied: 'تم النسخ!',
          callNow: 'اتصل الآن للاستشارة الفورية',
          emergencyConsult: 'متاح ٢٤ ساعة للاستشارات العاجلة'
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