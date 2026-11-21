// ==========================================
// ملف الكلمات المفتاحية - horiapool.com
// ده الملف الوحيد اللي هتعدل فيه بعد كده
// أي تعديل هنا هيتحدث في الموقع على طول
// ==========================================

const SITE_SEO = {
  // العنوان اللي بيظهر في جوجل
  title: "شركة حورية لمسابح الرياض | انشاء وصيانة مسابح وشلالات 0550055284",

  // الوصف اللي بيظهر تحت العنوان في جوجل
  description: "افضل شركة انشاء مسابح بالرياض، تصميم وبناء وصيانة مسابح وشلالات وبحيرات صناعية، بأعلى جودة وأقل الأسعار، اتصل الآن 0550055284",

  // الكلمات المفتاحية
  keywords: "شركة مسابح بالرياض,بناء احواض سباحة,مسابح,مقاول مسابح,انشاء مسابح في الرياض, صيانة مسابح بالرياض, تنظيف مسابح, شركة حورية للمسابح, تصميم مسابح, انشاء شلالات,تعديل مسابح, شركة حورية دبي",

  // الكلمة الافتتاحية الكبيرة اللي جوه الموقع
  h1: "شركة حورية لمسابح الرياض",

  // الجملة الترحيبية اللي تحتها
  welcome: "أفضل شركة انشاء وصيانة مسابح بالرياض، تصميم مخصص، جودة عالية، وأسعار تنافسية، تواصل معنا الآن",

  // رقم التواصل
  phone: "0550055284",

  // عنوان فرعي ثاني
  h2: "افضل شركة انشاء مسابح بالرياض"
};

// ==========================================
// من هنا لتحت متلمسش حاجة، ده كود التحديث
// ==========================================

document.addEventListener("DOMContentLoaded", function() {

  // 1. تحديث العنوان
  document.title = SITE_SEO.title;

  // 2. تحديث الوصف
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', SITE_SEO.description);

  // 3. تحديث الكلمات المفتاحية
  let metaKey = document.querySelector('meta[name="keywords"]');
  if (!metaKey) {
    metaKey = document.createElement('meta');
    metaKey.setAttribute('name', 'keywords');
    document.head.appendChild(metaKey);
  }
  metaKey.setAttribute('content', SITE_SEO.keywords);

  // 4. تحديث H1
  let h1 = document.querySelector('h1');
  if (h1) h1.textContent = SITE_SEO.h1;

  // 5. تحديث النص الترحيبي
  let welcome = document.getElementById('welcome-text');
  if (welcome) welcome.textContent = SITE_SEO.welcome;

  // 6. تحديث H2
  let h2 = document.querySelector('h2');
  if (h2) h2.textContent = SITE_SEO.h2;

  // 7. تحديث أرقام التليفون اللي ليها كلاس phone-number
  let phones = document.querySelectorAll('.phone-number');
  phones.forEach(function(el) {
    el.textContent = SITE_SEO.phone;
  });

});
