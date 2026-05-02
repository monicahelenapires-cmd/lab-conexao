/* Portal Lab Conexão Imobiliária — Turma Beta
   Sistema visual: navy + dourado + tipografia editorial.
   Reusa tokens do manual.css. */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Manrope:wght@300;400;500;600;700&display=swap');

:root {
  --navy: #1A2942;
  --navy-deep: #0A0F1A;
  --navy-soft: #2A3A5C;
  --gold: #A68B5B;
  --gold-soft: #C8AC7E;
  --gold-deep: #8C7449;
  --beige: #E8DFD3;
  --offwhite: #F5F1EA;
  --paper: #FBF8F2;
  --ink-90: #1A2942;
  --ink-70: #38445C;
  --ink-50: #6A7388;
  --ink-30: #A8AEBC;
  --ink-15: #D4D7DE;
  --ink-08: #E6E8EC;
  --line: rgba(26, 41, 66, 0.14);
  --line-soft: rgba(26, 41, 66, 0.06);
  --gold-line: rgba(166, 139, 91, 0.4);
  --serif: 'Cormorant Garamond', Georgia, serif;
  --sans: 'Manrope', system-ui, sans-serif;
}

* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; background: var(--paper); font-family: var(--sans); color: var(--ink-90); -webkit-font-smoothing: antialiased; }
a { color: inherit; text-decoration: none; }

h1, h2, h3, h4 { font-family: var(--serif); font-weight: 300; margin: 0; letter-spacing: -0.005em; color: var(--navy); line-height: 1.1; }
em, .italic { font-style: italic; color: var(--gold); }

.eyebrow {
  font-family: var(--sans); font-weight: 500;
  text-transform: uppercase; letter-spacing: 0.28em;
  font-size: 11px; color: var(--gold); display: inline-block;
}

/* ─────────────  TELA DE LOGIN  ───────────── */

.login-screen {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  background: var(--navy);
  background-image: radial-gradient(ellipse at top right, rgba(166,139,91,0.18), transparent 60%),
                    radial-gradient(ellipse at bottom left, rgba(166,139,91,0.08), transparent 50%);
  position: relative;
  padding: 24px;
}
.login-frame {
  position: absolute; inset: 24px; border: 1px solid rgba(166,139,91,0.25); pointer-events: none;
}
.login-card {
  width: 100%; max-width: 460px; padding: 56px 48px;
  text-align: center; position: relative; z-index: 2;
  color: var(--offwhite);
}
.login-card .eyebrow { color: var(--gold-soft); margin-bottom: 24px; }
.login-card h1 {
  font-family: var(--serif); font-size: 48px; line-height: 1.05;
  color: var(--beige); margin-bottom: 12px;
}
.login-card .sub {
  font-family: var(--serif); font-style: italic; color: var(--gold-soft);
  font-size: 18px; margin-bottom: 40px;
}
.login-form { display: flex; flex-direction: column; gap: 14px; }
.login-input {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(200,172,126,0.35);
  color: var(--offwhite); font-family: var(--sans); font-size: 15px;
  padding: 14px 18px; outline: none; letter-spacing: 0.04em;
  transition: border-color 0.2s, background 0.2s;
}
.login-input:focus { border-color: var(--gold-soft); background: rgba(255,255,255,0.08); }
.login-input::placeholder { color: rgba(232,223,211,0.4); }
.login-btn {
  background: var(--gold); color: var(--navy);
  border: none; font-family: var(--sans); font-weight: 600; font-size: 13px;
  letter-spacing: 0.16em; text-transform: uppercase;
  padding: 16px 24px; cursor: pointer;
  transition: background 0.2s;
}
.login-btn:hover { background: var(--gold-soft); }
.login-error {
  font-size: 12px; color: #E8A899; min-height: 18px; margin-top: 4px;
  letter-spacing: 0.04em;
}
.login-foot {
  position: absolute; bottom: 32px; left: 0; right: 0; text-align: center;
  font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
  color: rgba(232,223,211,0.45);
}

/* ─────────────  FECHADURA (umbral)  ───────────── */

.fechadura-screen {
  position: fixed; inset: 0;
  background: var(--navy);
  background-image: radial-gradient(ellipse at center, rgba(166,139,91,0.10), transparent 65%);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999; overflow: hidden;
  opacity: 0; transition: opacity 0.6s ease;
}
.fechadura-screen.in { opacity: 1; }
.fechadura-frame {
  position: absolute; inset: 24px; border: 1px solid rgba(166,139,91,0.22);
  pointer-events: none;
  transition: opacity 0.5s ease;
}
.fechadura-screen.zoom .fechadura-frame { opacity: 0; }

.fechadura-stage {
  background: none; border: none; cursor: pointer;
  display: flex; flex-direction: column; align-items: center; gap: 28px;
  padding: 48px;
  transition: transform 1.2s cubic-bezier(0.7, 0, 0.4, 1);
  transform-origin: center center;
}

.fechadura-phrase {
  font-family: var(--serif); font-weight: 400;
  font-size: 36px; line-height: 1.15;
  color: var(--beige);
  text-align: center;
  margin-bottom: 16px;
  max-width: 520px;
}
.fechadura-phrase .it {
  font-style: italic; color: var(--gold-soft);
}
.fechadura-screen.zoom .fechadura-phrase {
  opacity: 0; transition: opacity 0.4s ease;
}
.fechadura-stage:focus { outline: none; }
.fechadura-stage:hover .fechadura-svg { transform: scale(1.04); filter: drop-shadow(0 0 24px rgba(200,172,126,0.5)); }
.fechadura-stage:hover .fechadura-text { color: var(--gold-soft); letter-spacing: 0.42em; }

/* o ZOOM cinematográfico — escala monstruosa para "atravessar a fechadura" */
.fechadura-screen.zoom .fechadura-stage {
  transform: scale(40);
}
.fechadura-screen.zoom .fechadura-text,
.fechadura-screen.zoom .fechadura-hint {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.fechadura-mask {
  width: 100px; height: 140px;
  display: flex; align-items: center; justify-content: center;
  position: relative;
}
.fechadura-svg {
  width: 100%; height: 100%;
  transition: transform 0.4s ease, filter 0.4s ease;
  filter: drop-shadow(0 0 12px rgba(200,172,126,0.25));
}

.fechadura-text {
  font-family: var(--sans); font-weight: 500;
  font-size: 13px; letter-spacing: 0.36em; text-transform: uppercase;
  color: var(--gold);
  transition: color 0.3s ease, letter-spacing 0.4s ease;
}
.fechadura-hint {
  font-family: var(--serif); font-style: italic;
  font-size: 13px; color: rgba(232,223,211,0.4);
  margin-top: -20px;
  letter-spacing: 0.04em;
}

/* fade-out do conteúdo todo no final do zoom, para transição suave para a home */
.fechadura-screen.zoom {
  animation: fechaduraFadeOut 1.4s ease forwards;
}
@keyframes fechaduraFadeOut {
  0% { opacity: 1; }
  60% { opacity: 1; }
  100% { opacity: 0; }
}

/* ─────────────  ESTRUTURA DO PORTAL  ───────────── */

.portal { display: flex; min-height: 100vh; background: var(--paper); }
.portal-main {
  flex: 1; min-width: 0; display: flex; flex-direction: column;
  overflow-x: hidden;
}

/* topbar */
.topbar {
  height: 56px; border-bottom: 1px solid var(--line-soft);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 32px; background: var(--offwhite);
  font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--navy);
}
.topbar .out {
  opacity: 0.55; cursor: pointer; transition: opacity 0.2s;
  font-family: var(--sans); font-size: 11px; letter-spacing: 0.18em;
  background: none; border: none; color: var(--navy); text-transform: uppercase;
  padding: 4px 0;
}
.topbar .out:hover { opacity: 1; }

/* ─────────────  SIDEBAR  ───────────── */

.sidebar {
  width: 280px; flex: none;
  background: var(--offwhite);
  border-right: 1px solid var(--line);
  padding: 32px 24px; overflow-y: auto;
  position: sticky; top: 0; height: 100vh;
}
.sidebar-brand {
  padding-bottom: 24px; border-bottom: 1px solid var(--line-soft); margin-bottom: 24px;
}
.sidebar-brand .eyebrow { color: var(--gold); margin-bottom: 8px; font-size: 10px; }
.sidebar-brand .name {
  font-family: var(--serif); font-size: 22px; line-height: 1.05; color: var(--navy);
}
.sidebar-brand .turma {
  font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--ink-50); margin-top: 10px;
}
.sidebar-nav-home {
  display: block; width: 100%; text-align: left;
  background: var(--navy); color: var(--gold-soft);
  padding: 12px 16px; font-family: var(--sans); font-size: 11px;
  letter-spacing: 0.2em; text-transform: uppercase; font-weight: 500;
  border: none; cursor: pointer; margin-bottom: 24px;
  transition: background 0.2s;
}
.sidebar-nav-home:hover { background: var(--navy-soft); }
.sidebar-nav-home.active { background: var(--gold); color: var(--navy); }

.sidebar-nav-cal {
  background: transparent; color: var(--navy);
  border: 1px solid var(--line); margin-top: -16px; margin-bottom: 24px;
}
.sidebar-nav-cal:hover { background: rgba(166,139,91,0.08); }
.sidebar-nav-cal.active { background: var(--gold); color: var(--navy); border-color: var(--gold); }

/* ─────────────  CALENDÁRIO  ───────────── */

.cal-meses {
  display: grid; grid-template-columns: 1fr 1fr; gap: 56px;
  margin-bottom: 64px;
}
@media (max-width: 900px) {
  .cal-meses { grid-template-columns: 1fr; gap: 48px; }
}

.cal-mes-head {
  margin-bottom: 24px; padding-bottom: 16px;
  border-bottom: 1px solid var(--line);
}
.cal-mes-head .eyebrow { color: var(--gold); margin-bottom: 6px; }
.cal-mes-head h3 {
  font-family: var(--serif); font-style: italic; font-size: 36px;
  font-weight: 300; color: var(--navy);
}

.cal-grid-head {
  display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px;
  margin-bottom: 8px;
}
.cal-grid-head > div {
  font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--ink-50); text-align: center; padding: 6px 0; font-weight: 500;
}

.cal-grid {
  display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px;
}

.cal-cell {
  aspect-ratio: 1 / 0.95;
  padding: 8px 8px 6px;
  background: transparent;
  border: 1px solid var(--line-soft);
  display: flex; flex-direction: column; justify-content: space-between;
  position: relative; transition: all 0.15s;
}
.cal-cell--empty { border: none; background: transparent; }

.cal-day {
  font-family: var(--serif); font-size: 16px; font-weight: 300;
  color: var(--ink-70); line-height: 1;
}

.cal-tag {
  font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--gold); font-weight: 600; margin-top: auto;
}

/* dia com encontro — base */
.cal-cell--encontro {
  cursor: pointer;
  border-color: var(--line);
}
.cal-cell--encontro:hover {
  background: rgba(166,139,91,0.08);
  border-color: var(--gold);
  transform: translateY(-1px);
}

/* dia futuro com encontro */
.cal-cell--futuro {
  border-color: var(--gold-line);
}
.cal-cell--futuro .cal-day { color: var(--navy); font-weight: 400; }

/* dia atual (hoje + tem encontro) */
.cal-cell--atual {
  background: var(--navy); border-color: var(--navy);
}
.cal-cell--atual .cal-day { color: var(--beige); }
.cal-cell--atual .cal-tag { color: var(--gold-soft); }
.cal-cell--atual:hover {
  background: var(--navy-soft);
  transform: translateY(-1px);
}

/* dia já passado com encontro */
.cal-cell--concluido {
  opacity: 0.55;
  background: var(--offwhite);
}
.cal-cell--concluido .cal-day { color: var(--ink-50); text-decoration: line-through; text-decoration-color: var(--ink-30); }
.cal-cell--concluido .cal-tag { color: var(--ink-50); }

/* hoje sem encontro — só destaque sutil */
.cal-cell--hoje:not(.cal-cell--encontro) {
  border-color: var(--gold-line); border-width: 1px;
}
.cal-cell--hoje:not(.cal-cell--encontro) .cal-day {
  color: var(--gold);
}

/* legenda */
.cal-legenda {
  display: flex; justify-content: center; gap: 32px;
  padding: 24px; border-top: 1px solid var(--line-soft);
  font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--ink-50);
}
.cal-legenda > span {
  display: flex; align-items: center; gap: 8px;
}
.cal-dot {
  display: inline-block; width: 12px; height: 12px;
  border: 1px solid var(--line);
}
.cal-dot--concluido { background: var(--offwhite); border-color: var(--ink-30); }
.cal-dot--atual { background: var(--navy); border-color: var(--navy); }
.cal-dot--futuro { border-color: var(--gold); border-width: 1px; }

.sidebar-group { margin-bottom: 18px; }
.sidebar-group-title {
  font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
  font-weight: 600; color: var(--navy); margin-bottom: 10px;
  display: flex; align-items: center; gap: 6px;
  cursor: pointer; user-select: none;
}
.sidebar-group-title .arrow { font-size: 8px; color: var(--gold); transition: transform 0.2s; }
.sidebar-group.closed .arrow { transform: rotate(-90deg); }

.sidebar-list { list-style: none; margin: 0; padding: 0 0 0 12px; display: flex; flex-direction: column; gap: 2px; }

/* lista plana: encontros são blocos largos com sub-itens dentro */
.sidebar-list--flat { padding: 0; gap: 1px; }
.sidebar-block { list-style: none; }

.sidebar-item {
  display: flex; align-items: center; gap: 10px;
  padding: 7px 10px; font-size: 12px; line-height: 1.3;
  cursor: pointer; transition: background 0.15s;
  border-left: 2px solid transparent; margin-left: -12px; padding-left: 22px;
}
.sidebar-list--flat .sidebar-item {
  margin-left: 0; padding: 11px 12px 11px 14px;
  border-left: 2px solid transparent;
  align-items: flex-start;
}
.sidebar-item:hover { background: rgba(166,139,91,0.08); }
.sidebar-item.active {
  background: rgba(26,41,66,0.06); border-left-color: var(--gold);
  font-weight: 600; color: var(--navy);
}
.sidebar-item.concluido { opacity: 0.55; }
.sidebar-item .num { font-family: var(--serif); font-style: italic; color: var(--gold); font-size: 13px; flex: none; min-width: 22px; }
.sidebar-list--flat .sidebar-item .num { display: none; }
.sidebar-item .ttl { color: var(--ink-90); display: flex; flex-direction: column; gap: 1px; line-height: 1.25; flex: 1; min-width: 0; }
.sidebar-item .ttl .k {
  font-family: var(--sans); font-size: 9px; letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--ink-50); font-weight: 600;
}
.sidebar-item.atual .ttl .k { color: var(--gold); }
.sidebar-item .ttl > span:last-child {
  font-size: 12px; color: var(--ink-90); font-weight: 400;
  white-space: normal; word-break: break-word;
}
.sidebar-item.active .ttl > span:last-child { color: var(--navy); font-weight: 600; }
.sidebar-item .dot {
  width: 7px; height: 7px; border-radius: 50%; flex: none;
  background: var(--ink-15); margin-top: 6px;
}
.sidebar-item.atual .dot { background: var(--gold); box-shadow: 0 0 0 3px rgba(166,139,91,0.2); }
.sidebar-item.concluido .dot { background: var(--ink-30); }
.sidebar-item.concluido .num { opacity: 0.5; }

.sidebar-item .caret {
  font-size: 10px; color: var(--ink-50); flex: none;
  padding: 0 4px; align-self: center;
  transition: color 0.2s;
}
.sidebar-item .caret:hover { color: var(--gold); }

/* sub-itens (material, resumo) */
.sidebar-sublist {
  list-style: none; margin: 0; padding: 4px 0 8px 36px;
  display: flex; flex-direction: column; gap: 1px;
  background: rgba(26,41,66,0.03);
}
.sidebar-sub {
  display: flex; align-items: center; gap: 8px;
  padding: 6px 10px; font-size: 11px; color: var(--ink-70);
  cursor: pointer; transition: background 0.15s, color 0.15s;
  letter-spacing: 0.02em;
}
.sidebar-sub:hover { color: var(--navy); background: rgba(166,139,91,0.06); }
.sidebar-sub.active { color: var(--navy); font-weight: 600; }
.sidebar-sub .bullet { color: var(--gold); font-size: 14px; line-height: 0.8; }

/* ─────────────  HOME — HERO  ───────────── */

.hero {
  display: grid; grid-template-columns: 1.05fr 0.95fr;
  min-height: 460px; position: relative;
}
.hero--solo { grid-template-columns: 1fr; }
.hero--solo .hero-left { padding: 80px 64px 88px; }
.hero--solo .hero-left h1 { font-size: 64px; max-width: 720px; }
.hero--solo .hero-left p { max-width: 540px; }
.hero--solo .hero-quote { max-width: 540px; }
.hero-left {
  background: var(--navy); color: var(--offwhite);
  padding: 64px 56px 72px; position: relative;
  background-image: radial-gradient(ellipse at top right, rgba(166,139,91,0.20), transparent 65%);
}
.hero-frame {
  position: absolute; inset: 16px; border: 1px solid rgba(166,139,91,0.32); pointer-events: none;
}
.hero-eyebrow { color: var(--gold-soft); margin-bottom: 36px; }
.hero-left h1 {
  font-size: 56px; color: var(--beige); line-height: 1.02; margin-bottom: 20px;
}
.hero-left h1 .it { font-style: italic; font-weight: 300; color: var(--beige); }
.hero-left p {
  font-size: 14px; line-height: 1.65; opacity: 0.82;
  max-width: 420px; margin: 0 0 28px;
}
.hero-quote {
  font-family: var(--serif); font-style: italic; color: var(--gold-soft);
  font-size: 17px; line-height: 1.4; max-width: 380px;
  padding-top: 24px; border-top: 1px solid rgba(200,172,126,0.25);
  margin-top: 32px;
}
.hero-right {
  background: var(--navy-deep);
  position: relative; overflow: hidden;
  display: flex; align-items: stretch; justify-content: stretch;
}
.hero-right img {
  width: 100%; height: 100%; object-fit: cover;
  filter: contrast(1.05) brightness(0.95);
}
.hero-credit {
  position: absolute; bottom: 16px; right: 16px;
  font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase;
  color: rgba(232,223,211,0.6); font-weight: 500;
  padding: 4px 8px; background: rgba(0,0,0,0.4);
  pointer-events: none;
}

/* ─────────────  HOME — PRÓXIMO + ÚLTIMO  ───────────── */

.section { padding: 64px 56px; }
.section-paper { background: var(--paper); }
.section-paper--first { padding-top: 88px; }
.section-offwhite { background: var(--offwhite); }

.section-head {
  text-align: center; margin-bottom: 40px;
}
.section-head h2 {
  font-size: 34px; color: var(--navy);
}
.section-head h2 .it { font-style: italic; color: var(--gold); }
.section-head .divider {
  width: 60px; height: 1px; background: var(--gold-line);
  margin: 18px auto;
}
.section-head p {
  font-size: 13px; color: var(--ink-50); max-width: 460px; margin: 0 auto;
  line-height: 1.6;
}

.cards-row {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 24px; max-width: 920px; margin: 0 auto;
}
.card {
  background: var(--paper); border: 1px solid var(--line);
  padding: 32px 32px 28px; position: relative;
  display: flex; flex-direction: column;
  transition: border-color 0.2s, transform 0.2s;
  cursor: pointer;
}
.card:hover { border-color: var(--gold-line); transform: translateY(-2px); }
.card-filete::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: var(--gold);
}
.card .pill {
  display: inline-block; align-self: flex-start;
  font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
  font-weight: 600; padding: 5px 10px; margin-bottom: 16px;
}
.pill--gold { background: var(--navy); color: var(--gold-soft); }
.pill--outline { border: 1px solid var(--line); color: var(--ink-50); }
.pill--ok { background: rgba(106,115,136,0.15); color: var(--ink-50); }

.card .num {
  font-family: var(--serif); font-size: 28px; color: var(--navy); margin-bottom: 4px;
}
.card .ttl {
  font-family: var(--serif); font-size: 22px; line-height: 1.15; font-style: italic;
  font-weight: 400; color: var(--navy); margin-bottom: 14px;
}
.card .desc {
  font-size: 12px; color: var(--ink-70); line-height: 1.6; margin-bottom: 20px;
  flex: 1;
}
.card .meta {
  font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--ink-50); margin-bottom: 14px;
}
.card .arrow {
  font-family: var(--sans); font-size: 12px; letter-spacing: 0.16em;
  text-transform: uppercase; color: var(--navy); font-weight: 600;
  margin-top: auto;
}

/* ─────────────  HOME — JORNADA  ───────────── */

.journey {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 4px;
  max-width: 1080px; margin: 0 auto;
  border: 1px solid var(--line); background: var(--line);
}
.journey-item {
  background: var(--paper); padding: 18px 22px;
  display: flex; align-items: center; gap: 14px;
  cursor: pointer; transition: background 0.15s;
  min-height: 64px;
}
.journey-item:hover { background: var(--offwhite); }
.journey-item.atual { background: var(--navy); color: var(--offwhite); }
.journey-item.atual:hover { background: var(--navy-soft); }
.journey-item.concluido { opacity: 0.55; }
.journey-item .num {
  font-family: var(--serif); font-style: italic; font-size: 18px;
  color: var(--gold); flex: none; min-width: 28px;
}
.journey-item.atual .num { color: var(--gold-soft); }
.journey-item .ttl { font-size: 12px; color: var(--ink-90); flex: 1; line-height: 1.3; display: flex; flex-direction: column; gap: 2px; }
.journey-item .ttl .k {
  font-family: var(--sans); font-size: 9px; letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--ink-50); font-weight: 500;
}
.journey-item.atual .ttl .k { color: var(--gold-soft); }
.journey-item.concluido .ttl .k { opacity: 0.7; }
.journey-item.atual .ttl { color: var(--offwhite); }
.journey-item .data {
  font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--ink-50); flex: none;
}
.journey-item.atual .data { color: var(--gold-soft); }

.signature {
  text-align: center; padding: 56px 24px 40px;
  font-family: var(--serif); font-style: italic; font-size: 14px;
  color: var(--ink-50); letter-spacing: 0.02em;
}

/* ─────────────  PÁGINA DE ENCONTRO  ───────────── */

.encontro-page { padding: 64px 64px 96px; max-width: 880px; margin: 0 auto; }
.crumbs {
  font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--ink-50); margin-bottom: 32px;
}
.crumbs .home-link { color: var(--gold); cursor: pointer; }
.crumbs .home-link:hover { color: var(--gold-soft); }
.crumbs .sep { margin: 0 10px; opacity: 0.5; }

.encontro-head {
  display: grid; grid-template-columns: auto 1fr; gap: 48px;
  align-items: end; padding-bottom: 32px; border-bottom: 1px solid var(--line);
  margin-bottom: 48px;
}
.encontro-num {
  font-family: var(--serif); font-style: italic; font-size: 96px;
  line-height: 1; color: var(--gold); font-weight: 300;
}
.encontro-meta { padding-bottom: 12px; }
.encontro-meta .eyebrow { color: var(--gold); margin-bottom: 14px; }
.encontro-meta h1 {
  font-size: 44px; line-height: 1.05; color: var(--navy); margin-bottom: 14px;
}
.encontro-meta .data {
  font-size: 13px; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--ink-70);
}

/* status stripe */
.status-stripe {
  display: flex; align-items: center; gap: 16px;
  padding: 16px 24px; margin-bottom: 40px;
  border: 1px solid var(--line);
}
.status-stripe.atual { border-color: var(--gold); background: rgba(166,139,91,0.06); }
.status-stripe.concluido { border-color: var(--line); background: var(--offwhite); }
.status-stripe .label {
  font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
  font-weight: 600; color: var(--navy);
}
.status-stripe.atual .label { color: var(--gold); }
.status-stripe .text {
  font-size: 13px; color: var(--ink-70); line-height: 1.5; flex: 1;
}

/* descrição */
.encontro-desc {
  font-family: var(--serif); font-size: 22px; line-height: 1.45;
  color: var(--ink-70); margin-bottom: 56px; max-width: 720px;
  font-weight: 300;
}

/* ações */
.actions {
  display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 56px;
}
.btn {
  font-family: var(--sans); font-size: 12px; letter-spacing: 0.16em;
  text-transform: uppercase; font-weight: 600;
  padding: 16px 28px; border: none; cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  display: inline-flex; align-items: center; gap: 10px;
  text-decoration: none;
}
.btn--primary { background: var(--navy); color: var(--gold-soft); }
.btn--primary:hover { background: var(--navy-soft); }
.btn--gold { background: var(--gold); color: var(--navy); }
.btn--gold:hover { background: var(--gold-soft); }
.btn--ghost {
  background: transparent; color: var(--navy); border: 1px solid var(--line);
}
.btn--ghost:hover { border-color: var(--gold); color: var(--gold-deep); }
.btn--disabled {
  background: var(--ink-08); color: var(--ink-50); cursor: not-allowed; pointer-events: none;
}

/* materiais e resumo */
.block {
  margin-bottom: 56px; padding-bottom: 48px;
  border-bottom: 1px solid var(--line-soft);
}
.block:last-child { border: none; }
.block-head {
  display: flex; align-items: baseline; gap: 16px; margin-bottom: 24px;
}
.block-head h2 { font-size: 28px; color: var(--navy); }
.block-head h2 .it { font-style: italic; color: var(--gold); }
.block-head .eyebrow { color: var(--gold); }

.material-list { list-style: none; margin: 0; padding: 0; }
.material-item {
  display: flex; align-items: center; gap: 18px;
  padding: 16px 0; border-bottom: 1px solid var(--line-soft);
  cursor: pointer; transition: background 0.15s;
}
.material-item:hover { background: rgba(166,139,91,0.04); padding-left: 12px; padding-right: 12px; margin: 0 -12px; }
.material-item .icon {
  width: 36px; height: 36px; flex: none; border: 1px solid var(--line);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--serif); font-size: 11px; font-style: italic; color: var(--gold);
  letter-spacing: 0.05em;
}
.material-item .info { flex: 1; }
.material-item .info .name { font-size: 14px; color: var(--navy); margin-bottom: 2px; }
.material-item .info .meta { font-size: 11px; color: var(--ink-50); letter-spacing: 0.04em; }
.material-item .arrow { font-size: 14px; color: var(--gold); }

.resumo-body {
  font-size: 15px; line-height: 1.75; color: var(--ink-70);
  max-width: 640px;
}
.resumo-body p { margin: 0 0 16px; }

.empty {
  font-family: var(--serif); font-style: italic; font-size: 16px;
  color: var(--ink-50); padding: 24px 0;
}

/* navegação anterior/próximo */
.encontro-nav {
  display: grid; grid-template-columns: 1fr 1fr; gap: 24px;
  margin-top: 64px; padding-top: 40px; border-top: 1px solid var(--line);
}
.nav-item {
  padding: 20px 24px; border: 1px solid var(--line); cursor: pointer;
  transition: border-color 0.2s;
}
.nav-item:hover { border-color: var(--gold); }
.nav-item.disabled { opacity: 0.4; pointer-events: none; }
.nav-item .dir {
  font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--ink-50); margin-bottom: 8px;
}
.nav-item .ttl {
  font-family: var(--serif); font-style: italic; font-size: 18px;
  color: var(--navy);
}
.nav-item.next { text-align: right; }

/* responsividade */
@media (max-width: 900px) {
  .sidebar { display: none; }
  .hero { grid-template-columns: 1fr; }
  .hero-left { padding: 40px 28px; }
  .hero-left h1 { font-size: 40px; }
  .hero-right { min-height: 220px; }
  .section { padding: 40px 24px; }
  .cards-row { grid-template-columns: 1fr; max-width: 100%; }
  .journey { grid-template-columns: 1fr; }
  .encontro-page { padding: 32px 24px 64px; }
  .encontro-head { grid-template-columns: 1fr; gap: 16px; align-items: start; }
  .encontro-num { font-size: 64px; }
  .encontro-meta h1 { font-size: 32px; }
  .encontro-desc { font-size: 18px; }
  .encontro-nav { grid-template-columns: 1fr; }
}
