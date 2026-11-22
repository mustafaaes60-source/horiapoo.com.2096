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

  // 8. ظبط الـ 3 أزرار جوه .cta
  let cta = document.querySelector('.cta');
  if (cta) {
    // امسح أي زر متجر قديم عشان ميعملش تكرار
    let oldStoreBtns = cta.querySelectorAll('a[href*="/shop"], #store-btn, .btn-store');
    oldStoreBtns.forEach(function(b){ b.remove(); });

    // اعمل زر المتجر البرتقالي الجديد
    let btn = document.createElement('a');
    btn.id = 'store-btn';
    btn.href = SITE_SEO.storeLink;
    btn.textContent = SITE_SEO.storeText;
    // نفس ستايل باقي الأزرار + برتقالي
    btn.style.display = 'inline-block';
    btn.style.background = '#ff9f1c';
    btn.style.color = '#fff';
    btn.style.padding = '14px 30px';
    btn.style.borderRadius = '30px';
    btn.style.fontSize = '18px';
    btn.style.fontWeight = 'bold';
    btn.style.textDecoration = 'none';

    // حطه في النص: بعد أول زر (خدماتنا) وقبل آخر زر (اتصل بنا)
    let buttons = cta.querySelectorAll('a');
    if (buttons.length >= 2) {
      buttons[0].after(btn);
    } else if (buttons.length === 1) {
      buttons[0].after(btn);
    } else {
      cta.appendChild(btn);
    }
  }
});
