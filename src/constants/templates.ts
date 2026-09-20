import type { Template, TemplateCategory } from '@/types';

export const TEMPLATE_CATEGORIES: TemplateCategory[] = [
  { id: 'all', icon: '🌐', labelKey: 'All Templates', color: '#6366f1', gradient: 'from-indigo-500 to-purple-500', count: 100 },
  { id: 'supermarket', icon: '🛒', labelKey: 'cat.supermarket', color: '#10b981', gradient: 'from-emerald-500 to-teal-500', count: 12 },
  { id: 'pharmacy', icon: '💊', labelKey: 'cat.pharmacy', color: '#3b82f6', gradient: 'from-blue-500 to-cyan-500', count: 8 },
  { id: 'food', icon: '🍔', labelKey: 'cat.food', color: '#f59e0b', gradient: 'from-amber-500 to-orange-500', count: 14 },
  { id: 'fashion', icon: '👗', labelKey: 'cat.fashion', color: '#ec4899', gradient: 'from-pink-500 to-rose-500', count: 10 },
  { id: 'electronics', icon: '📱', labelKey: 'cat.electronics', color: '#6366f1', gradient: 'from-indigo-500 to-blue-500', count: 10 },
  { id: 'delivery', icon: '🚚', labelKey: 'cat.delivery', color: '#f97316', gradient: 'from-orange-500 to-red-500', count: 8 },
  { id: 'cosmetics', icon: '💄', labelKey: 'cat.cosmetics', color: '#a855f7', gradient: 'from-purple-500 to-pink-500', count: 8 },
  { id: 'bakery', icon: '🧁', labelKey: 'cat.bakery', color: '#d97706', gradient: 'from-yellow-500 to-amber-500', count: 8 },
  { id: 'realestate', icon: '🏠', labelKey: 'cat.realestate', color: '#0ea5e9', gradient: 'from-sky-500 to-blue-500', count: 10 },
  { id: 'services', icon: '🔧', labelKey: 'cat.services', color: '#64748b', gradient: 'from-slate-500 to-gray-500', count: 12 },
];

const UNSPLASH_IMGS: Record<string, string[]> = {
  supermarket: [
    'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1570585592895-c29aab7aecf5?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1601600576337-c1d8a0d1373c?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1604719312566-8912e9667d9f?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1506617420156-8e4536971650?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=260&fit=crop',
  ],
  pharmacy: [
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1553881651-43f4f7ad68ce?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=400&h=260&fit=crop',
  ],
  food: [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1561339429-082e9a84e59e?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1551183053-bf91798d765a?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1432139509613-5c4255815697?w=400&h=260&fit=crop',
  ],
  fashion: [
    'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=260&fit=crop',
  ],
  electronics: [
    'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=260&fit=crop',
  ],
  delivery: [
    'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1570878893653-37f22b38b7c7?w=400&h=260&fit=crop',
  ],
  cosmetics: [
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1590156206657-aec9a44e7e10?w=400&h=260&fit=crop',
  ],
  bakery: [
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1558303959-e7b0e18c5e5e?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1486887396153-fa416526c108?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?w=400&h=260&fit=crop',
  ],
  realestate: [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&h=260&fit=crop',
  ],
  services: [
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=260&fit=crop',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=260&fit=crop',
  ],
};

const TEMPLATE_NAMES: Record<string, string[]> = {
  supermarket: ['FreshMart Pro', 'ShopEase Market', 'MegaStore Plus', 'DailyMart Elite', 'QuickCart Express', 'GroceryHub Prime', 'FreshBazar Online', 'SmartShop Global', 'EasyCart Premium', 'BigMart Digital', 'LocalMart Connect', 'FamilyStore Pro'],
  pharmacy: ['MediCare Online', 'HealthPlus Pharma', 'QuickMeds Store', 'PharmaCare Pro', 'MedEasy Digital', 'HealthFirst Shop', 'MediStore Elite', 'PharmaHub Express'],
  food: ['TastyBite Restaurant', 'FoodieHub Pro', 'QuickEats Express', 'GourmetDine Plus', 'ChefChoice Online', 'FoodCart Premium', 'DineRight Digital', 'FlavourFest Pro', 'SpiceWorld Menu', 'CafeFusion Online', 'StreetFood Hub', 'RoyalDine Express', 'FoodExpress Pro', 'MealDeal Online'],
  fashion: ['StyleHub Fashion', 'TrendWear Pro', 'FashionForward Elite', 'ChicBoutique Online', 'UrbanStyle Store', 'LuxeWear Digital', 'FashionMall Pro', 'TrendSetter Hub', 'GlamFashion Store', 'ModernWear Plus'],
  electronics: ['TechStore Pro', 'GadgetHub Elite', 'ElectraShop Plus', 'TechMart Digital', 'SmartGadgets Pro', 'EliteTech Store', 'GadgetWorld Online', 'TechEase Premium', 'DigitalZone Pro', 'TechBazaar Elite'],
  delivery: ['SwiftDeliver Pro', 'QuickDrop Express', 'FastTrack Delivery', 'UrbanDeliver Plus', 'RapidCourier Pro', 'DeliverEasy Hub', 'SpeedDrop Express', 'QuickRun Delivery'],
  cosmetics: ['GlamStore Pro', 'BeautyHub Elite', 'LuxeCosmetics Plus', 'GlowBeauty Online', 'StyleBeauty Pro', 'BeautyBazaar Digital', 'PureGlow Store', 'NaturalBeauty Hub'],
  bakery: ['SweetTreat Bakery', 'BreadBite Pro', 'CakeCraft Online', 'SugarRush Bakery', 'FlourPower Digital', 'BakeryBliss Plus', 'SweetDelights Pro', 'FreshBake Hub'],
  realestate: ['PropertyPro Plus', 'HomeFinder Elite', 'RealEstateHub Pro', 'PropertySearch Online', 'HomeDeals Digital', 'EstateExpert Plus', 'PropertyMart Pro', 'DreamHome Finder', 'LocalListings Pro', 'HouseHunter Elite'],
  services: ['ServicePro Hub', 'LocalServices Plus', 'QuickFix Pro', 'ExpertServe Elite', 'HandyPro Digital', 'ServiceMaster Plus', 'LocalExperts Pro', 'FixItFast Hub', 'ProServices Online', 'TrustServe Pro', 'ServiceConnect Hub', 'AllPro Services'],
};

export function generateTemplates(): Template[] {
  const templates: Template[] = [];
  let id = 1;
  Object.keys(UNSPLASH_IMGS).forEach((catId) => {
    const imgs = UNSPLASH_IMGS[catId];
    const names = TEMPLATE_NAMES[catId] || [];
    imgs.forEach((img, i) => {
      templates.push({
        id: `tpl-${id++}`,
        name: names[i] || `Template ${id}`,
        categoryId: catId,
        thumbnail: img,
        tags: [catId, 'responsive', 'multilingual'],
        rating: parseFloat((4.2 + Math.random() * 0.8).toFixed(1)),
        downloads: Math.floor(1200 + Math.random() * 8800),
        isPremium: Math.random() > 0.6,
        isFeatured: Math.random() > 0.75,
        colors: ['#6366f1', '#8b5cf6'],
        description: `Professional ${catId} website template with full responsive design.`,
      });
    });
  });
  return templates;
}

export const ALL_TEMPLATES = generateTemplates();
