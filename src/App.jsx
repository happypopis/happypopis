import { useState, useEffect } from "react";

const C = {
  gold: "#F5B731", goldDark: "#D9960A", goldLight: "#FFEAA7", goldPale: "#FFF8E1",
  green: "#4CAF50", greenDark: "#2E7D32", greenLight: "#E8F5E9",
  dark: "#2D2D2D", warmDark: "#3E3530", cream: "#FFFDF7", white: "#FFFFFF",
  text: "#5A524A", textLight: "#8A8078", border: "#F0E8DA",
  purple: "#7E57C2", purpleLight: "#EDE7F6",
};

const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "podcast", label: "Podcast" },
  { id: "blog", label: "Blog" },
  { id: "recursos", label: "Recursos" },
  { id: "tienda", label: "Tienda" },
  { id: "contacto", label: "Contacto" },
];

const EPISODES = [
  { num: 1, title: "¿Y tú cada cuánto vas?", desc: "La frecuencia intestinal y lo que es (y no es) normal en niños y niñas. Desmontamos mitos y hablamos de por qué la vergüenza retrasa diagnósticos.", guest: "Gastroenterólogo/a infantil", tag: "Estreno" },
  { num: 2, title: "El baño ajeno: una pesadilla social", desc: "La ansiedad de usar baños en el colegio, en casa de amigos o en lugares públicos. El vínculo mente-intestino en la infancia.", guest: "Psicólogo/a infantil", tag: "Eje intestino-cerebro" },
  { num: 3, title: "Lo que comes, lo que sale", desc: "Alimentación, fibra, microbiota y probióticos en pediatría. Conectamos nutrición con función intestinal en la infancia.", guest: "Nutricionista infantil", tag: "Nutrición" },
  { num: 4, title: "Señales que no hay que ignorar", desc: "Síntomas de alerta en niños: enuresis, encopresis, infecciones urinarias a repetición y cuándo consultar.", guest: "Nefrólogo/a o urólogo/a infantil", tag: "Prevención" },
];

const BLOG_POSTS = [
  { title: "¿Es normal que mi hijo se haga pipí en la noche?", excerpt: "La enuresis nocturna es más común de lo que crees. Te explicamos qué es normal según la edad y cuándo vale la pena consultar.", date: "15 Abr 2026", cat: "Vejiga", time: "4 min" },
  { title: "Estreñimiento infantil: más que no ir al baño", excerpt: "El estreñimiento crónico en niños puede afectar mucho más que el intestino. Hablamos de señales, causas y qué hacer en casa.", date: "10 Abr 2026", cat: "Intestino", time: "5 min" },
  { title: "Hablar del baño en familia: guía sin vergüenza", excerpt: "Cómo crear un espacio seguro para que niños y niñas hablen de sus hábitos sin tabú. Tips concretos para madres, padres y cuidadores.", date: "5 Abr 2026", cat: "Crianza", time: "6 min" },
];

const FREE_RESOURCES = [
  { title: "Diario de Pipí y Caca", desc: "Registro semanal para que niños y familias lleven un diario de hábitos intestinales y vesicales. Incluye stickers para imprimir.", format: "PDF", pages: "8 páginas", icon: "📓", color: C.gold },
  { title: "Guía: ¿Cuándo consultar?", desc: "Señales de alerta en salud vesical y gastrointestinal infantil. Para madres, padres y cuidadores.", format: "PDF", pages: "12 páginas", icon: "🚨", color: C.green },
  { title: "Infografía: La Escala de Bristol para niños", desc: "Versión amigable y visual de la escala de Bristol adaptada para explicar a niños y niñas los tipos de deposiciones.", format: "PDF", pages: "1 página", icon: "📊", color: C.goldDark },
  { title: "Lámina: Mi Cuerpo por Dentro", desc: "Ilustración educativa del sistema digestivo y urinario para colorear. Ideal para actividades en consulta o en casa.", format: "PDF", pages: "2 páginas", icon: "🎨", color: C.purple },
];

const PRODUCTS = [
  { id: 1, title: "Curso: Entendiendo la Enuresis", desc: "Curso digital de 4 módulos para profesionales de salud y educadores. Incluye material descargable y certificado.", price: 19990, originalPrice: 29990, format: "Video + PDF", badge: "Más vendido", color: C.gold },
  { id: 2, title: "Kit Educativo: Hablemos del Baño", desc: "Pack de láminas, actividades y guías para trabajar hábitos intestinales y vesicales con niños de 4 a 10 años en consulta o en casa.", price: 9990, originalPrice: null, format: "PDF descargable", badge: "Nuevo", color: C.green },
  { id: 3, title: "E-book: Guía Completa de Salud Intestinal Infantil", desc: "Todo lo que necesitas saber sobre estreñimiento, encopresis, fibra y microbiota en pediatría. Escrito en lenguaje accesible.", price: 7990, originalPrice: 12990, format: "E-book PDF", badge: null, color: C.goldDark },
  { id: 4, title: "Taller grabado: Mindfulness y Vejiga en Pediatría", desc: "Sesión grabada de 90 minutos sobre técnicas de mindfulness e interocepción aplicadas a disfunción vesical pediátrica.", price: 14990, originalPrice: null, format: "Video", badge: "Para profesionales", color: C.purple },
];

/* ─── Helpers ─── */
function PoopDeco({ size = 60, style = {} }) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 60 72" fill="none" style={style}>
      <path d="M30 18 C30 18, 27 8, 30 4 C33 0, 36 6, 33 12" stroke={C.greenDark} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <ellipse cx="28" cy="3" rx="4" ry="3" fill={C.green} />
      <ellipse cx="35" cy="5" rx="3.5" ry="2.5" fill={C.green} />
      <path d="M18 42 C10 42, 8 52, 14 56 C8 56, 6 64, 16 68 C16 72, 44 72, 44 68 C54 64, 52 56, 46 56 C52 52, 50 42, 42 42 C42 36, 38 32, 34 34 C34 28, 28 28, 26 34 C22 32, 18 36, 18 42 Z" fill={C.gold} stroke={C.goldDark} strokeWidth="1.5" />
    </svg>
  );
}

function Section({ id, bg = C.cream, children }) {
  return (
    <section id={id} style={{ position: "relative", background: bg, padding: "80px 24px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 1 }}>{children}</div>
    </section>
  );
}

function Label({ text, color = C.gold }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12, fontFamily: "'Nunito', sans-serif", fontSize: 13, fontWeight: 700, color, textTransform: "uppercase", letterSpacing: "0.1em" }}>
      <span style={{ width: 20, height: 3, background: color, borderRadius: 2 }} />
      {text}
    </div>
  );
}

function Title({ children, color = C.dark, align = "left" }) {
  return <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 600, color, lineHeight: 1.15, margin: "0 0 20px", textAlign: align }}>{children}</h2>;
}

function formatCLP(n) {
  return "$" + n.toLocaleString("es-CL");
}

/* ─── Navbar ─── */
function Navbar({ active, onNav, cartCount }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "rgba(255,253,247,0.96)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? `1px solid ${C.border}` : "none", transition: "all 0.3s", padding: "0 24px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: 64 }}>
          <div onClick={() => onNav("inicio")} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
            <span style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 22, fontWeight: 600, color: C.dark }}>
              <span style={{ color: C.gold }}>Happy</span>popis
            </span>
          </div>
          <div className="dNav" style={{ display: "flex", gap: 20, alignItems: "center" }}>
            {NAV.map(n => (
              <button key={n.id} onClick={() => onNav(n.id)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, color: active === n.id ? C.gold : C.text, borderBottom: active === n.id ? `2.5px solid ${C.gold}` : "2.5px solid transparent", paddingBottom: 4, transition: "all 0.2s" }}>{n.label}</button>
            ))}
            {/* Cart icon */}
            <button onClick={() => onNav("tienda")} style={{ background: "none", border: "none", cursor: "pointer", position: "relative", padding: 6 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {cartCount > 0 && (
                <span style={{ position: "absolute", top: -2, right: -4, width: 18, height: 18, borderRadius: "50%", background: C.gold, color: C.white, fontSize: 11, fontWeight: 800, fontFamily: "'Nunito', sans-serif", display: "flex", alignItems: "center", justifyContent: "center" }}>{cartCount}</span>
              )}
            </button>
          </div>
          <button className="mBtn" onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8, color: C.dark }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              {open ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> : <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99, background: "rgba(255,253,247,0.98)", backdropFilter: "blur(16px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24 }}>
          {NAV.map(n => (
            <button key={n.id} onClick={() => { onNav(n.id); setOpen(false); }} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Fredoka', sans-serif", fontSize: 26, fontWeight: 500, color: active === n.id ? C.gold : C.dark }}>{n.label}</button>
          ))}
          {cartCount > 0 && <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, color: C.gold }}>🛒 {cartCount} producto{cartCount > 1 ? "s" : ""}</span>}
        </div>
      )}

    </>
  );
}

/* ─── Hero ─── */
function Hero({ onNav }) {
  return (
    <section id="inicio" style={{ position: "relative", minHeight: "100vh", background: `linear-gradient(170deg, ${C.cream} 0%, ${C.goldPale} 40%, ${C.cream} 100%)`, display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 24px 80px", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "12%", right: "8%", opacity: 0.08, transform: "rotate(15deg)" }}><PoopDeco size={120} /></div>
      <div style={{ position: "absolute", bottom: "15%", left: "5%", opacity: 0.06, transform: "rotate(-10deg)" }}><PoopDeco size={90} /></div>
      <div style={{ position: "absolute", top: "8%", left: "15%", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${C.goldLight}44, transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "10%", width: 350, height: 350, borderRadius: "50%", background: `radial-gradient(circle, ${C.greenLight}55, transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 780, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.white, border: `1.5px solid ${C.border}`, borderRadius: 100, padding: "8px 20px", marginBottom: 32, fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, color: C.text, boxShadow: `0 2px 16px ${C.gold}1F` }}>
          <span style={{ fontSize: 18 }}>💩</span> Salud infantil sin tabúes
        </div>
        <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: "clamp(42px, 7.5vw, 76px)", fontWeight: 600, lineHeight: 1.08, color: C.dark, margin: "0 0 24px" }}>
          Hablemos de lo que{" "}
          <span style={{ color: C.gold, display: "inline-block", position: "relative" }}>
            nadie habla
            <svg style={{ position: "absolute", bottom: -6, left: 0, width: "100%", height: 12 }} viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M2 8 Q50 2, 100 7 T198 5" stroke={C.goldLight} strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "clamp(17px, 2.5vw, 20px)", color: C.text, lineHeight: 1.7, maxWidth: 580, margin: "0 auto 40px" }}>
          Happypopis es un espacio de divulgación en salud vesical, renal y gastrointestinal infantil. Rompemos tabúes, normalizamos el ir al baño y conectamos la ciencia con las familias.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => onNav("podcast")} style={{ background: C.gold, color: C.white, border: "none", borderRadius: 100, padding: "16px 36px", fontFamily: "'Nunito', sans-serif", fontSize: 16, fontWeight: 800, cursor: "pointer", boxShadow: `0 4px 20px ${C.gold}44`, transition: "transform 0.2s" }}
            onMouseEnter={e => e.target.style.transform = "translateY(-2px)"} onMouseLeave={e => e.target.style.transform = "translateY(0)"}>
            Escuchar IN-Cómodo →
          </button>
          <button onClick={() => onNav("recursos")} style={{ background: "transparent", color: C.dark, border: `2px solid ${C.border}`, borderRadius: 100, padding: "14px 32px", fontFamily: "'Nunito', sans-serif", fontSize: 16, fontWeight: 700, cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={e => { e.target.style.borderColor = C.green; e.target.style.color = C.greenDark; }}
            onMouseLeave={e => { e.target.style.borderColor = C.border; e.target.style.color = C.dark; }}>
            Recursos gratuitos
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── About ─── */
function About() {
  const cards = [
    { icon: "🔬", title: "Evidencia", desc: "Todo lo que compartimos tiene respaldo científico. Información real para familias reales." },
    { icon: "🌱", title: "Sin tabúes", desc: "El pipí, la caca y todo lo que pasa en el baño también es salud. Normalizarlo salva diagnósticos." },
    { icon: "👶", title: "Enfoque pediátrico", desc: "Nos especializamos en salud vesical, renal y gastrointestinal de niños y niñas." },
    { icon: "😊", title: "Con humor", desc: "Porque hablar de lo incómodo con una sonrisa es el primer paso para perder la vergüenza." },
  ];
  return (
    <Section id="nosotros" bg={C.white}>
      <Label text="Quiénes somos" />
      <Title>Salud infantil <span style={{ color: C.gold }}>sin filtro</span>, <span style={{ color: C.green }}>sin vergüenza</span></Title>
      <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 17, lineHeight: 1.75, color: C.text, maxWidth: 640, margin: "0 0 16px" }}>
        Happypopis nació de una convicción: hay temas de salud infantil que todas las familias enfrentan pero nadie quiere nombrar. La enuresis, el estreñimiento, las infecciones urinarias, el miedo al baño del colegio.
      </p>
      <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 17, lineHeight: 1.75, color: C.text, maxWidth: 640, margin: "0 0 48px" }}>
        Somos profesionales de salud que transformamos la incomodidad en conversación. Creemos que hablar abiertamente de lo que pasa "ahí abajo" puede prevenir enfermedades, mejorar diagnósticos y aliviar a miles de familias que creen estar solas.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 20 }}>
        {cards.map((c, i) => (
          <div key={i} style={{ background: C.cream, borderRadius: 24, padding: "28px 24px", border: `1.5px solid ${C.border}`, transition: "transform 0.2s, box-shadow 0.2s", cursor: "default" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 36px ${C.gold}18`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
            <div style={{ fontSize: 32, marginBottom: 14 }}>{c.icon}</div>
            <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 19, fontWeight: 600, color: C.dark, margin: "0 0 8px" }}>{c.title}</h3>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 15, lineHeight: 1.6, color: C.text, margin: 0 }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── Podcast ─── */
function Podcast() {
  const [exp, setExp] = useState(null);
  return (
    <Section id="podcast" bg={C.goldPale}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <Label text="Podcast" color={C.goldDark} />
        <Title color={C.dark} align="center">IN-Cómodo</Title>
        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 18, fontStyle: "italic", color: C.text, margin: "0 0 8px" }}>Lo que nadie dice, pero todos hacen</p>
        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 16, color: C.textLight, maxWidth: 540, margin: "12px auto 0", lineHeight: 1.65 }}>
          Un podcast que rompe el tabú de la salud intestinal y vesical en la infancia. Conversaciones con especialistas, humor respetuoso y ciencia accesible.
        </p>
      </div>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 40, flexWrap: "wrap" }}>
        {["Spotify", "YouTube", "Apple Podcasts"].map(p => (
          <div key={p} style={{ display: "flex", alignItems: "center", gap: 8, background: C.white, border: `1.5px solid ${C.border}`, borderRadius: 100, padding: "10px 20px", fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, color: C.text, cursor: "pointer", transition: "border-color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = C.gold} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.gold }} />{p}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {EPISODES.map(ep => (
          <div key={ep.num} onClick={() => setExp(exp === ep.num ? null : ep.num)} style={{ background: C.white, borderRadius: 20, border: `1.5px solid ${exp === ep.num ? C.gold : C.border}`, padding: "24px 28px", cursor: "pointer", transition: "all 0.3s", boxShadow: exp === ep.num ? `0 8px 28px ${C.gold}20` : "none" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18, flexWrap: "wrap" }}>
              <div style={{ minWidth: 50, height: 50, borderRadius: 16, background: exp === ep.num ? `linear-gradient(135deg, ${C.gold}, ${C.goldDark})` : C.goldPale, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Fredoka', sans-serif", fontSize: 20, fontWeight: 600, color: exp === ep.num ? C.white : C.gold, transition: "all 0.3s" }}>{ep.num}</div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
                  <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 18, fontWeight: 600, color: C.dark, margin: 0 }}>{ep.title}</h3>
                  <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700, background: C.greenLight, color: C.greenDark, padding: "3px 10px", borderRadius: 100 }}>{ep.tag}</span>
                </div>
                {exp === ep.num && (
                  <div style={{ marginTop: 12 }}>
                    <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 15, color: C.text, lineHeight: 1.65, margin: "0 0 10px" }}>{ep.desc}</p>
                    <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, fontWeight: 700, color: C.gold, margin: 0 }}>Invitado/a: {ep.guest} · 30-45 min</p>
                  </div>
                )}
              </div>
              <div style={{ transform: exp === ep.num ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s", color: C.textLight, fontSize: 18 }}>▾</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── Blog ─── */
function Blog() {
  const catC = { Vejiga: C.gold, Intestino: C.green, Crianza: C.goldDark };
  return (
    <Section id="blog" bg={C.white}>
      <Label text="Blog" color={C.green} />
      <Title>Artículos para <span style={{ color: C.green }}>familias informadas</span></Title>
      <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 17, color: C.text, maxWidth: 540, lineHeight: 1.65, margin: "0 0 48px" }}>
        Información accesible sobre salud vesical, renal y gastrointestinal infantil. Basada en evidencia, escrita para madres, padres y cuidadores.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
        {BLOG_POSTS.map((p, i) => (
          <article key={i} style={{ background: C.cream, borderRadius: 22, border: `1.5px solid ${C.border}`, overflow: "hidden", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.06)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
            <div style={{ height: 6, background: `linear-gradient(90deg, ${[C.gold, C.green, C.goldDark][i]}, ${C.goldLight})` }} />
            <div style={{ padding: "24px 24px 28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, fontFamily: "'Nunito', sans-serif", fontSize: 12, fontWeight: 700, color: C.textLight }}>
                <span style={{ background: `${catC[p.cat]}22`, color: catC[p.cat], padding: "3px 10px", borderRadius: 100 }}>{p.cat}</span>
                <span>{p.date} · {p.time}</span>
              </div>
              <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 19, fontWeight: 600, color: C.dark, margin: "0 0 10px", lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 15, color: C.text, lineHeight: 1.6, margin: 0 }}>{p.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ─── Resources (Free Downloads) ─── */
function Resources() {
  const [downloaded, setDownloaded] = useState({});

  const handleDownload = (idx) => {
    setDownloaded(prev => ({ ...prev, [idx]: true }));
    setTimeout(() => setDownloaded(prev => ({ ...prev, [idx]: false })), 2500);
  };

  return (
    <Section id="recursos" bg={C.cream}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <Label text="Recursos gratuitos" color={C.green} />
        <Title align="center">Herramientas para <span style={{ color: C.green }}>familias</span> y <span style={{ color: C.gold }}>profesionales</span></Title>
        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 17, color: C.text, maxWidth: 560, margin: "0 auto", lineHeight: 1.65 }}>
          Material educativo descargable, gratuito y basado en evidencia. Úsalo en casa, en consulta o en el aula.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        {FREE_RESOURCES.map((r, i) => (
          <div key={i} style={{ background: C.white, borderRadius: 22, border: `1.5px solid ${C.border}`, padding: "28px 24px", display: "flex", flexDirection: "column", transition: "transform 0.2s, box-shadow 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 10px 32px ${r.color}15`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: `${r.color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{r.icon}</div>
              <div>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700, color: r.color, textTransform: "uppercase", letterSpacing: "0.05em" }}>{r.format} · {r.pages}</span>
              </div>
            </div>
            <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 18, fontWeight: 600, color: C.dark, margin: "0 0 8px", lineHeight: 1.25 }}>{r.title}</h3>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, color: C.text, lineHeight: 1.6, margin: "0 0 20px", flex: 1 }}>{r.desc}</p>
            <button onClick={() => handleDownload(i)} style={{
              background: downloaded[i] ? C.greenLight : `${r.color}12`,
              color: downloaded[i] ? C.greenDark : r.color,
              border: `1.5px solid ${downloaded[i] ? C.green : r.color}33`,
              borderRadius: 14, padding: "12px 20px",
              fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 800,
              cursor: "pointer", transition: "all 0.3s", width: "100%",
            }}>
              {downloaded[i] ? "✓ ¡Descargando!" : "⬇ Descargar gratis"}
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── Store (Digital Products with Cart) ─── */
function Store({ cart, setCart }) {
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    if (!cart.find(p => p.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(p => p.id !== id));
  };

  const total = cart.reduce((sum, p) => sum + p.price, 0);
  const inCart = (id) => cart.some(p => p.id === id);

  return (
    <Section id="tienda" bg={C.white}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
        <div>
          <Label text="Tienda" color={C.purple} />
          <Title>Material digital <span style={{ color: C.purple }}>profesional</span></Title>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 17, color: C.text, maxWidth: 500, lineHeight: 1.65, margin: 0 }}>
            Cursos, e-books, talleres y kits educativos para llevar la salud vesical y gastrointestinal infantil al siguiente nivel.
          </p>
        </div>
        {/* Mini cart summary */}
        <button onClick={() => setShowCart(!showCart)} style={{
          background: cart.length > 0 ? C.gold : C.cream,
          color: cart.length > 0 ? C.white : C.text,
          border: `1.5px solid ${cart.length > 0 ? C.gold : C.border}`,
          borderRadius: 100, padding: "12px 24px",
          fontFamily: "'Nunito', sans-serif", fontSize: 15, fontWeight: 800,
          cursor: "pointer", transition: "all 0.3s",
          display: "flex", alignItems: "center", gap: 8,
        }}>
          🛒 {cart.length > 0 ? `${cart.length} producto${cart.length > 1 ? "s" : ""} · ${formatCLP(total)}` : "Carrito vacío"}
        </button>
      </div>

      {/* Cart dropdown */}
      {showCart && cart.length > 0 && (
        <div style={{ background: C.cream, borderRadius: 20, border: `1.5px solid ${C.border}`, padding: "24px 28px", marginBottom: 32, boxShadow: `0 8px 32px ${C.gold}12` }}>
          <h4 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 18, fontWeight: 600, color: C.dark, margin: "0 0 16px" }}>Tu carrito</h4>
          {cart.map(item => (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: `1px solid ${C.border}` }}>
              <div>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 15, fontWeight: 700, color: C.dark, margin: 0 }}>{item.title}</p>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, color: C.textLight, margin: "2px 0 0" }}>{item.format}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 16, fontWeight: 800, color: C.gold }}>{formatCLP(item.price)}</span>
                <button onClick={() => removeFromCart(item.id)} style={{ background: "none", border: "none", cursor: "pointer", color: C.textLight, fontSize: 18, padding: 4 }}>✕</button>
              </div>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
            <span style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 20, fontWeight: 600, color: C.dark }}>Total: {formatCLP(total)}</span>
            <button style={{
              background: C.gold, color: C.white, border: "none", borderRadius: 14,
              padding: "14px 32px", fontFamily: "'Nunito', sans-serif", fontSize: 16, fontWeight: 800,
              cursor: "pointer", boxShadow: `0 4px 16px ${C.gold}44`, transition: "background 0.2s",
            }}
              onMouseEnter={e => e.target.style.background = C.goldDark}
              onMouseLeave={e => e.target.style.background = C.gold}>
              Ir a pagar →
            </button>
          </div>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: C.textLight, margin: "12px 0 0", textAlign: "center" }}>
            Pago seguro · Descarga inmediata · Boleta electrónica
          </p>
        </div>
      )}

      {/* Products grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 22 }}>
        {PRODUCTS.map(p => (
          <div key={p.id} style={{
            background: C.cream, borderRadius: 22, border: `1.5px solid ${inCart(p.id) ? C.gold : C.border}`,
            overflow: "hidden", display: "flex", flexDirection: "column",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 14px 40px ${p.color}15`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
            {/* Top color bar + badge */}
            <div style={{ height: 6, background: `linear-gradient(90deg, ${p.color}, ${C.goldLight})` }} />
            <div style={{ padding: "24px 22px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
              {p.badge && (
                <span style={{ alignSelf: "flex-start", fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 800, background: `${p.color}18`, color: p.color, padding: "4px 12px", borderRadius: 100, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.04em" }}>{p.badge}</span>
              )}
              <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700, color: C.textLight, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{p.format}</span>
              <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 19, fontWeight: 600, color: C.dark, margin: "0 0 8px", lineHeight: 1.25 }}>{p.title}</h3>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, color: C.text, lineHeight: 1.6, margin: "0 0 20px", flex: 1 }}>{p.desc}</p>

              {/* Price */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 16 }}>
                <span style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 26, fontWeight: 700, color: C.dark }}>{formatCLP(p.price)}</span>
                {p.originalPrice && (
                  <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 15, fontWeight: 600, color: C.textLight, textDecoration: "line-through" }}>{formatCLP(p.originalPrice)}</span>
                )}
              </div>

              {/* Add to cart / In cart */}
              <button onClick={() => inCart(p.id) ? removeFromCart(p.id) : addToCart(p)} style={{
                background: inCart(p.id) ? C.greenLight : C.gold,
                color: inCart(p.id) ? C.greenDark : C.white,
                border: "none", borderRadius: 14, padding: "14px 20px",
                fontFamily: "'Nunito', sans-serif", fontSize: 15, fontWeight: 800,
                cursor: "pointer", transition: "all 0.3s", width: "100%",
              }}>
                {inCart(p.id) ? "✓ En el carrito" : "Agregar al carrito"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── Contact ─── */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const inp = { width: "100%", boxSizing: "border-box", fontFamily: "'Nunito', sans-serif", fontSize: 15, fontWeight: 600, padding: "14px 18px", background: C.cream, border: `1.5px solid ${C.border}`, borderRadius: 16, color: C.dark, outline: "none", transition: "border-color 0.2s" };

  return (
    <Section id="contacto" bg={C.goldPale}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "start" }}>
        <div>
          <Label text="Contacto" />
          <Title>¿Conversamos?</Title>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 17, color: C.text, lineHeight: 1.75, margin: "0 0 32px" }}>
            ¿Quieres ser invitado/a del podcast? ¿Tienes dudas sobre la salud de tu hijo/a? ¿Una idea de colaboración? Escríbenos.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {[{ icon: "✉️", label: "hola@happypopis.cl" }, { icon: "📍", label: "Santiago, Chile" }, { icon: "📱", label: "@happypopis" }].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "'Nunito', sans-serif", fontSize: 16, fontWeight: 600, color: C.text }}>
                <span style={{ width: 44, height: 44, borderRadius: 14, background: C.white, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: C.white, borderRadius: 24, border: `1.5px solid ${C.border}`, padding: "32px 28px", boxShadow: "0 4px 24px rgba(0,0,0,0.03)" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>💩🌱</div>
              <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 22, fontWeight: 600, color: C.dark, margin: "0 0 8px" }}>¡Mensaje enviado!</h3>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 15, color: C.text }}>Te responderemos lo antes posible.</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[{ k: "name", l: "Nombre", t: "text", p: "Tu nombre" }, { k: "email", l: "Email", t: "email", p: "tu@email.com" }].map(f => (
                <div key={f.k}>
                  <label style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, fontWeight: 800, color: C.text, display: "block", marginBottom: 6 }}>{f.l}</label>
                  <input type={f.t} style={inp} value={form[f.k]} onChange={e => setForm({ ...form, [f.k]: e.target.value })} onFocus={e => e.target.style.borderColor = C.gold} onBlur={e => e.target.style.borderColor = C.border} placeholder={f.p} />
                </div>
              ))}
              <div>
                <label style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, fontWeight: 800, color: C.text, display: "block", marginBottom: 6 }}>Mensaje</label>
                <textarea style={{ ...inp, minHeight: 110, resize: "vertical" }} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} onFocus={e => e.target.style.borderColor = C.gold} onBlur={e => e.target.style.borderColor = C.border} placeholder="¿En qué podemos ayudarte?" />
              </div>
              <button onClick={() => { if (form.name && form.email && form.message) setSent(true); }} style={{ background: C.gold, color: C.white, border: "none", borderRadius: 16, padding: "16px 28px", fontFamily: "'Nunito', sans-serif", fontSize: 16, fontWeight: 800, cursor: "pointer", transition: "background 0.2s", marginTop: 4 }}
                onMouseEnter={e => e.target.style.background = C.goldDark} onMouseLeave={e => e.target.style.background = C.gold}>Enviar mensaje</button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer style={{ background: C.dark, padding: "48px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <span style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 26, fontWeight: 600, color: C.goldLight }}>Happypopis</span>
        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.4)", margin: "8px 0 24px" }}>Salud vesical, renal y gastrointestinal infantil · Santiago, Chile</p>
        <div style={{ display: "flex", gap: 24, justifyContent: "center", marginBottom: 24 }}>
          {["Instagram", "Spotify", "YouTube", "TikTok"].map(s => (
            <span key={s} style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.45)", cursor: "pointer", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = C.goldLight} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.45)"}>{s}</span>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24 }}>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.2)", margin: 0 }}>© 2026 Happypopis. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── App ─── */
export default function App() {
  const [active, setActive] = useState("inicio");
  const [cart, setCart] = useState([]);

  const go = (id) => { setActive(id); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  useEffect(() => {
    const secs = NAV.map(n => document.getElementById(n.id)).filter(Boolean);
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); }, { threshold: 0.25 });
    secs.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: C.cream, minHeight: "100vh" }}>
      <Navbar active={active} onNav={go} cartCount={cart.length} />
      <Hero onNav={go} />
      <About />
      <Podcast />
      <Blog />
      <Resources />
      <Store cart={cart} setCart={setCart} />
      <Contact />
      <Footer />
    </div>
  );
}
