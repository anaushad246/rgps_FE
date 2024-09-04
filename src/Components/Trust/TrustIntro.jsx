import React, { useState } from 'react';

function MultilingualSection() {
  const [language, setLanguage] = useState('en'); // Default language

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="py-8">
      {/* Language Selection Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => handleLanguageChange('en')}
          className={`px-4 py-2 rounded ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          English
        </button>
        <button
          onClick={() => handleLanguageChange('ur')}
          className={`px-4 py-2 rounded ${language === 'ur' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800 font-urdu'}`}
        >
          اردو
        </button>
        <button
          onClick={() => handleLanguageChange('ar')}
          className={`px-4 py-2 rounded ${language === 'ar' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-800 font-arabic'}`}
        >
          العربية
        </button>
      </div>

      {/* Content Section with Fixed Height and Scrollable */}
      <div
        className="max-h-80 overflow-y-auto p-4 bg-white  rounded-lg shadow-lg border border-gray-200 flex flex-col text-center"
      >
        {language === 'en' && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Welcome to Tahir Hussain Educational and Welfare Trust</h1>
            <p className="text-lg">
              Tahir Hussain Educational and Welfare Trust is dedicated to providing quality education and welfare services to the community. 
              Our mission is to empower individuals through education, ensuring they have the skills and knowledge to succeed in life.
            </p>
            <p className="text-lg mt-2">
              The trust operates various educational institutions, including Rabia Girls Public School and Dar-ul-Tahfeez, where we focus on holistic development, 
              nurturing both academic excellence and moral values.
            </p>
          </div>
        )}

        {language === 'ur' && (
          <div className='flex flex-col font-urdu '>
            <h1 className="text-2xl font-bold mb-4 pt-2">طاہر حسین ایجوکیشنل اینڈ ویلفیئر ٹرسٹ میں خوش آمدید</h1>
            <p className="text-lg">
              طاہر حسین ایجوکیشنل اینڈ ویلفیئر ٹرسٹ کمیونٹی کو معیاری تعلیم اور فلاحی خدمات فراہم کرنے کے لیے وقف ہے۔
              ہمارا مشن افراد کو تعلیم کے ذریعے بااختیار بنانا ہے، تاکہ ان کے پاس زندگی میں کامیاب ہونے کے لیے مہارتیں اور علم موجود ہو۔
            </p>
            <p className="text-lg mt-2">
              ٹرسٹ مختلف تعلیمی ادارے چلاتا ہے، جن میں رابعہ گرلز پبلک اسکول اور دارالتحفیظ بھی شامل ہے، جہاں ہم تعلیمی 
              اور اخلاقی اقدار دونوں کی پرورش کرتے ہوئے ہمہ گیر ترقی پر توجہ مرکوز کرتے ہیں۔
            </p>
          </div>
        )}

        {language === 'ar' && (
          <div className='font-arabic'>
            <h1 className="text-3xl font-bold mb-4">مرحبًا بكم في مؤسسة طاهر حسين التعليمية والخيرية</h1>
            <p className="text-lg">
              تهدف مؤسسة طاهر حسين التعليمية والخيرية إلى تقديم خدمات تعليمية ورعائية عالية الجودة للمجتمع.
              رسالتنا هي تمكين الأفراد من خلال التعليم، لضمان أن يكون لديهم المهارات والمعرفة للنجاح في الحياة.
            </p>
            <p className="text-lg mt-2">
              تدير المؤسسة العديد من المؤسسات التعليمية، بما في ذلك مدرسة رابعة للبنات و الدارالتحفیظ، حيث نركز على التنمية الشاملة،
              مما يعزز التميز الأكاديمي والقيم الأخلاقية.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MultilingualSection;
