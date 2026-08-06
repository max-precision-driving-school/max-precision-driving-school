# -*- coding: utf-8 -*-
"""Genera las páginas de Max Precision Driving School — v4."""
import io, os

BASE = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
SITE = 'https://www.maxprecisiondriving.com'

NAV = [
    ('index.html',           'Home',            'Inicio'),
    ('rates.html',           'Lessons &amp; Rates', 'Clases y tarifas'),
    ('five-hour-class.html', '5 Hour Class',    'Clase de 5 horas'),
    ('contact.html',         'Contact',         'Contacto'),
]
WA = ('https://wa.me/19177348361?text=Hi%2C%20I%20saw%20your%20website%20and%20'
      'I%27d%20like%20to%20book%20driving%20lessons.')

LD = '''{
  "@context":"https://schema.org","@type":["LocalBusiness","DrivingSchool"],
  "@id":"%s/#business","name":"Max Precision Driving School Inc.","url":"%s/",
  "telephone":"+1-917-734-8361","image":"%s/assets/og-base.jpg","priceRange":"$30-$1080",
  "address":{"@type":"PostalAddress","streetAddress":"22-55 31st St, Suite UL6, 2nd Floor","addressLocality":"Astoria","addressRegion":"NY","postalCode":"11105","addressCountry":"US"},
  "geo":{"@type":"GeoCoordinates","latitude":40.774902,"longitude":-73.9120009},
  "areaServed":[{"@type":"City","name":"Queens"},{"@type":"City","name":"New York City"}],
  "availableLanguage":["English","Spanish"],
  "openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"18:00"}],
  "sameAs":["https://www.instagram.com/maxprecisiondrivingschool/","https://www.facebook.com/profile.php?id=61585295096633"]
}''' % (SITE, SITE, SITE)

MARCA = ('<svg class="brand-mk" viewBox="0 0 512 512" aria-hidden="true">'
         '<use href="assets/marca.svg#x"/></svg>')


def head(page, title, desc, extra_ld=''):
    ld = '<script type="application/ld+json">%s</script>' % LD
    if extra_ld:
        ld += '\n<script type="application/ld+json">%s</script>' % extra_ld
    canonical = SITE + '/' + ('' if page == 'index.html' else page)
    pre = ('<link rel="preload" as="image" href="assets/hero-drive-poster.jpg" fetchpriority="high">'
           if page == 'index.html' else '')
    return f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{canonical}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta name="theme-color" content="#0B0B09">
<meta name="keywords" content="driving, school, astoria, ny, auto, drive">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Max Precision Driving School">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{canonical}">
<meta property="og:image" content="{SITE}/assets/og-base.jpg">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:locale" content="en_US"><meta property="og:locale:alternate" content="es_US">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="assets/marca.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="assets/marca.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap">
{pre}
<link rel="stylesheet" href="assets/site.css">
{ld}
</head>
<body>
<a class="skip" href="#main" data-en="Skip to content" data-es="Ir al contenido">Skip to content</a>
'''


def header(current):
    links = ''.join(
        f'<a href="{h}"{" aria-current=\"page\"" if h == current else ""} data-en="{en}" data-es="{es}">{en}</a>'
        for h, en, es in NAV)
    return f'''<header class="hdr" id="hdr"><div class="wrap">
  <a class="brand" href="index.html" aria-label="Max Precision Driving School">
    <img class="brand-mk" src="assets/marca.svg" alt="" width="44" height="44">
    <span class="brand-tx"><b>Max Precision</b><span>Driving School</span></span>
  </a>
  <nav class="nav" id="nav" aria-label="Main">{links}</nav>
  <div class="hdr-r">
    <div class="lang" role="group" aria-label="Language / Idioma">
      <button type="button" data-lang="en" aria-pressed="true">EN</button>
      <button type="button" data-lang="es" aria-pressed="false">ES</button>
    </div>
    <a class="btn btn-sm" href="{WA}" target="_blank" rel="noopener" data-en="Book now" data-es="Reservar">Book now</a>
    <button class="burger" id="burger" aria-label="Menu" aria-expanded="false" aria-controls="nav"><span></span></button>
  </div>
</div></header>
<main id="main">
'''


FB = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z"/></svg>'

IG = ('<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38C1.35 2.68.93 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13.67.66 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.13-1.38.66-.67 1.08-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.93 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm7.85-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>')
WAS = ('<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 01-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.42 9.42 0 01-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.9.99 6.68 2.77a9.38 9.38 0 012.76 6.68c0 5.2-4.24 9.45-9.46 9.45zM20.5 3.49A11.8 11.8 0 0012.04 0C5.46 0 .1 5.35.1 11.93c0 2.1.55 4.16 1.6 5.97L0 24l6.23-1.63a11.9 11.9 0 005.8 1.48h.01c6.58 0 11.94-5.35 11.94-11.93a11.86 11.86 0 00-3.48-8.43z"/></svg>')

FOOTER = f'''</main>
<footer class="ft"><div class="wrap">
  <div class="ft-top">
    <div class="ft-brand-col">
      <img class="ft-logo" src="assets/logo-lockup.svg" alt="Max Precision Driving School" width="900" height="220" loading="lazy">
      <p data-en="Follow us on social media."
         data-es="Síguenos en nuestras redes.">Follow us on social media.</p>
      <div class="ft-soc">
        <a class="soc-ig" href="https://www.instagram.com/maxprecisiondrivingschool/" target="_blank" rel="noopener" aria-label="Instagram">{IG}</a>
        <a class="soc-fb" href="https://www.facebook.com/profile.php?id=61585295096633&amp;sk=about" target="_blank" rel="noopener" aria-label="Facebook">{FB}</a>
        <a class="soc-wa" href="{WA}" target="_blank" rel="noopener" aria-label="WhatsApp">{WAS}</a>
      </div>
    </div>
    <div>
      <h4 data-en="Important Links" data-es="Enlaces importantes">Important Links</h4>
      <ul>
        <li><a href="refund-policy.html" data-en="Refund Policy" data-es="Política de reembolso">Refund Policy</a></li>
        <li><a href="rates.html" data-en="Lessons &amp; Rates" data-es="Clases y tarifas">Lessons &amp; Rates</a></li>
        <li><a href="five-hour-class.html" data-en="5 Hour Class" data-es="Clase de 5 horas">5 Hour Class</a></li>
        <li><a href="contact.html" data-en="Contact" data-es="Contacto">Contact</a></li>
      </ul>
    </div>
    <div>
      <h4 data-en="Visit us" data-es="Visítanos">Visit us</h4>
      <ul>
        <li>22-55 31st Suite UL6 2nd Floor<br>Astoria, NY 11105</li>
        <li><a href="tel:+19177348361">(917)-734-8361</a></li>
      </ul>
    </div>
  </div>
  <div class="ft-bot">Copyright © <span data-yr>2026</span> Max Precision Driving School · by <span class="ft-by">Nilton Girón</span></div>
</div></footer>

<a class="wa-float" href="{WA}" target="_blank" rel="noopener" aria-label="WhatsApp">
  {WAS}<span class="wa-float-t" data-en="Message us" data-es="Escríbenos">Message us</span>
</a>
<script src="assets/site.js" defer></script>
</body>
</html>
'''


def build(page, title, desc, body, extra_ld=''):
    html = head(page, title, desc, extra_ld) + header(page) + body + FOOTER
    io.open(os.path.join(BASE, page), 'w', encoding='utf-8').write(html)
    print('  %-24s %6.1f KB' % (page, len(html.encode('utf-8')) / 1024))


if __name__ == '__main__':
    from pages import PAGES
    print('Generando:')
    for p in PAGES:
        build(**p)
    print('Listo.')
