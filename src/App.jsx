import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  const { i18n } = useTranslation();
  
  return (
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} className="font-sans">
      <Navbar />
      <Hero />
      
      {/* باقي الأقسام ستضاف هنا تباعاً */}
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">جاري إضافة باقي الأقسام...</p>
      </div>
    </div>
  );
}

export default App;