# -*- coding: utf-8 -*-
"""Contenido de las 5 páginas — v4.

🚨 REGLA DE ESTE PROYECTO: el texto en inglés es el del sitio original de la escuela,
COPIADO LITERAL de maxprecisiondriving.com. El español es su traducción fiel.
"""

WA = ('https://wa.me/19177348361?text=Hi%2C%20I%20saw%20your%20website%20and%20'
      'I%27d%20like%20to%20book%20driving%20lessons.')
MAPS = 'https://www.google.com/maps/place/Max+Precision+Driving+School/@40.774902,-73.9120009,17z'
REVIEWS = MAPS + '/data=!4m8!3m7!1s0x89c25fbce75da18d:0xd7043dc75cfb9a3!9m1!1b1'
REGISTRY = 'https://data.ny.gov/Transportation/DMV-Driving-Schools/3p6i-cv8y'

# ── iconos (un solo set, un solo grosor de trazo) ───────────────────────────
CHECK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4.5 12.5 5 5 10-11"/></svg>'
I_QUALITY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5 4 6v6c0 5 3.4 8.5 8 9.5 4.6-1 8-4.5 8-9.5V6l-8-3.5Z"/><path d="m8.8 12.2 2.2 2.2 4.2-4.6"/></svg>'
I_MISSION = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/></svg>'
I_VALUE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 5.6a5 5 0 0 0-7.1 0L12 6.9l-1.3-1.3a5 5 0 1 0-7.1 7.1l8.4 8.4 8.4-8.4a5 5 0 0 0 0-7.1Z"/></svg>'
I_PIN = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'
I_TRAIN = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 10h14M8.5 21l2-3.5M15.5 21l-2-3.5"/></svg>'
I_BUS = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="13" rx="2"/><path d="M4 10h16M8 21l1.5-4M16 21l-1.5-4"/></svg>'
I_PHONE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2Z"/></svg>'
I_CLOCK = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 6.8V12l3.4 2"/></svg>'
I_ID = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M6.5 10.5h4M6.5 14h6M15.5 9.5h3"/></svg>'
I_DOWN = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg>'
I_CAL  = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>'
I_HAND = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13V6.5a1.5 1.5 0 0 1 3 0V12"/><path d="M7 11.5v-6a1.5 1.5 0 0 1 3 0V12"/><path d="M10 11v-5a1.5 1.5 0 0 1 3 0v6"/><path d="M13 12V8.5a1.5 1.5 0 0 1 3 0V15c0 3.3-2.2 6-5.5 6S5 18.3 5 15l-1-2"/></svg>'
I_REDO = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11A8 8 0 1 0 18 17"/><path d="M20 5v6h-6"/></svg>'
I_BOOK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H19v18H5.5A1.5 1.5 0 0 1 4 19.5Z"/><path d="M4 17h15"/></svg>'

STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
GOOGLE_G = ('<svg class="g-rev-g" viewBox="0 0 48 48" aria-hidden="true">'
            '<path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-2.8-.4-4H24v7.3h12.1c-.2 2-1.6 5-4.5 7l6.9 5.3c4.1-3.8 6.6-9.4 6.6-15.6z"/>'
            '<path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.3c-1.9 1.3-4.4 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-7.1 5.5C8 40.3 15.4 46 24 46z"/>'
            '<path fill="#FBBC05" d="M11.5 28.5c-.5-1.4-.7-2.9-.7-4.5s.3-3.1.7-4.5l-7.1-5.5C2.9 17 2 20.4 2 24s.9 7 2.4 10l7.1-5.5z"/>'
            '<path fill="#EA4335" d="M24 10.7c3.3 0 5.5 1.4 6.7 2.6l5.9-5.8C33 4.1 29.9 2 24 2 15.4 2 8 7.7 4.4 14l7.1 5.5c1.8-5.3 6.7-9.1 12.5-9.1z"/></svg>')


def L(en, es, tag='span', cls=''):
    c = f' class="{cls}"' if cls else ''
    return f'<{tag}{c} data-en="{en}" data-es="{es}">{en}</{tag}>'


def eyebrow(en, es):
    return L(en, es, 'p', 'eyebrow')


def crumb(en, es):
    return (f'<div class="crumb"><a href="index.html" data-en="Home" data-es="Inicio">Home</a>'
            f'<span>/</span>{L(en, es)}</div>')


def greview(name, initials, color, date_en, date_es, text):
    """Tarjeta con la anatomía de una reseña de Google.

    El avatar es de INICIALES sobre color: es exactamente lo que Google muestra
    cuando el perfil no tiene foto. Poner un retrato de banco junto al nombre de
    una persona real que dejó una reseña verdadera sería inventarle la cara.
    """
    return f'''<article class="g-rev">
        <div class="g-rev-top">
          <span class="g-av" style="background:{color}" aria-hidden="true">{initials}</span>
          <span class="g-rev-id"><b>{name}</b>{L(date_en, date_es, "small")}</span>
          {GOOGLE_G}
        </div>
        <div class="g-stars" aria-label="5 out of 5">{STAR * 5}</div>
        <p>{text}</p>
      </article>'''


REVIEWS_HTML = (
    greview('Kevin Nam', 'KN', '#F9C846', 'Google review', 'Reseña de Google',
            "Angel lives up to his reputation! I first found him through reviews at a previous driving school. After taking my first lesson I felt that his calm and friendly teaching method really helped me improve by learning what to work on. I asked to practice specific things and Angel was always accommodating. I'd also recommend taking his highway lessons as he has all sorts of tips.") +
    greview('N Chavda', 'NC', '#7BAAF7', 'Google review', 'Reseña de Google',
            "Amazing instructor and company. Very professional. At first I chose another company due to price but the service reflected the price and I was so unhappy. I moved over to Angel and I can honestly say I learnt so much within a couple of lessons. I felt safe and relaxed the entire time. Thank you, Angel!") +
    greview('Lina Lopez', 'LL', '#F28B82', '4 months ago', 'hace 4 meses',
            "I tend to get very nervous when driving, but Angel was incredibly patient and supportive throughout the process. Thanks to his guidance, I passed my road test on the first try, which I honestly didn't think would be possible. He teaches in both English and Spanish.") +
    greview('Janeth Mendoza', 'JM', '#A7C77E', '4 months ago', 'hace 4 meses',
            "Can't recommend Angel enough! I completed the 5 lesson package with him in a couple of weeks and passed my road test on the first try! Angel is patient, encouraging, and an overall great instructor.") +
    greview('Olga Samakhvastouskaya', 'OS', '#C58AF9', '10 months ago', 'hace 10 meses',
            "I took 15 classes with Angel and passed my road test on the first try. Angel is always on time, very organized, and consistently professional. What stood out the most is that he truly cares about his students' success and never tries to oversell anything.") +
    greview('Adrian Garcia', 'AG', '#78D9C8', '4 months ago', 'hace 4 meses',
            "Angel is an excellent teacher, super patient, and he teaches you everything. I'm so happy I took his classes and passed the test. I went to a cheaper school before, and the experience was terrible. I recommend Angel 100%.") +
    greview('Mithila Hossain', 'MH', '#F6A97A', '8 months ago', 'hace 8 meses',
            "Angel (the owner and instructor of Max Precision Driving School) is amazing. I passed my road test on the first try. Angel is calm, patient and friendly. He gives great tips and is perfect for someone who has no previous experience.") +
    greview('Brisett Chalco', 'BC', '#8AB4F8', '3 months ago', 'hace 3 meses',
            "Max Precision Driving School is the best driving school in Astoria. Angel teaches the exact techniques and instructions needed to pass the driving test. Thanks to his guidance, I passed on the very first try.")
)

GOOGLE_BAR = f'''<div class="g-head rv">
    <span class="g-logo">{GOOGLE_G}<span data-en="Google Reviews" data-es="Reseñas de Google">Google Reviews</span></span>
    <span class="g-sep" aria-hidden="true"></span>
    <span class="g-score tnum">5.0</span>
    <div class="g-stars" aria-label="5 out of 5">{STAR * 5}</div>
    <span class="g-sep" aria-hidden="true"></span>
    <span class="g-meta">{L("Astoria, Queens", "Astoria, Queens")}</span>
  </div>'''


# ═══════════════════════════════════════════════════════════════ HOME
HOME = f'''
<section class="hero">
  <video class="hero-v" src="assets/hero-drive.mp4" poster="assets/hero-drive-poster.jpg"
         muted playsinline loop data-auto aria-label="Driving lesson in Astoria, Queens"></video>
  <div class="wrap hero-in">
    <div class="hero-tags">
      <span class="pill">{L("Astoria, Queens", "Astoria, Queens")}</span>
      <span class="pill">English &amp; Spanish</span>
    </div>
    <h1 data-en="Drive with Confidence. Drive with &lt;span class='mark'&gt;Max Precision&lt;/span&gt;."
        data-es="Maneja con confianza. Maneja con &lt;span class='mark'&gt;Max Precision.&lt;/span&gt;">Drive with Confidence. Drive with <span class="mark">Max Precision.</span></h1>
    <p class="sub" data-en="A driving school in Astoria for first-time and nervous drivers — in English and Spanish, six days a week."
       data-es="Una escuela de manejo en Astoria para quienes manejan por primera vez y para los nerviosos — en inglés y español, seis días a la semana.">A driving school in Astoria for first-time and nervous drivers — in English and Spanish, six days a week.</p>
    <div class="hero-cta">
      <a class="btn" href="rates.html" data-en="Lessons &amp; Rates &lt;span class='ar'&gt;→&lt;/span&gt;" data-es="Clases y tarifas &lt;span class='ar'&gt;→&lt;/span&gt;">Lessons &amp; Rates <span class="ar">→</span></a>
      <a class="btn btn-g" href="{WA}" target="_blank" rel="noopener" data-en="Message us on WhatsApp" data-es="Escríbenos por WhatsApp">Message us on WhatsApp</a>
    </div>
    <div class="hero-stats">
      <div class="hstat"><div class="n tnum"><span data-count="5.0" data-suffix="★">5.0★</span></div><div class="l">{L("Google reviews", "Reseñas en Google")}</div></div>
      <div class="hstat"><div class="n tnum"><span data-count="90">90</span></div><div class="l">{L("minutes per lesson", "minutos por clase")}</div></div>
      <div class="hstat"><div class="n tnum"><span data-count="6">6</span></div><div class="l">{L("days a week, 8AM–6PM", "días a la semana, 8AM–6PM")}</div></div>
      <div class="hstat"><div class="n">EN / ES</div><div class="l">{L("bilingual instructors", "instructores bilingües")}</div></div>
    </div>
  </div>
  <a class="hero-down" href="#why" aria-label="Scroll down">{I_DOWN}</a>
</section>

<div class="ticker" data-ticker aria-hidden="true">
  <div class="ticker-tr"><div class="ticker-set">
    <span>ASTORIA · QUEENS</span><i></i>
    <span>5-HOUR PRE-LICENSING COURSE</span><i></i>
    <span>ROAD TEST PACKAGES</span><i></i>
    <span>ENGLISH &amp; SPANISH</span><i></i>
    <span>DUAL-CONTROL VEHICLES</span><i></i>
    <span>90-MINUTE LESSONS</span><i></i>
    <span>5.0 ★ ON GOOGLE</span><i></i>
  </div></div>
</div>

<section class="sec glow-t" id="why"><div class="wrap">
  <div class="sec-head center">
    {eyebrow("Why us", "Por qué nosotros")}
    <h2 data-en="Why Max Precision Driving School?" data-es="¿Por qué Max Precision Driving School?">Why Max Precision Driving School?</h2>
  </div>
  <div class="feats">
    <article class="feat rv">
      <span class="feat-ic">{I_QUALITY}</span>
      {L("Quality", "Calidad", "h3")}
      <p data-en="We provide our students with a high quality learning experience."
         data-es="Brindamos a nuestros alumnos una experiencia de aprendizaje de alta calidad.">We provide our students with a high quality learning experience.</p>
      <p data-en="Every lesson is personalized, helping you overcome your fears, correct your mistakes, and build the confidence to drive safely and independently."
         data-es="Cada clase es personalizada: te ayuda a superar tus miedos, corregir tus errores y ganar la confianza para manejar con seguridad y por tu cuenta.">Every lesson is personalized, helping you overcome your fears, correct your mistakes, and build the confidence to drive safely and independently.</p>
      <span class="tag">{L("Fluent in English and Spanish", "Hablamos inglés y español")}</span>
    </article>
    <article class="feat rv">
      <span class="feat-ic">{I_MISSION}</span>
      {L("Our Mission", "Nuestra misión", "h3")}
      <p data-en="Our instructors are highly experienced in road etiquette and offer a positive and enlightening environment for all students, especially for first time and nervous drivers."
         data-es="Nuestros instructores tienen amplia experiencia en las normas de la vía y ofrecen un ambiente positivo y esclarecedor para todos los alumnos, en especial para quienes manejan por primera vez y para los nerviosos.">Our instructors are highly experienced in road etiquette and offer a positive and enlightening environment for all students, especially for first time and nervous drivers.</p>
            <p data-en="We teach at the pace of the person in the seat, not the clock. Every lesson is a conversation: what worries you, what you keep getting wrong, and what to do about it next time." data-es="Enseñamos al ritmo de quien va en el asiento, no del reloj. Cada clase es una conversación: qué te preocupa, qué te sigue saliendo mal y qué hacer distinto la próxima vez.">We teach at the pace of the person in the seat, not the clock.</p>
      <span class="tag">{L("Parallel parking &amp; 3 point turn", "Estacionamiento y giro en 3 puntos")}</span>
    </article>
    <article class="feat rv">
      <span class="feat-ic">{I_VALUE}</span>
      {L("Value", "Valor", "h3")}
      <p data-en="We value our students and ensure that they not only pass their road test but gain confidence in their abilities as a driver."
         data-es="Valoramos a nuestros alumnos y nos aseguramos de que no solo aprueben su examen, sino que ganen confianza en sus habilidades como conductores.">We value our students and ensure that they not only pass their road test but gain confidence in their abilities as a driver.</p>
      <span class="tag">{L("The best rates in the neighborhood", "Las mejores tarifas del vecindario")}</span>
    </article>
  </div>
</div></section>

<section class="sec-tight"><div class="wrap">
  <div class="split">
    <div class="rv">
      {eyebrow("The car", "El auto")}
      <h2 style="margin-top:var(--s3)" data-en="Learn in a car built for the test" data-es="Aprende en un auto preparado para el examen">Learn in a car built for the test</h2>
            <ul>
        <li>{CHECK}{L("Dual controls, so an instructor can step in at any moment", "Doble control, para que el instructor pueda intervenir en cualquier momento")}</li>
        <li>{CHECK}{L("Registered to the school, insured and inspected", "Registrado a nombre de la escuela, asegurado e inspeccionado")}</li>
      </ul>
      <a class="btn btn-g" style="margin-top:var(--s4)" href="rates.html" data-en="See lessons &amp; rates &lt;span class='ar'&gt;→&lt;/span&gt;" data-es="Ver clases y tarifas &lt;span class='ar'&gt;→&lt;/span&gt;">See lessons &amp; rates <span class="ar">→</span></a>
    </div>
    <figure class="split-m rv">
      <video src="assets/3pt-turn.mp4" poster="assets/3pt-poster.jpg" muted playsinline loop preload="none" data-auto
             aria-label="Three-point turn practiced in Astoria"></video>
      <figcaption class="split-badge">{L("3 point turn · Astoria", "Giro en 3 puntos · Astoria")}</figcaption>
    </figure>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <div class="sec-head">{eyebrow("How it works", "Cómo funciona")}
    <h2 data-en="From permit to license, and who does what" data-es="Del permiso a la licencia, y a quién le toca qué">From permit to license, and who does what</h2>
    <p class="lede" data-en="Four steps. The first one is yours alone &mdash; the other three we handle with you." data-es="Cuatro pasos. El primero es solo tuyo; los otros tres los hacemos contigo.">Four steps.</p>
  </div>
  <div class="road rv">
    <div>
      <span class="dot tnum">1</span>
      <h3 data-en="Get your learner permit" data-es="Saca tu permiso de aprendizaje">Get your learner permit</h3>
      <p data-en="At a DMV office, with the written test. Nothing else can start until you have it in hand." data-es="En una oficina del DMV, con el examen escrito. Nada más puede empezar hasta que lo tengas.">At a DMV office, with the written test.</p>
      <span class="who" data-en="You, at the DMV" data-es="Tú, en el DMV">You, at the DMV</span>
    </div>
    <div>
      <span class="dot tnum">2</span>
      <h3 data-en="Take the 5 hour class" data-es="Toma la clase de 5 horas">Take the 5 hour class</h3>
      <p data-en="You walk out with the MV-278 certificate. It is included in every package we sell." data-es="Sales con el certificado MV-278. Va incluido en todos nuestros paquetes.">You walk out with the MV-278 certificate.</p>
      <span class="who us" data-en="With us" data-es="Con nosotros">With us</span>
    </div>
    <div>
      <span class="dot tnum">3</span>
      <h3 data-en="Practice on the real streets" data-es="Practica en las calles reales">Practice on the real streets</h3>
      <p data-en="90-minute lessons in a dual-control car, with an instructor beside you the whole time." data-es="Clases de 90 minutos en un auto de doble control, con un instructor a tu lado todo el tiempo.">90-minute lessons in a dual-control car.</p>
      <span class="who us" data-en="With us" data-es="Con nosotros">With us</span>
    </div>
    <div>
      <span class="dot tnum">4</span>
      <h3 data-en="Sit the road test" data-es="Rinde el examen de manejo">Sit the road test</h3>
      <p data-en="We book the appointment and lend you the car for the test. You bring the original certificate." data-es="Agendamos la cita y te prestamos el auto para el examen. Tú llevas el certificado original.">We book the appointment and lend you the car.</p>
      <span class="who us" data-en="With us" data-es="Con nosotros">With us</span>
    </div>
  </div>
</div></section>

<section class="sec glow-t"><div class="wrap">
  <div class="sec-head center">
    {eyebrow("Student Reviews", "Reseñas de alumnos")}
    <h2 data-en="What our students say" data-es="Lo que dicen nuestros alumnos">What our students say</h2>
  </div>
  {GOOGLE_BAR}
</div>
<div class="marq" data-marq style="margin-top:var(--s5)">
  <div class="marq-track"><div class="marq-set">{REVIEWS_HTML}</div></div>
</div>
<div class="wrap">
  <p class="marq-note" data-en="Published on our Google Business Profile. Profile initials shown as they appear on Google."
     data-es="Publicadas en nuestro perfil de Google. Las iniciales se muestran tal como aparecen en Google.">Published on our Google Business Profile.</p>
</div>
</section>

<section class="cta-band"><div class="wrap in">
  {eyebrow("Get started", "Empieza")}
  <h2 data-en="Ready to start driving?" data-es="¿Listo para empezar a manejar?">Ready to start driving?</h2>
  <p class="lede" data-en="Message us and we'll tell you exactly which package fits where you're starting from."
     data-es="Escríbenos y te decimos exactamente qué paquete te conviene según tu punto de partida.">Message us and we'll tell you exactly which package fits where you're starting from.</p>
  <div class="cta">
    <a class="btn" href="{WA}" target="_blank" rel="noopener" data-en="Message us on WhatsApp &lt;span class='ar'&gt;→&lt;/span&gt;" data-es="Escríbenos por WhatsApp &lt;span class='ar'&gt;→&lt;/span&gt;">Message us on WhatsApp <span class="ar">→</span></a>
    <a class="btn btn-g" href="rates.html" data-en="See packages" data-es="Ver paquetes">See packages</a>
  </div>
</div></section>
'''


# ═══════════════════════════════════════════════════════════════ RATES
def pack(nm, nm_es, price, dur, dur_es, lines, feat=False, note='', note_es='', ses=0):
    """🚨 §76.21(l): duración y cantidad de clases al MISMO tamaño que el precio."""
    items = ''.join(f'<li>{CHECK}{L(a, b)}</li>' for a, b in lines)
    flag = (f'<span class="pack-flag">{STAR}{L("Most Popular", "El más elegido")}</span>' if feat else '')
    nota = f'<p class="pack-note">{L(note, note_es)}</p>' if note else ''
    return f'''<article class="pack{' is-top' if feat else ''} rv" data-ses="{ses}" data-price="{price}" data-nmes="{nm_es}" data-nmen="{nm}" data-dures="{dur_es}" data-duren="{dur}">
      {flag}<span class="pack-nm">{L(nm, nm_es)}</span>
      <p class="pack-amt">${price}<span class="pack-dur">{L(dur, dur_es)}</span></p>{nota}
      <ul>{items}</ul>
      <a class="btn{'' if feat else ' btn-g'}" data-pack-cta href="{WA}" target="_blank" rel="noopener" data-en="Book this" data-es="Reservar">Book this</a>
    </article>'''


RATES = f'''
<section class="phead"><div class="wrap">
  {crumb("Lessons &amp; Rates", "Clases y tarifas")}
  <h1 data-en="Lessons &amp; Rates" data-es="Clases y tarifas">Lessons &amp; Rates</h1>
  <p class="lede" data-en="At Max Precision Driving School" data-es="En Max Precision Driving School">At Max Precision Driving School</p>
  <div class="phead-facts">
    <span class="pill"><i></i>{L("6 days a week (8AM - 6PM)", "6 días a la semana (8AM - 6PM)")}</span>
    <span class="pill"><i></i>{L("Each lesson is 90 minutes", "Cada clase es de 90 minutos")}</span>
    <span class="pill"><i></i>{L("Highway lessons available", "Clases en autopista disponibles")}</span>
  </div>
</div></section>

<section class="sec-tight"><div class="wrap">
  <div class="sec-head">{eyebrow("Individual Prices", "Precios individuales")}
    <h2 data-en="Build your own total" data-es="Arma tu propio total">Build your own total</h2>
    <p class="lede" data-en="Tap what you need. The total updates as you go, and you can send us the exact list on WhatsApp." data-es="Toca lo que necesitas. El total se actualiza solo, y puedes mandarnos la lista exacta por WhatsApp.">Tap what you need.</p>
  </div>

  <div class="pricer" id="pricer">
    <div class="pr-list">
      <div class="pr-row rv" data-item="lesson" data-price="100" data-many="1"
           data-lbl-en="1 driving lesson" data-lbl-es="1 clase de manejo">
        <span class="pr-nm">{L("1 driving lesson", "1 clase de manejo")}</span>
        <span class="pr-amt-w"><span class="pr-amt">$100</span><span class="pr-dur">{L("90 minutes", "90 minutos")}</span></span>
        <div class="pr-ctl" role="group" aria-label="1 driving lesson">
          <button type="button" class="pr-b" data-step="-1" aria-label="menos">&#8722;</button>
          <output class="pr-q" aria-live="polite">0</output>
          <button type="button" class="pr-b" data-step="1" aria-label="mas">+</button>
        </div>
      </div>
      <div class="pr-row rv" data-item="five" data-price="65" data-many="0"
           data-lbl-en="5 Hour Pre-Licensing Class" data-lbl-es="Clase de 5 horas previa a la licencia">
        <span class="pr-nm">{L("5 Hour Pre-Licensing Class", "Clase de 5 horas previa a la licencia")}</span>
        <span class="pr-amt-w"><span class="pr-amt">$65</span><span class="pr-dur">{L("5 hours", "5 horas")}</span></span>
        <div class="pr-ctl">
          <button type="button" class="pr-tog" data-toggle aria-pressed="false">
            <span class="pr-box" aria-hidden="true"></span>
            <span class="pr-tog-t" data-en="Add" data-es="Agregar">Add</span>
          </button>
        </div>
      </div>
      <div class="pr-row rv" data-item="appt" data-price="30" data-many="0"
           data-lbl-en="Road test appointment" data-lbl-es="Cita para el examen de manejo">
        <span class="pr-nm">{L("Road test appointment", "Cita para el examen de manejo")}</span>
        <span class="pr-amt-w"><span class="pr-amt">$30</span></span>
        <div class="pr-ctl">
          <button type="button" class="pr-tog" data-toggle aria-pressed="false">
            <span class="pr-box" aria-hidden="true"></span>
            <span class="pr-tog-t" data-en="Add" data-es="Agregar">Add</span>
          </button>
        </div>
      </div>
      <div class="pr-row rv" data-item="rental" data-price="150" data-many="0"
           data-lbl-en="Car rental for road test" data-lbl-es="Alquiler del auto para el examen">
        <span class="pr-nm">{L("Car rental for road test", "Alquiler del auto para el examen")}</span>
        <span class="pr-amt-w"><span class="pr-amt">$150</span></span>
        <div class="pr-ctl">
          <button type="button" class="pr-tog" data-toggle aria-pressed="false">
            <span class="pr-box" aria-hidden="true"></span>
            <span class="pr-tog-t" data-en="Add" data-es="Agregar">Add</span>
          </button>
        </div>
      </div>
      <div class="pr-row rv" data-item="highway" data-price="120" data-many="1"
           data-lbl-en="Highway lesson" data-lbl-es="Clase en autopista">
        <span class="pr-nm">{L("Highway lesson", "Clase en autopista")}</span>
        <span class="pr-amt-w"><span class="pr-amt">$120</span><span class="pr-dur">{L("90 minutes", "90 minutos")}</span></span>
        <div class="pr-ctl" role="group" aria-label="Highway lesson">
          <button type="button" class="pr-b" data-step="-1" aria-label="menos">&#8722;</button>
          <output class="pr-q" aria-live="polite">0</output>
          <button type="button" class="pr-b" data-step="1" aria-label="mas">+</button>
        </div>
      </div>
      <div class="pr-row rv" data-item="dup" data-price="30" data-many="0"
           data-lbl-en="Duplicate MV-278" data-lbl-es="Duplicado del MV-278">
        <span class="pr-nm">{L("Duplicate MV-278", "Duplicado del MV-278")}</span>
        <span class="pr-amt-w"><span class="pr-amt">$30</span></span>
        <div class="pr-ctl">
          <button type="button" class="pr-tog" data-toggle aria-pressed="false">
            <span class="pr-box" aria-hidden="true"></span>
            <span class="pr-tog-t" data-en="Add" data-es="Agregar">Add</span>
          </button>
        </div>
      </div>
    </div>

    <aside class="pr-sum" aria-live="polite">
      <span class="pr-sum-k" data-en="Your total" data-es="Tu total">Your total</span>
      <p class="pr-total tnum">$0</p>
      <ul class="pr-detail" id="pr-detail"></ul>
      <p class="pr-empty" data-en="Nothing selected yet." data-es="Todavia no elegiste nada.">Nothing selected yet.</p>
      <div class="pr-hint" id="pr-hint" hidden></div>
      <a class="btn pr-go" id="pr-go" href="{WA}" target="_blank" rel="noopener" data-en="Send this list &lt;span class=&#39;ar&#39;&gt;&#8594;&lt;/span&gt;" data-es="Enviar esta lista &lt;span class=&#39;ar&#39;&gt;&#8594;&lt;/span&gt;">Send this list <span class="ar">&#8594;</span></a>
      <button type="button" class="pr-reset" id="pr-reset" data-en="Clear" data-es="Limpiar">Clear</button>
    </aside>
  </div>
</div></section>

<section class="sec glow-t"><div class="wrap">
  <div class="sec-head center">{eyebrow("Base Packages", "Paquetes base")}
    <h2 data-en="Base Packages" data-es="Paquetes base">Base Packages</h2>
    <p class="lede" data-en="Every package includes the 5 Hour Class, the road test appointment and the car for the test."
       data-es="Todo paquete incluye la clase de 5 horas, la cita del examen y el auto para rendirlo.">Every package includes the 5 Hour Class, the road test appointment and the car for the test.</p></div>
  <div class="packs">
    {pack("Package #1", "Paquete #1", "670", "10 lessons of 45 minutes", "10 clases de 45 minutos", [
        ("Given in 5 sessions of 90 minutes each", "En 5 sesiones de 90 minutos cada una"),
        ("5 Hour Pre-Licensing Class", "Clase de 5 horas"),
        ("Road test appointment  (Wait time 2-3 weeks)", "Cita para el examen  (tiempo de espera 2-3 semanas)"),
        ("Car for road test", "Auto para el examen")], feat=True, ses=5)}
    {pack("Package #2", "Paquete #2", "760", "12 lessons of 45 minutes", "12 clases de 45 minutos", [
        ("Given in 6 sessions of 90 minutes each", "En 6 sesiones de 90 minutos cada una"),
        ("5 Hour Pre-Licensing Class", "Clase de 5 horas"),
        ("Road test appointment  (Wait time 2-3 weeks)", "Cita para el examen  (tiempo de espera 2-3 semanas)"),
        ("Car for road test", "Auto para el examen")], ses=6)}
    {pack("Package #3", "Paquete #3", "850", "14 lessons of 45 minutes", "14 clases de 45 minutos", [
        ("Given in 7 sessions of 90 minutes each", "En 7 sesiones de 90 minutos cada una"),
        ("5 Hour Pre-Licensing Class", "Clase de 5 horas"),
        ("Road test appointment  (Wait time 2-3 weeks)", "Cita para el examen  (tiempo de espera 2-3 semanas)"),
        ("Car for road test", "Auto para el examen")], ses=7)}
    {pack("Package #4", "Paquete #4", "940", "16 lessons of 45 minutes", "16 clases de 45 minutos", [
        ("Given in 8 sessions of 90 minutes each", "En 8 sesiones de 90 minutos cada una"),
        ("5 Hour Pre-Licensing Class", "Clase de 5 horas"),
        ("Road test appointment  (Wait time 2-3 weeks)", "Cita para el examen  (tiempo de espera 2-3 semanas)"),
        ("Car for road test", "Auto para el examen")], ses=8)}
  </div>
</div></section>

<section class="slab"><div class="wrap">
  {eyebrow("Specialized Package", "Paquete especializado")}
  <h2 style="margin-top:var(--s3)" data-en="Beginner Package" data-es="Paquete para principiantes">Beginner Package</h2>
  <p class="slab-amt">$1080<span style="display:block;font-family:var(--sans);font-size:clamp(20px,2vw,26px);font-weight:500;letter-spacing:-.03em;margin-top:10px" data-en="20 lessons of 45 minutes" data-es="20 clases de 45 minutos">20 lessons of 45 minutes</span></p>
  <ul class="slab-list">
    <li>{CHECK}{L("Given in 10 sessions of 90 minutes each", "En 10 sesiones de 90 minutos cada una")}</li>
    <li>{CHECK}{L("5 Hour Pre-Licensing Class", "Clase de 5 horas previa a la licencia")}</li>
    <li>{CHECK}{L("Road test appointment  (Wait time 2-3 weeks)", "Cita para el examen  (tiempo de espera 2-3 semanas)")}</li>
    <li>{CHECK}{L("Car for road test", "Auto para el examen")}</li>
  </ul>
  <p class="slab-kicker" data-en="In these 10 sessions of 90 min each you will learn to:" data-es="En estas 10 sesiones de 90 min cada una aprenderás a:">In these 10 sessions of 90 min each you will learn to:</p>
  <ol class="slab-learn">
    <li>{L("Become familiar with your vehicle (instruments, gauges, etc.)", "Familiarizarte con tu vehículo (instrumentos, indicadores, etc.)")}</li>
    <li>{L("Steer (hand over hand)", "Girar el volante (mano sobre mano)")}</li>
    <li>{L("Visual tracking", "Seguimiento visual")}</li>
    <li>{L("Acceleration, deceleration, stopping", "Acelerar, desacelerar y frenar")}</li>
    <li>{L("Managing visibility, time and space", "Manejar la visibilidad, el tiempo y el espacio")}</li>
    <li>{L("Moving away and out of traffic", "Salir e incorporarte al tráfico")}</li>
    <li>{L("Three-point turn", "Giro en tres puntos")}</li>
    <li>{L("Parallel parking", "Estacionamiento en paralelo")}</li>
    <li>{L("Changing lanes", "Cambiar de carril")}</li>
    <li>{L("Defensive Driving techniques", "Técnicas de manejo defensivo")}</li>
    <li>{L("How to handle traffic / pedestrians / double parked cars", "Cómo manejar el tráfico, los peatones y los autos en doble fila")}</li>
  </ol>
  <a class="btn" href="{WA}" target="_blank" rel="noopener" data-en="Book the Beginner Package &lt;span class='ar'&gt;→&lt;/span&gt;" data-es="Reservar el paquete para principiantes &lt;span class='ar'&gt;→&lt;/span&gt;">Book the Beginner Package <span class="ar">→</span></a>
</div></section>

<section class="sec"><div class="wrap">
  <div class="sec-head center">{eyebrow("Special Packages", "Paquetes especiales")}
    <h2 data-en="Special Packages" data-es="Paquetes especiales">Special Packages</h2></div>
  <div class="packs packs-3">
    {pack("Package #5", "Paquete #5", "490", "6 lessons of 45 minutes", "6 clases de 45 minutos", [
        ("Given in 3 sessions of 90 minutes each", "En 3 sesiones de 90 minutos cada una"),
        ("5 Hour Pre-Licensing Class", "Clase de 5 horas"),
        ("Road test appointment  (Wait time 2-3 weeks)", "Cita para el examen  (tiempo de espera 2-3 semanas)"),
        ("Car for road test", "Auto para el examen")])}
    {pack("Package #6", "Paquete #6", "325", "1 lesson of 90 minutes", "1 clase de 90 minutos", [
        ("5 Hour Pre-Licensing Class", "Clase de 5 horas"),
        ("Road test appointment  (Wait time 2-3 weeks)", "Cita para el examen  (tiempo de espera 2-3 semanas)"),
        ("Car for road test", "Auto para el examen")],
        note="* For experienced drivers", note_es="* Para conductores con experiencia")}
    <article class="pack rv">
      <span class="pack-nm" data-en="You will review:" data-es="Repasarás:">You will review:</span>
      <ol class="pack-ol">
        <li>{L("Parking techniques", "Técnicas de estacionamiento")}</li>
        <li>{L("Three-point turn", "Giro en tres puntos")}</li>
        <li>{L("Traffic rules", "Reglas de tránsito")}</li>
        <li>{L("Road test tips", "Consejos para el examen")}</li>
      </ol>
    </article>
  </div>
</div></section>
'''


# ═══════════════════════════════════════════════════════════════ 5 HOUR CLASS
FIVE = f'''
<section class="phead"><div class="wrap">
  {crumb("5 Hour Class", "Clase de 5 horas")}
  <h1 data-en="5 Hour Class" data-es="Clase de 5 horas">5 Hour Class</h1>
  <div class="phead-facts">
    <span class="pill acc"><i></i>$65</span>
    <span class="pill"><i></i>{L("MV-278 certificate", "Certificado MV-278")}</span>
    <span class="pill"><i></i>{L("Included in every package", "Incluida en todo paquete")}</span>
  </div>
</div></section>

<section class="zoom-band"><div class="wrap">
  <p class="zoom-msg" data-en="5-Hour Pre-Licensing Class is now on Zoom! Don&apos;t miss out&mdash;register today!"
     data-es="&iexcl;La clase de 5 horas previa a la licencia ya est&aacute; en Zoom! No te lo pierdas: inscr&iacute;bete hoy.">5-Hour Pre-Licensing Class is now on Zoom! Don&apos;t miss out&mdash;register today!</p>
  <a class="btn btn-sm" href="{WA}" target="_blank" rel="noopener" data-en="Register &lt;span class=&#39;ar&#39;&gt;&#8594;&lt;/span&gt;" data-es="Inscr&iacute;bete &lt;span class=&#39;ar&#39;&gt;&#8594;&lt;/span&gt;">Register <span class="ar">&#8594;</span></a>
</div></section>

<section class="sec-tight"><div class="wrap">
  <div class="split">
    <div class="rv">
      <p class="lede" data-en="The 5 hour pre-licensing course is a speech/lecture and film that is mandatory to take for first-time license applicants."
         data-es="El curso previo a la licencia de 5 horas es una charla y un video de asistencia obligatoria para quienes solicitan la licencia por primera vez.">The 5 hour pre-licensing course is a speech/lecture and film that is mandatory to take for first-time license applicants.</p>
      <ul>
        <li>{CHECK}{L("Every non-license applicant must take this course in order to receive a certificate under MV-278, which will be asked for when taking the road test.", "Todo solicitante sin licencia debe tomar este curso para recibir el certificado MV-278, que se le pedirá al rendir el examen.")}</li>
        <li>{CHECK}{L("Certificates will be available for pick up at our office located at 22-55 31st Suite UL6 2nd Floor Astoria, NY 11105.", "Los certificados estarán disponibles para recoger en nuestra oficina, en 22-55 31st Suite UL6 2do piso, Astoria, NY 11105.")}</li>
      </ul>
      <div class="hero-cta" style="margin-top:var(--s4)">
        <a class="btn" href="{WA}" target="_blank" rel="noopener" data-en="Ask for the next date &lt;span class='ar'&gt;→&lt;/span&gt;" data-es="Pregunta por la próxima fecha &lt;span class='ar'&gt;→&lt;/span&gt;">Ask for the next date <span class="ar">→</span></a>
        <a class="btn btn-g" href="rates.html" data-en="Lessons &amp; Rates" data-es="Clases y tarifas">Lessons &amp; Rates</a>
      </div>
    </div>
    <figure class="split-m rv" style="aspect-ratio:1320/1028">
      <img src="assets/five-hour-zoom.jpg" alt="Pre-Licensing Course (5-Hour Class) via Zoom — Max Precision Driving School" loading="lazy" decoding="async" width="1320" height="1028">
    </figure>
  </div>
</div></section>

<section class="sec-tight"><div class="wrap">
  <div class="sec-head">{eyebrow("What the course covers", "Qué cubre el curso")}
    <h2 data-en="The same four topics in every school in New York" data-es="Los mismos cuatro temas en toda escuela de Nueva York">The same four topics in every school in New York</h2>
    <p class="lede" data-en="The curriculum is set by the State, not by the school. Every pre-licensing course in New York teaches this and nothing else." data-es="El currículum lo fija el Estado, no la escuela. Todo curso previo a la licencia en Nueva York enseña esto y nada más.">The curriculum is set by the State, not by the school.</p>
  </div>
  <ul class="curric">
    <li class="rv"><span class="n tnum">01</span><div><h3 data-en="Driving within the highway transportation system" data-es="Manejar dentro del sistema de transporte vial">Driving within the highway transportation system</h3></div></li>
    <li class="rv"><span class="n tnum">02</span><div><h3 data-en="Driver habits and skills" data-es="Hábitos y destrezas del conductor">Driver habits and skills</h3></div></li>
    <li class="rv"><span class="n tnum">03</span><div><h3 data-en="Feelings, attitudes and risk-taking" data-es="Emociones, actitudes y toma de riesgos">Feelings, attitudes and risk-taking</h3></div></li>
    <li class="rv"><span class="n tnum">04</span><div><h3 data-en="Alcohol, other drugs and driving" data-es="Alcohol, otras drogas y manejo">Alcohol, other drugs and driving</h3></div></li>
  </ul>
  <p class="fine rv" style="margin-top:var(--s3)"><a class="lnk" href="https://dmv.ny.gov/forms/mv2771.pdf" target="_blank" rel="noopener" data-en="Read the DMV Student&apos;s Manual (MV-277.1)" data-es="Lee el Manual del Estudiante del DMV (MV-277.1)">Read the DMV Student&apos;s Manual (MV-277.1)</a></p>
</div></section>


<section class="sec-tight"><div class="wrap">
  <div class="sec-head">{eyebrow("Your certificate", "Tu certificado")}
    <h2 data-en="The MV-278 expires. Most people find out too late." data-es="El MV-278 vence. Casi todos se enteran tarde.">The MV-278 expires. Most people find out too late.</h2>
  </div>
  <div class="cert rv">
    <div class="cert-l">
      <span class="cert-doc" data-en="NYS DMV form" data-es="Formulario del DMV de NY">NYS DMV form</span>
      <span class="cert-id">MV-278</span>
      <p class="cert-big">1<small data-en="year of validity from the day it is issued &mdash; and it cannot be renewed." data-es="año de validez desde el día en que se emite &mdash; y no se puede renovar.">year of validity from the day it is issued.</small></p>
    </div>
    <ul class="cert-r">
      <li>{I_CAL}<div><b data-en="It must be valid the day you book" data-es="Debe estar vigente el día que agendas">It must be valid the day you book</b><span data-en="Not the day of the test &mdash; the day you make the road test appointment. Booking with an expired certificate means taking the course again." data-es="No el día del examen: el día en que agendas la cita del examen de manejo. Agendar con el certificado vencido significa volver a tomar el curso.">Not the day of the test, the day you book it.</span></div></li>
      <li>{I_HAND}<div><b data-en="Bring the original to the road test" data-es="Lleva el original al examen">Bring the original to the road test</b><span data-en="You hand it to the license examiner. A photo or a copy is not accepted." data-es="Se lo entregas al examinador. Una foto o una copia no se aceptan.">You hand it to the license examiner.</span></div></li>
      <li>{I_REDO}<div><b data-en="Lost it? We reissue it" data-es="¿Lo perdiste? Te lo reponemos">Lost it? We reissue it</b><span data-en="Replacements come from the school that issued it. If it was us, message us and we handle it." data-es="La reposición la hace la escuela que lo emitió. Si fuimos nosotros, escríbenos y lo resolvemos.">Replacements come from the school that issued it.</span></div></li>
    </ul>
  </div>
  <p class="fine rv" style="margin-top:var(--s3)" data-en="Source: New York State DMV. Rules can change &mdash; the DMV always has the final word." data-es="Fuente: DMV del Estado de Nueva York. Las reglas pueden cambiar &mdash; el DMV siempre tiene la última palabra.">Source: New York State DMV.</p>
</div></section>
'''


# ═══════════════════════════════════════════════════════════════ CONTACT
FAQ_LD = '''{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
 {"@type":"Question","name":"Where is Max Precision Driving School located?","acceptedAnswer":{"@type":"Answer","text":"22-55 31st Suite UL6 2nd Floor, Astoria NY 11105. Accessible by N W trains at Astoria-Ditmars Blvd Station and the Q69 bus at Ditmars Blvd/31 St."}},
 {"@type":"Question","name":"Do you teach driving lessons in Spanish?","acceptedAnswer":{"@type":"Answer","text":"Yes. Our instructors are fluent in English and Spanish."}}]}'''

CONTACT = f'''
<section class="phead"><div class="wrap">
  {crumb("Contact", "Contacto")}
  <h1 data-en="Contact" data-es="Contacto">Contact</h1>
  <p class="lede" data-en="Don't hesitate to reach out for any questions or concerns"
     data-es="No dudes en escribirnos ante cualquier pregunta o inquietud">Don't hesitate to reach out for any questions or concerns</p>
</div></section>

<section class="sec-tight"><div class="wrap">
  <div class="duo">
    <div>
      <div class="sec-head"><h2 style="font-size:clamp(24px,2.6vw,34px)" data-en="Our Office" data-es="Nuestra oficina">Our Office</h2></div>
      <div class="ct-list">
        <div class="ct-row rv"><span class="ct-ic">{I_PIN}</span>
          <span><span class="k">{L("Address", "Dirección")}</span><span class="v"><a href="{MAPS}" target="_blank" rel="noopener">22-55 31st Suite UL6 2nd Floor, Astoria, NY 11105</a></span></span></div>
        <div class="ct-row rv"><span class="ct-ic">{I_TRAIN}</span>
          <span><span class="k">{L("Subway", "Metro")}</span><span class="v">{L("Accessible by N W trains — Astoria-Ditmars Blvd Station", "Accesible por los trenes N y W — estación Astoria-Ditmars Blvd")}</span></span></div>
        <div class="ct-row rv"><span class="ct-ic">{I_BUS}</span>
          <span><span class="k">{L("Bus", "Bus")}</span><span class="v">{L("Accessible by Q69 Bus — Ditmars Blvd/31 St", "Accesible por el bus Q69 — Ditmars Blvd/31 St")}</span></span></div>
        <div class="ct-row rv"><span class="ct-ic">{I_PHONE}</span>
          <span><span class="k">{L("Phone", "Teléfono")}</span><span class="v"><a href="tel:+19177348361">(917)-734-8361</a></span></span></div>
        <div class="ct-row rv"><span class="ct-ic">{I_CLOCK}</span>
          <span><span class="k">{L("Hours", "Horario")}</span><span class="v">{L("Monday – Saturday · 8AM – 6PM", "Lunes – Sábado · 8AM – 6PM")}</span></span></div>
      </div>
    </div>

    <form class="form rv" id="lead" novalidate>
      <p class="form-req" data-en="* Indicates required field" data-es="* Indica un campo obligatorio">* Indicates required field</p>
      <div class="fld"><label for="f-name">{L("Name", "Nombre")} <span class="req">*</span></label>
        <input id="f-name" name="name" type="text" autocomplete="name" placeholder="name" required>
        <span class="err" data-err="f-name" aria-live="polite"></span></div>
      <div class="fld"><label for="f-email">{L("Email", "Correo")} <span class="req">*</span></label>
        <input id="f-email" name="email" type="email" autocomplete="email" placeholder="email@example.com" required>
        <span class="err" data-err="f-email" aria-live="polite"></span></div>
      <div class="fld"><label for="f-phone">{L("Phone Number", "Número de teléfono")}</label>
        <input id="f-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="###-###-####">
        <span class="err" data-err="f-phone" aria-live="polite"></span></div>
      <div class="fld"><label for="f-msg">{L("Message", "Mensaje")} <span class="req">*</span></label>
        <textarea id="f-msg" name="message" rows="4" placeholder="message" required></textarea>
        <span class="err" data-err="f-msg" aria-live="polite"></span></div>
      <button class="btn" type="submit" id="f-send" data-en="Submit" data-es="Enviar">Submit</button>
      <p class="form-msg" id="f-out" role="status" aria-live="polite"></p>
    </form>
  </div>

  <div class="map-wide rv">
    <div class="map">
      <iframe title="Max Precision Driving School on the map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.412974852342!2d-73.91691351375026!3d40.77493425998999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f67fc0bb721%3A0x3f8e2a638c8eccb!2s22-55%2031st%20St%2C%20Astoria%2C%20NY%2011105!5e0!3m2!1sen!2sus!4v1721047617804!5m2!1sen!2sus"></iframe>
    </div>
    <a class="map-cta" href="{MAPS}" target="_blank" rel="noopener">
      <span class="map-k" data-en="Our office" data-es="Nuestra oficina">Our office</span>
      <span class="map-v">22-55 31st Suite UL6, Astoria NY 11105</span>
      <span class="map-go" data-en="Open in Google Maps" data-es="Abrir en Google Maps">Open in Google Maps</span>
    </a>
  </div>
</div></section>
'''


# ═══════════════════════════════════════════════════════════════ REFUND
REFUND = f'''
<section class="phead"><div class="wrap">
  {crumb("Refund Policy", "Política de reembolso")}
  <h1 data-en="Refund Policy" data-es="Política de reembolso">Refund Policy</h1>
  <p class="lede" data-en="To all previous and new students:" data-es="A todos los alumnos, actuales y nuevos:">To all previous and new students:</p>
</div></section>

<section class="sec-tight"><div class="wrap">
  <ul class="curric rules">
    <li class="rv">
      <span class="n">24h</span>
      <div>
        <h3 data-en="Cancellations" data-es="Cancelaciones">Cancellations</h3>
        <p data-en="Lessons should be cancelled within 24 hours of the appointed time (business days, not including weekends)." data-es="Las clases deben cancelarse con 24 horas de anticipación a la hora agendada (días hábiles, sin incluir fines de semana).">Lessons should be cancelled within 24 hours of the appointed time (business days, not including weekends).</p>
      </div>
    </li>
    <li class="rv">
      <span class="n n-x" aria-hidden="true">&#215;</span>
      <div>
        <h3 data-en="Non-refundable" data-es="No reembolsable">Non-refundable</h3>
        <p data-en="Road test appointments and car rentals are non-refundable." data-es="Las citas para el examen y el alquiler del auto no son reembolsables.">Road test appointments and car rentals are non-refundable.</p>
      </div>
    </li>
    <li class="rv">
      <span class="n">3<small data-en="months" data-es="meses">months</small></span>
      <div>
        <h3 data-en="Time limit" data-es="Plazo">Time limit</h3>
        <p data-en="Students will need to complete their driver licensing process within 3 months. Lessons that are not completed within the 3 month period will be terminated and non-refundable." data-es="Los alumnos deberán completar su proceso de licencia dentro de 3 meses. Las clases que no se completen en ese periodo se darán por terminadas y no serán reembolsables.">Students will need to complete their driver licensing process within 3 months. Lessons that are not completed within the 3 month period will be terminated and non-refundable.</p>
      </div>
    </li>
  </ul>
  <div class="rule-cta rv">
    <p data-en="Need to move a lesson? Tell us more than 24 hours ahead and there is no problem." data-es="¿Necesitas mover una clase? Avísanos con más de 24 horas y no hay problema.">Need to move a lesson? Tell us more than 24 hours ahead and there is no problem.</p>
    <a class="btn btn-sm" href="{WA}" target="_blank" rel="noopener" data-en="Message us &lt;span class=&#39;ar&#39;&gt;&#8594;&lt;/span&gt;" data-es="Escríbenos &lt;span class=&#39;ar&#39;&gt;&#8594;&lt;/span&gt;">Message us <span class="ar">&#8594;</span></a>
  </div>
</div></section>
'''


PAGES = [
    dict(page='index.html',
         title='Max Precision Driving School — Astoria, Queens NY',
         desc='Learn to drive with confidence and max precision. Driving school in Astoria, Queens NY. Our instructors are fluent in English and Spanish. (917)-734-8361.',
         body=HOME),
    dict(page='rates.html',
         title='Lessons & Rates | Max Precision Driving School',
         desc='Lessons and rates at Max Precision Driving School, Astoria NY. Classes 6 days a week, 8AM to 6PM. Each lesson is 90 minutes. Highway lessons available.',
         body=RATES),
    dict(page='five-hour-class.html',
         title='5 Hour Class | Max Precision Driving School',
         desc='The 5 hour pre-licensing course is mandatory for first-time license applicants in New York. Receive your MV-278 certificate at our Astoria office.',
         body=FIVE),
    dict(page='contact.html',
         title='Contact Us | Max Precision Driving School',
         desc="Don't hesitate to reach out for any questions or concerns. 22-55 31st Suite UL6, Astoria NY 11105. Accessible by N W trains and the Q69 bus.",
         body=CONTACT, extra_ld=FAQ_LD),
    dict(page='refund-policy.html',
         title='Refund Policy | Max Precision Driving School',
         desc='Cancellation and refund policy for Max Precision Driving School, Astoria NY.',
         body=REFUND),
]
