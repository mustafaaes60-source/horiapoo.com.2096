// ==========================================
// ملف الكلمات المفتاحية + زرار المتجر - horiapool.com
// ==========================================

const SITE_SEO = {
  title: "مقاول مسابح بالرياض | شركة حورية لإنشاء وصيانة المسابح والشلالات 0550055284",
  description: "أفضل مقاول مسابح بالرياض - شركة حورية لانشاء وتصميم وبناء وصيانة مسابح وشلالات وبحيرات صناعية بالرياض، جودة عالية وأسعار تنافسية، اتصل الآن 0550055284",
  keywords: "مقاول مسابح بالرياض, مقاول مسابح, أفضل مقاول مسابح بالرياض, شركة مسابح بالرياض, انشاء مسابح بالرياض, بناء مسابح بالرياض, تصميم مسابح بالرياض, صيانة مسابح بالرياض, تنظيف مسابح بالرياض, شركة حورية للمسابح, انشاء شلالات بالرياض, تعديل مسابح بالرياض, بناء احواض سباحة بالرياض, ترميم مسابح بالرياض, شركة حورية دبي",
  h1: "مقاول مسابح بالرياض - شركة حورية",
  welcome: "أفضل مقاول مسابح بالرياض، متخصصون في انشاء وتصميم وبناء وصيانة مسابح وشلالات وبحيرات صناعية، جودة عالية وأسعار تنافسية في الرياض، تواصل معنا الآن",
  phone: "0550055284",
  h2: "أفضل مقاول مسابح وانشاء مسابح بالرياض",
  storeLink: "https://horiapool.com/shop/",
  storeText: "🛒 المتجر"
};

// ==========================================
// من هنا لتحت متلمسش حاجة
// ==========================================

document.addEventListener("DOMContentLoaded", function() {
  document.title = SITE_SEO.title;

  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', SITE_SEO.description);

  let metaKey = document.querySelector('meta[name="keywords"]');
  if (!metaKey) {
    metaKey = document.createElement('meta');
    metaKey.setAttribute('name', 'keywords');
    document.head.appendChild(metaKey);
  }
  metaKey.setAttribute('content', SITE_SEO.keywords);

  let h1 = document.querySelector('h1');
  if (h1) h1.textContent = SITE_SEO.h1;

  let welcome = document.getElementById('welcome-text');
  if (welcome) welcome.textContent = SITE_SEO.welcome;

  let h2 = document.querySelector('h2');
  if (h2) h2.textContent = SITE_SEO.h2;

  let phones = document.querySelectorAll('.phone-number');
  phones.forEach(function(el) {
    el.textContent = SITE_SEO.phone;
  });

  // ظبط زر المتجر اللي موجود في HTML، متعملش واحد جديد ومتحذفش القديم
  let storeBtn = document.getElementById('store-btn');
  if (storeBtn) {
    storeBtn.href = SITE_SEO.storeLink;
    storeBtn.textContent = SITE_SEO.storeText;
    storeBtn.style.background = '#ff9f1c';
    storeBtn.style.color = '#fff';
  }
});
