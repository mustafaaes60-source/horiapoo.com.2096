// ==========================================
// ملف الكلمات المفتاحية + زرار المتجر - horiapool.com
// ==========================================

const SITE_SEO = {
  // العنوان اللي بيظهر في جوجل
  title: "مقاول مسابح بالرياض | شركة حورية لإنشاء وصيانة المسابح والشلالات 0550055284",

  // الوصف اللي بيظهر تحت العنوان في جوجل
  description: "أفضل مقاول مسابح بالرياض - شركة حورية لانشاء وتصميم وبناء وصيانة مسابح وشلالات وبحيرات صناعية بالرياض، جودة عالية وأسعار تنافسية، اتصل الآن 0550055284",

  // الكلمات المفتاحية
  keywords: "مقاول مسابح بالرياض, مقاول مسابح, أفضل مقاول مسابح بالرياض, شركة مسابح بالرياض, انشاء مسابح بالرياض, بناء مسابح بالرياض, تصميم مسابح بالرياض, صيانة مسابح بالرياض, تنظيف مسابح بالرياض, شركة حورية للمسابح, انشاء شلالات بالرياض, تعديل مسابح بالرياض, بناء احواض سباحة بالرياض, ترميم مسابح بالرياض, شركة حورية دبي",

  // الكلمة الافتتاحية الكبيرة اللي جوه الموقع
  h1: "مقاول مسابح بالرياض - شركة حورية",

  // الجملة الترحيبية اللي تحتها
  welcome: "أفضل مقاول مسابح بالرياض، متخصصون في انشاء وتصميم وبناء وصيانة مسابح وشلالات وبحيرات صناعية، جودة عالية وأسعار تنافسية في الرياض، تواصل معنا الآن",

  // رقم التواصل
  phone: "0550055284",

  // عنوان فرعي ثاني
  h2: "أفضل مقاول مسابح وانشاء مسابح بالرياض",

  // ===== زرار المتجر =====
  storeLink: "https://horiapool.com/shop/",
  storeText: "🛒 تسوق من المتجر"
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

  // 7. تحديث أرقام التليفون
  let phones = document.querySelectorAll('.phone-number');
  phones.forEach(function(el) {
    el.textContent = SITE_SEO.phone;
  });

  // 8. إضافة زرار المتجر - لو مش موجود قبل كده
  if (!document.getElementById('store-btn')) {
    let btn = document.createElement('a');
    btn.id = 'store-btn';
    btn.href = SITE_SEO.storeLink;
    btn.target = '_blank';
    btn.textContent = SITE_SEO.storeText;
    btn.style.display = 'inline-block';
    btn.style.background = '#16a34a';
    btn.style.color = '#fff';
    btn.style.padding = '14px 28px';
    btn.style.borderRadius = '10px';
    btn.style.fontSize = '18px';
    btn.style.fontWeight = 'bold';
    btn.style.textDecoration = 'none';
    btn.style.marginTop = '15px';

    // حطه بعد الجملة الترحيبية لو موجودة، غير كده بعد H1
    if (welcome) {
      welcome.after(btn);
    } else if (h1) {
      h1.after(btn);
    } else {
      document.body.prepend(btn);
    }
  }

});
