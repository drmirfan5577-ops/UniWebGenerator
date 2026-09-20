import type { Language, Translations } from '@/types';

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr', flag: '🇬🇧' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', dir: 'rtl', flag: '🇵🇰' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl', flag: '🇸🇦' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', dir: 'ltr', flag: '🇹🇷' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', dir: 'ltr', flag: '🇨🇳' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', dir: 'ltr', flag: '🇧🇩' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', dir: 'ltr', flag: '🇮🇳' },
  { code: 'ps', name: 'Pashto', nativeName: 'پښتو', dir: 'rtl', flag: '🇦🇫' },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی', dir: 'rtl', flag: '🇮🇷' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', dir: 'ltr', flag: '🇷🇺' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', dir: 'ltr', flag: '🇰🇷' },
  { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr', flag: '🇩🇪' },
];

export const TRANSLATIONS: Translations = {
  'app.title': {
    en: 'Uni Website Generator',
    ur: 'یونی ویب سائٹ جنریٹر',
    ar: 'مولد المواقع الشامل',
    tr: 'Uni Web Sitesi Oluşturucu',
    zh: 'Uni 网站生成器',
    bn: 'ইউনি ওয়েবসাইট জেনারেটর',
    hi: 'यूनी वेबसाइट जेनरेटर',
    ps: 'یونی ویب سایټ جنریټر',
    fa: 'تولیدکننده وب‌سایت یونی',
    ru: 'Генератор сайтов Uni',
    ko: '유니 웹사이트 생성기',
    fr: 'Générateur de Sites Uni',
    de: 'Uni Website-Generator',
  },
  'nav.home': {
    en: 'Home', ur: 'ہوم', ar: 'الرئيسية', tr: 'Ana Sayfa', zh: '主页',
    bn: 'হোম', hi: 'होम', ps: 'کور', fa: 'خانه', ru: 'Главная', ko: '홈',
  },
  'nav.templates': {
    en: 'Templates', ur: 'ٹمپلیٹس', ar: 'القوالب', tr: 'Şablonlar', zh: '模板',
    bn: 'টেমপ্লেট', hi: 'टेम्पलेट', ps: 'ټیمپلیټونه', fa: 'قالب‌ها', ru: 'Шаблоны', ko: '템플릿',
  },
  'nav.generator': {
    en: 'Generator', ur: 'جنریٹر', ar: 'المنشئ', tr: 'Oluşturucu', zh: '生成器',
    bn: 'জেনারেটর', hi: 'जेनरेटर', ps: 'جنریټر', fa: 'تولیدکننده', ru: 'Генератор', ko: '생성기',
  },
  'nav.social': {
    en: 'Social Links', ur: 'سوشل لنکس', ar: 'روابط التواصل', tr: 'Sosyal Bağlantılar', zh: '社交链接',
    bn: 'সোশ্যাল লিংক', hi: 'सोशल लिंक', ps: 'ټولنیز لینکونه', fa: 'لینک‌های اجتماعی', ru: 'Соц. Сети', ko: '소셜 링크',
  },
  'nav.marketing': {
    en: 'Marketing', ur: 'مارکیٹنگ', ar: 'التسويق', tr: 'Pazarlama', zh: '营销',
    bn: 'মার্কেটিং', hi: 'मार्केटिंग', ps: 'بازارموندنه', fa: 'بازاریابی', ru: 'Маркетинг', ko: '마케팅',
  },
  'nav.admin': {
    en: 'Admin', ur: 'ایڈمن', ar: 'الإدارة', tr: 'Yönetici', zh: '管理员',
    bn: 'অ্যাডমিন', hi: 'एडमिन', ps: 'اداره', fa: 'مدیر', ru: 'Админ', ko: '관리자',
  },
  'home.hero.title': {
    en: 'Build Enterprise Websites Instantly',
    ur: 'فوری طور پر انٹرپرائز ویب سائٹ بنائیں',
    ar: 'أنشئ مواقع المؤسسات فوراً',
    tr: 'Kurumsal Web Sitelerini Anında Oluşturun',
    zh: '即刻创建企业级网站',
    bn: 'তাৎক্ষণিকভাবে এন্টারপ্রাইজ ওয়েবসাইট তৈরি করুন',
    hi: 'तुरंत एंटरप्राइज वेबसाइट बनाएं',
    ps: 'سمدستي د سوداګرۍ ویبسایټونه جوړ کړئ',
    fa: 'فوراً وب‌سایت‌های سازمانی بسازید',
    ru: 'Создавайте корпоративные сайты мгновенно',
    ko: '즉시 기업 웹사이트 구축',
  },
  'home.hero.sub': {
    en: '100+ Professional Templates for Every Business Category',
    ur: 'ہر کاروباری زمرے کے لیے 100+ پیشہ ورانہ ٹمپلیٹس',
    ar: '100+ قالب احترافي لكل فئة أعمال',
    tr: 'Her İş Kategorisi için 100+ Profesyonel Şablon',
    zh: '适用于每个业务类别的100+专业模板',
    bn: 'প্রতিটি ব্যবসার বিভাগের জন্য ১০০+ পেশাদার টেমপ্লেট',
    hi: 'हर व्यापार श्रेणी के लिए 100+ पेशेवर टेम्पलेट',
    ps: 'د هر سوداګریز ډول لپاره 100+ مسلکي ټیمپلیټونه',
    fa: 'بیش از ۱۰۰ قالب حرفه‌ای برای هر دسته کسب‌وکار',
    ru: 'Более 100 профессиональных шаблонов для каждой категории бизнеса',
    ko: '모든 비즈니스 카테고리를 위한 100+ 전문 템플릿',
  },
  'cat.supermarket': {
    en: 'Supermarket', ur: 'سپر مارکیٹ', ar: 'سوبرماركت', tr: 'Süpermarket',
    zh: '超市', bn: 'সুপারমার্কেট', hi: 'सुपरमार्केट', fa: 'سوپرمارکت', ru: 'Супермаркет', ko: '슈퍼마켓',
  },
  'cat.pharmacy': {
    en: 'Pharmacy', ur: 'فارمیسی', ar: 'صيدلية', tr: 'Eczane',
    zh: '药房', bn: 'ফার্মেসি', hi: 'फार्मेसी', fa: 'داروخانه', ru: 'Аптека', ko: '약국',
  },
  'cat.food': {
    en: 'Food & Restaurant', ur: 'کھانا و ریستوران', ar: 'الطعام والمطعم', tr: 'Yiyecek & Restoran',
    zh: '美食与餐厅', bn: 'খাবার ও রেস্তোরাঁ', hi: 'भोजन और रेस्तरां', fa: 'غذا و رستوران', ru: 'Еда и Ресторан', ko: '음식 & 레스토랑',
  },
  'cat.fashion': {
    en: 'Fashion & Clothing', ur: 'فیشن و لباس', ar: 'الأزياء والملابس', tr: 'Moda & Giyim',
    zh: '时尚与服装', bn: 'ফ্যাশন ও পোশাক', hi: 'फैशन और कपड़े', fa: 'مد و لباس', ru: 'Мода и Одежда', ko: '패션 & 의류',
  },
  'cat.electronics': {
    en: 'Electronics', ur: 'الیکٹرونکس', ar: 'الإلكترونيات', tr: 'Elektronik',
    zh: '电子产品', bn: 'ইলেকট্রনিক্স', hi: 'इलेक्ट्रॉनिक्स', fa: 'الکترونیک', ru: 'Электроника', ko: '전자제품',
  },
  'cat.delivery': {
    en: 'Delivery Services', ur: 'ڈیلیوری سروسز', ar: 'خدمات التوصيل', tr: 'Teslimat Hizmetleri',
    zh: '配送服务', bn: 'ডেলিভারি সার্ভিস', hi: 'डिलीवरी सेवाएं', fa: 'خدمات تحویل', ru: 'Службы Доставки', ko: '배달 서비스',
  },
  'cat.cosmetics': {
    en: 'Cosmetics & Beauty', ur: 'کاسمیٹکس و بیوٹی', ar: 'مستحضرات التجميل', tr: 'Kozmetik & Güzellik',
    zh: '美妆护肤', bn: 'কসমেটিক্স ও বিউটি', hi: 'सौंदर्य प्रसाधन', fa: 'لوازم آرایشی', ru: 'Косметика и Красота', ko: '화장품 & 뷰티',
  },
  'cat.bakery': {
    en: 'Bakery & Sweets', ur: 'بیکری و مٹھائی', ar: 'المخبز والحلويات', tr: 'Fırın & Tatlılar',
    zh: '烘焙甜点', bn: 'বেকারি ও মিষ্টি', hi: 'बेकरी और मिठाई', fa: 'نانوایی و شیرینی', ru: 'Пекарня и Сладости', ko: '베이커리 & 디저트',
  },
  'cat.realestate': {
    en: 'Real Estate / OLX', ur: 'رئیل اسٹیٹ / اولیکس', ar: 'العقارات / OLX', tr: 'Emlak / OLX',
    zh: '房地产 / OLX', bn: 'রিয়েল এস্টেট / OLX', hi: 'रियल एस्टेट / OLX', fa: 'املاک / OLX', ru: 'Недвижимость / OLX', ko: '부동산 / OLX',
  },
  'cat.services': {
    en: 'Local Services', ur: 'مقامی خدمات', ar: 'الخدمات المحلية', tr: 'Yerel Hizmetler',
    zh: '本地服务', bn: 'স্থানীয় সেবা', hi: 'स्थानीय सेवाएं', fa: 'خدمات محلی', ru: 'Местные Услуги', ko: '지역 서비스',
  },
  'btn.explore': {
    en: 'Explore Templates', ur: 'ٹمپلیٹس دیکھیں', ar: 'استكشف القوالب', tr: 'Şablonları Keşfet',
    zh: '探索模板', bn: 'টেমপ্লেট দেখুন', hi: 'टेम्पलेट देखें', fa: 'قالب‌ها را کاوش کنید', ru: 'Смотреть Шаблоны', ko: '템플릿 탐색',
  },
  'btn.launch': {
    en: 'Launch Site', ur: 'سائٹ لانچ کریں', ar: 'إطلاق الموقع', tr: 'Siteyi Yayınla',
    zh: '启动网站', bn: 'সাইট লঞ্চ করুন', hi: 'साइट लॉन्च करें', fa: 'سایت را راه‌اندازی کنید', ru: 'Запустить Сайт', ko: '사이트 시작',
  },
  'admin.title': {
    en: 'Admin Control Panel', ur: 'ایڈمن کنٹرول پینل', ar: 'لوحة تحكم المشرف',
    tr: 'Yönetici Kontrol Paneli', zh: '管理员控制面板', bn: 'অ্যাডমিন কন্ট্রোল প্যানেল',
    hi: 'एडमिन कंट्रोल पैनल', fa: 'پنل کنترل مدیر', ru: 'Панель Управления Администратора', ko: '관리자 제어판',
  },
  'admin.password': {
    en: 'Enter Admin Password', ur: 'ایڈمن پاس ورڈ درج کریں', ar: 'أدخل كلمة مرور المشرف',
    tr: 'Yönetici Şifresini Girin', zh: '输入管理员密码', bn: 'অ্যাডমিন পাসওয়ার্ড দিন',
    hi: 'एडमिन पासवर्ड दर्ज करें', fa: 'رمز مدیر را وارد کنید', ru: 'Введите пароль администратора', ko: '관리자 비밀번호 입력',
  },
  'admin.wrong': {
    en: 'Incorrect password. Try again.', ur: 'غلط پاس ورڈ۔ دوبارہ کوشش کریں۔',
    ar: 'كلمة المرور غير صحيحة. حاول مجدداً.', tr: 'Yanlış şifre. Tekrar deneyin.',
    zh: '密码错误，请重试。', bn: 'ভুল পাসওয়ার্ড। আবার চেষ্টা করুন।',
    hi: 'गलत पासवर्ड। पुनः प्रयास करें।', fa: 'رمز نادرست است. دوباره تلاش کنید.', ru: 'Неверный пароль. Попробуйте снова.', ko: '비밀번호가 틀렸습니다. 다시 시도하세요.',
  },
};

export function t(key: string, lang: string): string {
  const entry = TRANSLATIONS[key];
  if (!entry) return key;
  return entry[lang] || entry['en'] || key;
}
