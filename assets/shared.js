/* =========================================================
   CoupleHub – Shared Nav / Footer / i18n / Theme
   Loaded by every page:  <script src="assets/shared.js">
   ========================================================= */
(function () {

  /* ── TRANSLATIONS ─────────────────────────────────────── */
  var T = {
    tr: {
      /* nav */
      nav_home: 'Ana Sayfa', nav_privacy: 'Gizlilik', nav_terms: 'Koşullar',
      nav_faq: 'SSS', nav_contact: 'İletişim', nav_account_delete: 'Hesap Sil',
      /* footer */
      ft_brand_p: 'Çiftlerin özel anlarını, anılarını ve günlük hayatlarını birlikte yönetebileceği özel platform.',
      ft_col1_h4: 'Uygulama', ft_col1_a1: 'Özellikler', ft_col1_a2: 'İndir', ft_col1_a3: 'SSS',
      ft_col2_h4: 'Yasal', ft_col2_a1: 'Gizlilik Politikası', ft_col2_a2: 'Kullanım Koşulları', ft_col2_a3: 'Hesap Silme',
      ft_col3_h4: 'İletişim', ft_col3_a1: 'İletişim',
      ft_copyright: '© 2026 CoupleHub. Tüm hakları saklıdır.', ft_dev: 'Geliştirici:',
      /* index hero */
      hero_tag: '✨ Çiftler için tasarlandı',
      hero_h1_line1: 'Sevgilinizle', hero_h1_emp: 'Her Şeyi Paylaşın',
      hero_sub: 'CoupleHub, çiftlerin özel anlarını, anılarını ve günlük hayatlarını birlikte güvenle yönetebileceği özel bir platformdur.',
      hero_btn_download: '📱 Uygulamayı İndir', hero_btn_features: 'Özellikleri Keşfet',
      hero_stat1: 'Uçtan Uca<br>Şifreli', hero_stat2: 'Drive ile<br>Yedekleme', hero_stat3: 'Tamamen<br>Özel',
      /* index features */
      feat_label: '🌟 Özellikler', feat_h2: 'Her Çiftin İhtiyacı Olan Her Şey',
      feat_sub: 'Tek bir uygulamada birlikte yaşamanın tüm güzelliklerini keşfedin.',
      feat1_h3: 'Özel Mesajlaşma', feat1_p: 'Uçtan uca şifreli mesajlar, resim ve video paylaşımı. Sadece ikinizin görebileceği özel sohbet alanı.',
      feat2_h3: 'Ortak Galeri', feat2_p: 'Birlikte çektiğiniz fotoğrafları ve videoları paylaşın. Google Drive ile otomatik yedekleme.',
      feat3_h3: 'Çift Takvimi', feat3_p: 'Yıl dönümleri, randevular ve özel günleri birlikte planlayın. Hatırlatıcılarla hiçbir şeyi atlamayın.',
      feat4_h3: 'Aşk Kuponları', feat4_p: 'Birbirinize özel aşk kuponları oluşturun ve gönderin. Romantik sürprizler yapın.',
      feat5_h3: 'Zaman Kapsülü', feat5_p: 'Geleceğe mektuplar ve anılar bırakın. Belirlediğiniz tarihte açılacak dijital zaman kapsülleri.',
      feat6_h3: 'Müzik Eşleştirme', feat6_p: 'İlişkinizin şarkısını ekleyin, müzik listenizi paylaşın. Spotify ve YouTube Music uyumlu.',
      feat7_h3: 'Ortak Harita', feat7_p: 'Gittiğiniz yerleri ve gitmek istediğiniz yerleri haritaya ekleyin. Birlikte keşfedecek yerlerinizi planlayın.',
      feat8_h3: 'Sesli & Görüntülü Arama', feat8_p: 'WebRTC tabanlı güvenli aramalar. Üçüncü taraf sunucu gerektirmez, doğrudan bağlantı.',
      feat9_h3: 'Bulut Depolama', feat9_p: 'Google Drive entegrasyonu ile sınırsız medya depolama. Verileriniz her zaman güvende.',
      /* index how */
      how_label: '🚀 Nasıl Çalışır', how_h2: '3 Adımda Başlayın',
      how_sub: 'Birkaç dakika içinde partnerinizle bağlanın ve paylaşmaya başlayın.',
      step1_h3: 'Hesap Oluşturun', step1_p: 'Google veya Apple hesabınızla saniyeler içinde kayıt olun. Şifre hatırlamak zorunda kalmayın.',
      step2_h3: 'Partneri Davet Edin', step2_p: 'Size özel davet kodunu partnerinize gönderin. Partneriniz kodu girdikten sonra bağlantı kurulur.',
      step3_h3: 'Paylaşmaya Başlayın', step3_p: 'Fotoğraflar, mesajlar, planlar… İkinize özel dünyada birlikte yaşamaya başlayın.',
      /* index security */
      sec_label: '🔒 Güvenlik', sec_h2_line1: 'Verileriniz Her Zaman', sec_h2_emp: 'Sizindir',
      sec_p: 'Gizliliğinizi ciddiye alıyoruz. CoupleHub, verilerinizi korumak için endüstri standardı güvenlik önlemlerini kullanır.',
      sec_btn: 'Gizlilik Politikasını Oku →',
      sec1_h4: 'Uçtan Uca Şifreleme', sec1_p: 'Mesajlarınız yalnızca siz ve partneriniz tarafından okunabilir. Sunucularımız içeriğe erişemez.',
      sec2_h4: 'HTTPS / TLS', sec2_p: 'Tüm veriler şifreli bağlantı üzerinden iletilir. Ortadaki adam saldırılarına karşı koruma.',
      sec3_h4: 'JWT Token Sistemi', sec3_p: 'Kısa ömürlü erişim token\'ları ve güvenli yenileme mekanizması. Şifreler asla saklanmaz.',
      sec4_h4: 'Veri Kontrolü Sizde', sec4_p: 'Hesabınızı ve tüm verilerinizi istediğiniz zaman kalıcı olarak silebilirsiniz.',
      /* index download */
      dl_h2: 'Hemen İndirin 📱', dl_p: 'iOS ve Android için ücretsiz. Sevgilinizle paylaşmaya başlayın.',
      dl_appstore_small: 'App Store\'dan İndir', dl_appstore: 'App Store',
      dl_gplay_small: 'Google Play\'den İndir', dl_gplay: 'Google Play',
      dl_req: 'iOS 15+ ve Android 9+ gerektirir',
      /* privacy page-hero */
      ph_privacy_label: '🔒 Yasal', ph_privacy_h1: 'Gizlilik Politikası',
      ph_privacy_sub: 'Verilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu şeffaf bir şekilde açıklıyoruz.',
      ph_privacy_meta: 'Son güncelleme: Mart 2026 · Yürürlük tarihi: Mart 2026',
      /* terms page-hero */
      ph_terms_label: '📋 Yasal', ph_terms_h1: 'Kullanım Koşulları',
      ph_terms_sub: 'CoupleHub\'ı kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. Lütfen dikkatlice okuyun.',
      ph_terms_meta: 'Son güncelleme: Mart 2026 · Yürürlük tarihi: Mart 2026',
      /* faq page-hero */
      ph_faq_label: '💬 Yardım Merkezi', ph_faq_h1: 'Sık Sorulan Sorular',
      ph_faq_sub: 'CoupleHub hakkında merak ettiğiniz her şeyin cevabı burada.',
      /* contact page-hero */
      ph_contact_label: '📬 İletişim', ph_contact_h1: 'Merhaba! 👋',
      ph_contact_sub: 'Sorularınız, önerileriniz veya hesap silme talepleri için bize ulaşabilirsiniz.',
      /* account-deletion page-hero */
      ph_deletion_label: '🗑️ Veri Yönetimi', ph_deletion_h1: 'Hesap Silme',
      ph_deletion_sub: 'Hesabınızı ve tüm verilerinizi kalıcı olarak silme hakkına sahipsiniz.',
      ph_deletion_meta: 'Bu işlem geri alınamaz — lütfen dikkatlice okuyun.'
    },
    en: {
      /* nav */
      nav_home: 'Home', nav_privacy: 'Privacy', nav_terms: 'Terms',
      nav_faq: 'FAQ', nav_contact: 'Contact', nav_account_delete: 'Delete Account',
      /* footer */
      ft_brand_p: 'The private platform where couples can manage their special moments, memories, and daily life together.',
      ft_col1_h4: 'App', ft_col1_a1: 'Features', ft_col1_a2: 'Download', ft_col1_a3: 'FAQ',
      ft_col2_h4: 'Legal', ft_col2_a1: 'Privacy Policy', ft_col2_a2: 'Terms of Service', ft_col2_a3: 'Account Deletion',
      ft_col3_h4: 'Contact', ft_col3_a1: 'Contact',
      ft_copyright: '© 2026 CoupleHub. All rights reserved.', ft_dev: 'Developer:',
      /* index hero */
      hero_tag: '✨ Designed for couples',
      hero_h1_line1: 'Share Everything', hero_h1_emp: 'With Your Love',
      hero_sub: 'CoupleHub is a private platform where couples can securely manage their special moments, memories, and daily life together.',
      hero_btn_download: '📱 Download App', hero_btn_features: 'Explore Features',
      hero_stat1: 'End-to-End<br>Encrypted', hero_stat2: 'Drive<br>Backup', hero_stat3: 'Completely<br>Private',
      /* index features */
      feat_label: '🌟 Features', feat_h2: 'Everything Every Couple Needs',
      feat_sub: 'Discover all the beauty of living together in one single app.',
      feat1_h3: 'Private Messaging', feat1_p: 'End-to-end encrypted messages, image and video sharing. A private chat space only the two of you can see.',
      feat2_h3: 'Shared Gallery', feat2_p: 'Share photos and videos you\'ve taken together. Automatic backup with Google Drive.',
      feat3_h3: 'Couple Calendar', feat3_p: 'Plan anniversaries, dates and special days together. Never miss anything with reminders.',
      feat4_h3: 'Love Coupons', feat4_p: 'Create and send special love coupons to each other. Make romantic surprises.',
      feat5_h3: 'Time Capsule', feat5_p: 'Leave letters and memories for the future. Digital time capsules that open on the date you set.',
      feat6_h3: 'Music Matching', feat6_p: 'Add your relationship\'s song, share your music playlists. Compatible with Spotify and YouTube Music.',
      feat7_h3: 'Shared Map', feat7_p: 'Add places you\'ve been and want to go on the map. Plan places to explore together.',
      feat8_h3: 'Voice & Video Calls', feat8_p: 'Secure WebRTC-based calls. No third-party server required, direct connection.',
      feat9_h3: 'Cloud Storage', feat9_p: 'Unlimited media storage with Google Drive integration. Your data is always safe.',
      /* index how */
      how_label: '🚀 How It Works', how_h2: 'Get Started in 3 Steps',
      how_sub: 'Connect with your partner and start sharing in just a few minutes.',
      step1_h3: 'Create an Account', step1_p: 'Sign up in seconds with your Google or Apple account. No need to remember passwords.',
      step2_h3: 'Invite Your Partner', step2_p: 'Send your unique invite code to your partner. Once they enter the code, the connection is made.',
      step3_h3: 'Start Sharing', step3_p: 'Photos, messages, plans… Start living together in your own private world.',
      /* index security */
      sec_label: '🔒 Security', sec_h2_line1: 'Your Data Is Always', sec_h2_emp: 'Yours',
      sec_p: 'We take your privacy seriously. CoupleHub uses industry-standard security measures to protect your data.',
      sec_btn: 'Read Privacy Policy →',
      sec1_h4: 'End-to-End Encryption', sec1_p: 'Your messages can only be read by you and your partner. Our servers cannot access the content.',
      sec2_h4: 'HTTPS / TLS', sec2_p: 'All data is transmitted over encrypted connections. Protection against man-in-the-middle attacks.',
      sec3_h4: 'JWT Token System', sec3_p: 'Short-lived access tokens and a secure refresh mechanism. Passwords are never stored.',
      sec4_h4: 'You Control Your Data', sec4_p: 'You can permanently delete your account and all your data at any time.',
      /* index download */
      dl_h2: 'Download Now 📱', dl_p: 'Free for iOS and Android. Start sharing with your loved one.',
      dl_appstore_small: 'Download on the', dl_appstore: 'App Store',
      dl_gplay_small: 'Get it on', dl_gplay: 'Google Play',
      dl_req: 'Requires iOS 15+ and Android 9+',
      /* privacy page-hero */
      ph_privacy_label: '🔒 Legal', ph_privacy_h1: 'Privacy Policy',
      ph_privacy_sub: 'We transparently explain how we collect, use, and protect your data.',
      ph_privacy_meta: 'Last updated: March 2026 · Effective date: March 2026',
      /* terms page-hero */
      ph_terms_label: '📋 Legal', ph_terms_h1: 'Terms of Service',
      ph_terms_sub: 'By using CoupleHub, you agree to the following terms. Please read carefully.',
      ph_terms_meta: 'Last updated: March 2026 · Effective date: March 2026',
      /* faq page-hero */
      ph_faq_label: '💬 Help Center', ph_faq_h1: 'Frequently Asked Questions',
      ph_faq_sub: 'Find answers to everything you want to know about CoupleHub.',
      /* contact page-hero */
      ph_contact_label: '📬 Contact', ph_contact_h1: 'Hello! 👋',
      ph_contact_sub: 'Reach out to us for questions, suggestions, or account deletion requests.',
      /* account-deletion page-hero */
      ph_deletion_label: '🗑️ Data Management', ph_deletion_h1: 'Account Deletion',
      ph_deletion_sub: 'You have the right to permanently delete your account and all your data.',
      ph_deletion_meta: 'This action is irreversible — please read carefully.'
    }
  };

  /* ── CONFIG ───────────────────────────────────────────── */
  var NAV_LINKS = [
    { key: 'nav_home',           href: 'index.html',            page: 'home' },
    { key: 'nav_privacy',        href: 'privacy.html',          page: 'privacy' },
    { key: 'nav_terms',          href: 'terms.html',            page: 'terms' },
    { key: 'nav_faq',            href: 'faq.html',              page: 'faq' },
    { key: 'nav_contact',        href: 'contact.html',          page: 'contact' },
    { key: 'nav_account_delete', href: 'account-deletion.html', page: 'account-deletion', cls: 'nav-cta' }
  ];

  /* ── STATE ────────────────────────────────────────────── */
  function detectLang() {
    var saved = localStorage.getItem('ch_lang');
    if (saved) return saved;
    var nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return nav.startsWith('tr') ? 'tr' : 'en';
  }

  var currentLang  = detectLang();
  var currentTheme = localStorage.getItem('ch_theme') || 'dark';

  /* ── BUILD NAV ────────────────────────────────────────── */
  function buildNav() {
    var activePage = document.documentElement.getAttribute('data-page') || 'home';
    var links = NAV_LINKS.map(function (l) {
      var classes = [];
      if (l.cls)              classes.push(l.cls);
      if (l.page === activePage) classes.push('active');
      var cls = classes.length ? ' class="' + classes.join(' ') + '"' : '';
      return '<a href="' + l.href + '"' + cls + ' data-i18n="' + l.key + '">' + (T[currentLang][l.key] || '') + '</a>';
    }).join('\n      ');

    return '<nav class="nav">\n' +
      '    <a href="index.html" class="nav-logo">\n' +
      '      <div class="logo-icon"><img src="/assets/CoupleHub_logo_512x512.png" alt="CoupleHub" /></div>\n' +
      '      CoupleHub\n' +
      '    </a>\n' +
      '    <div class="nav-right">\n' +
      '      <div class="nav-links" id="navLinks">\n' +
      '        ' + links + '\n' +
      '      </div>\n' +
      '      <div class="nav-actions">\n' +
      '        <button class="icon-btn" id="langToggle" onclick="toggleLang()">🌐 ' + (currentLang === 'tr' ? 'EN' : 'TR') + '</button>\n' +
      '        <button class="icon-btn" id="themeToggle" onclick="toggleTheme()">' + (currentTheme === 'dark' ? '☀️' : '🌙') + '</button>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="hamburger" id="hamburgerBtn">\n' +
      '      <span></span><span></span><span></span>\n' +
      '    </div>\n' +
      '  </nav>';;
  }

  /* ── BUILD FOOTER ─────────────────────────────────────── */
  function buildFooter() {
    var l = currentLang;
    return '<footer>\n' +
      '  <div class="footer-grid">\n' +
      '    <div class="footer-brand">\n' +
      '      <a href="index.html" class="nav-logo" style="margin-bottom:8px;display:inline-flex;">\n' +
      '        <div class="logo-icon"><img src="/assets/CoupleHub_logo_512x512.png" alt="CoupleHub" /></div> CoupleHub\n' +
      '      </a>\n' +
      '      <p data-i18n="ft_brand_p">' + (T[l]['ft_brand_p'] || '') + '</p>\n' +
      '      <div class="social-links">\n' +
      '        <a href="mailto:furkan.er.34@gmail.com" class="social-link" title="Email">✉️</a>\n' +
      '        <a href="https://furkanerdogan.com" class="social-link" title="Website" target="_blank">🌐</a>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="footer-col">\n' +
      '      <h4 data-i18n="ft_col1_h4">' + (T[l]['ft_col1_h4'] || '') + '</h4>\n' +
      '      <a href="index.html#features" data-i18n="ft_col1_a1">' + (T[l]['ft_col1_a1'] || '') + '</a>\n' +
      '      <a href="index.html#download" data-i18n="ft_col1_a2">' + (T[l]['ft_col1_a2'] || '') + '</a>\n' +
      '      <a href="faq.html" data-i18n="ft_col1_a3">' + (T[l]['ft_col1_a3'] || '') + '</a>\n' +
      '    </div>\n' +
      '    <div class="footer-col">\n' +
      '      <h4 data-i18n="ft_col2_h4">' + (T[l]['ft_col2_h4'] || '') + '</h4>\n' +
      '      <a href="privacy.html" data-i18n="ft_col2_a1">' + (T[l]['ft_col2_a1'] || '') + '</a>\n' +
      '      <a href="terms.html" data-i18n="ft_col2_a2">' + (T[l]['ft_col2_a2'] || '') + '</a>\n' +
      '      <a href="account-deletion.html" data-i18n="ft_col2_a3">' + (T[l]['ft_col2_a3'] || '') + '</a>\n' +
      '    </div>\n' +
      '    <div class="footer-col">\n' +
      '      <h4 data-i18n="ft_col3_h4">' + (T[l]['ft_col3_h4'] || '') + '</h4>\n' +
      '      <a href="contact.html" data-i18n="ft_col3_a1">' + (T[l]['ft_col3_a1'] || '') + '</a>\n' +
      '      <a href="mailto:furkan.er.34@gmail.com">furkan.er.34@gmail.com</a>\n' +
      '      <a href="https://furkanerdogan.com" target="_blank">furkanerdogan.com</a>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '  <div class="footer-bottom">\n' +
      '    <span data-i18n="ft_copyright">' + (T[l]['ft_copyright'] || '') + '</span>\n' +
      '    <span><span data-i18n="ft_dev">' + (T[l]['ft_dev'] || '') + '</span> <a href="https://furkanerdogan.com" target="_blank">Furkan Erdoğan</a></span>\n' +
      '  </div>\n' +
      '</footer>';
  }

  /* ── INJECT ───────────────────────────────────────────── */
  function inject() {
    var navEl = document.getElementById('ch-nav');
    if (navEl) {
      var tmp = document.createElement('div');
      tmp.innerHTML = buildNav();
      navEl.parentNode.replaceChild(tmp.firstChild, navEl);
      // hamburger click
      var hb = document.getElementById('hamburgerBtn');
      if (hb) hb.addEventListener('click', function () {
        document.getElementById('navLinks').classList.toggle('open');
      });
    }
    var ftEl = document.getElementById('ch-footer');
    if (ftEl) {
      var tmp2 = document.createElement('div');
      tmp2.innerHTML = buildFooter();
      ftEl.parentNode.replaceChild(tmp2.firstChild, ftEl);
    }
  }

  /* ── APPLY LANG ───────────────────────────────────────── */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('ch_lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (T[lang] && T[lang][key] !== undefined) el.innerHTML = T[lang][key];
    });

    /* show/hide lang blocks */
    document.querySelectorAll('.lang-tr, .lang-en').forEach(function (el) {
      el.style.display = '';
    });
    var hide = lang === 'tr' ? 'lang-en' : 'lang-tr';
    document.querySelectorAll('.' + hide).forEach(function (el) {
      el.style.display = 'none';
    });

    var btn = document.getElementById('langToggle');
    if (btn) btn.innerHTML = '🌐 ' + (lang === 'tr' ? 'EN' : 'TR');
  }

  function toggleLang() { applyLang(currentLang === 'tr' ? 'en' : 'tr'); }

  /* ── APPLY THEME ──────────────────────────────────────── */
  function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('ch_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    var btn = document.getElementById('themeToggle');
    if (btn) btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
  }

  function toggleTheme() { applyTheme(currentTheme === 'dark' ? 'light' : 'dark'); }

  /* ── EXPOSE GLOBALS ───────────────────────────────────── */
  window.toggleLang  = toggleLang;
  window.toggleTheme = toggleTheme;

  /* ── INIT ─────────────────────────────────────────────── */
  /* Apply theme immediately (before paint) to avoid flash */
  document.documentElement.setAttribute('data-theme', currentTheme);

  document.addEventListener('DOMContentLoaded', function () {
    inject();
    applyTheme(currentTheme);
    applyLang(currentLang);
  });

})();
