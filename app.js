const I={
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  cap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5 9-10"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5z"/><path d="m8.5 12 2.5 2.5 4.5-5" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5"/></svg>',
  chalk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>',
  both:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 7h11l-3-3M17 17H6l3 3"/></svg>',
  left:'‹'
};
const COLORS=['#1f4d6b','#2f8f6b','#b5651d','#6a4c93','#c0392b'];
const TUTORS=[
  {id:'laura',ini:'LM',name:'Laura Méndez',prog:'Ing. Civil · 8.º semestre',subj:['Cálculo Diferencial','Cálculo Integral','Ecuaciones Diferenciales'],rate:30000,stars:4.9,rev:37,mode:'Presencial y virtual',c:0,
   bio:'Monitora de Cálculo dos semestres. Explico con ejercicios tipo parcial y te dejo una guía resuelta después de cada sesión.',
   reviews:[['Andrés P.','Me preparó para el segundo parcial de Integral en dos sesiones. Muy clara con los métodos de integración.'],['Valentina R.','Puntual y paciente. La guía resuelta me sirvió mucho.']]},
  {id:'sebastian',ini:'SR',name:'Sebastián Rueda',prog:'Ing. de Sistemas · 9.º semestre',subj:['Programación I','Estructuras de Datos','Bases de Datos'],rate:35000,stars:4.8,rev:22,mode:'Virtual',c:1,
   bio:'Desarrollador en práctica. Te ayudo a depurar tu código y entender la lógica, no a copiar soluciones.',
   reviews:[['Camila T.','Entendí recursión por fin. Usa ejemplos muy prácticos.']]},
  {id:'daniela',ini:'DG',name:'Daniela Gómez',prog:'Diseño Gráfico · 7.º semestre',subj:['Ilustración Digital','Tipografía','Adobe Illustrator'],rate:28000,stars:5.0,rev:15,mode:'Presencial',c:2,
   bio:'Acompaño entregas de proyecto: composición, retícula y manejo de herramientas.',
   reviews:[['Mateo L.','Me ayudó a organizar mi portafolio para la entrega final.']]},
  {id:'juan',ini:'JC',name:'Juan Camilo Díaz',prog:'Ing. Electrónica · 6.º semestre',subj:['Física Mecánica','Física Eléctrica'],rate:25000,stars:4.6,rev:11,mode:'Presencial y virtual',c:3,
   bio:'Resuelvo talleres paso a paso y te enseño a plantear diagramas de cuerpo libre.',
   reviews:[['Sara M.','Buenas explicaciones, aunque la sesión se extendió un poco.']]}
];
const st={role:'aprender',subject:'Todas',tutor:'laura',day:1,slot:'4:00 p. m.',mode:'Presencial',topic:'Repaso de integración por partes y sustitución trigonométrica para el parcial.',pay:'nequi',stars:5};
const FLOW=[
  ['bienvenida','Registro','Elige si quieres aprender, enseñar o ambas'],
  ['buscar','Búsqueda','Filtra tutores por materia y modalidad'],
  ['tutor','Perfil del tutor','Materias, reseñas, verificación y tarifa'],
  ['reservar','Reserva','Día, hora, modalidad y tema'],
  ['pago','Pago','Resumen y medio de pago'],
  ['confirmada','Confirmación','Sesión agendada y recordatorio'],
  ['calificar','Calificación','Reseña después de la tutoría'],
  ['panel','Panel del tutor','Perfil, agenda e ingresos del tutor']
];
const money=n=>'$'+n.toLocaleString('es-CO');
const T=()=>TUTORS.find(t=>t.id===st.tutor);
const DAYS=[['Lun','9'],['Mar','10'],['Mié','11'],['Jue','12'],['Vie','13']];
const SLOTS=['7:00 a. m.','10:00 a. m.','12:00 m.','2:00 p. m.','4:00 p. m.','6:00 p. m.'];
const TAKEN={0:['7:00 a. m.','2:00 p. m.'],1:['10:00 a. m.','6:00 p. m.'],2:['12:00 m.'],3:['4:00 p. m.'],4:[]};

function stars(n){return '★'.repeat(Math.round(n))+'<span style="color:var(--line)">'+'★'.repeat(5-Math.round(n))+'</span>'}
function av(t,lg){return `<div class="av${lg?' lg':''}" style="background:${COLORS[t.c]}">${t.ini}</div>`}
function back(to,label){return `<button class="back" data-go="${to}">${I.left} ${label}</button>`}

const V={
bienvenida:()=>`
  <div class="stack" style="padding-top:8px">
    <div class="hero stack">
      <span class="example" style="color:var(--sun-soft)">Comunidad UPB</span>
      <h1>Aprende con quien ya pasó la materia.</h1>
      <p class="sm" style="margin:0;opacity:.85">Tutorías entre estudiantes con horarios flexibles, perfiles verificados y reseñas reales.</p>
    </div>
    <h2>¿Cómo quieres usar TutoPar?</h2>
    ${[['aprender','book','Quiero aprender','Busca tutores y agenda sesiones'],['ensenar','chalk','Quiero enseñar','Publica tus materias y genera ingresos'],['ambas','both','Ambas','Aprende en unas materias y enseña en otras']].map(([k,ic,t,d])=>`
      <button class="card role${st.role===k?' on':''}" data-role="${k}" aria-pressed="${st.role===k}"><span class="ic">${I[ic]}</span><span><span class="h3">${t}</span><span class="sm muted">${d}</span></span></button>`).join('')}
    <div class="card row sm"><span class="ver">${I.shield}</span><span>Regístrate con tu correo institucional <b>@upb.edu.co</b> para obtener el sello de estudiante verificado.</span></div>
    <button class="btn" data-go="${st.role==='ensenar'?'panel':'buscar'}">Continuar</button>
  </div>`,
buscar:()=>{
  const subs=['Todas','Cálculo','Programación','Física','Diseño'];
  const list=TUTORS.filter(t=>st.subject==='Todas'||t.subj.some(s=>s.toLowerCase().includes(st.subject.toLowerCase().slice(0,5))));
  return `
  <div class="stack">
    <div class="row between"><div><span class="sm muted">Hola, Manuel</span><h1 style="font-size:23px">¿Qué materia necesitas?</h1></div></div>
    <label class="search">${I.search}<input id="q" placeholder="Busca una materia o tema" aria-label="Buscar materia"></label>
    <div class="chips" role="group" aria-label="Filtrar por área">${subs.map(s=>`<button class="chip${st.subject===s?' on':''}" data-subj="${s}">${s}</button>`).join('')}</div>
    <div class="chips"><span class="chip">Modalidad: todas</span><span class="chip">Hasta $40.000</span><span class="chip">4.5★ o más</span><span class="chip">Disponible esta semana</span></div>
    <div class="row between"><span class="sm muted">${list.length} tutores disponibles</span><span class="example">Datos de ejemplo</span></div>
    ${list.map(t=>`
      <button class="card tutor" data-tutor="${t.id}">
        ${av(t)}
        <span class="stack" style="gap:5px;min-width:0">
          <span class="row between"><span class="h3">${t.name}</span><span class="price">${money(t.rate)}<span class="sm muted" style="font-weight:500">/h</span></span></span>
          <span class="sm muted">${t.prog}</span>
          <span class="row" style="flex-wrap:wrap;gap:5px">${t.subj.slice(0,2).map(s=>`<span class="tag">${s}</span>`).join('')}</span>
          <span class="row sm" style="gap:8px"><span class="stars">${stars(t.stars)}</span><b>${t.stars.toFixed(1)}</b><span class="muted">(${t.rev})</span><span class="ver" style="margin-left:auto">${I.shield} UPB</span></span>
        </span>
      </button>`).join('')}
  </div>`},
tutor:()=>{const t=T();return `
  ${back('buscar','Resultados')}
  <div class="stack">
    <div class="row" style="gap:14px">${av(t,1)}<div class="stack" style="gap:3px"><h2>${t.name}</h2><span class="sm muted">${t.prog}</span><span class="ver">${I.shield} Estudiante UPB verificado</span></div></div>
    <div class="grid2">
      <div class="card stat"><span class="sm muted">Calificación</span><b>${t.stars.toFixed(1)} <span class="stars" style="font-size:15px">★</span></b><span class="sm muted">${t.rev} reseñas</span></div>
      <div class="card stat"><span class="sm muted">Tarifa por hora</span><b>${money(t.rate)}</b><span class="sm muted">${t.mode}</span></div>
    </div>
    <div class="card stack" style="gap:8px"><h3>Sobre mí</h3><p class="sm" style="margin:0">${t.bio}</p></div>
    <div class="card stack" style="gap:8px"><h3>Materias que enseña</h3><div class="row" style="flex-wrap:wrap;gap:6px">${t.subj.map(s=>`<span class="tag">${s}</span>`).join('')}</div></div>
    <div class="card stack" style="gap:10px"><div class="row between"><h3>Reseñas</h3><span class="example">Ejemplo</span></div>
      ${t.reviews.map(([n,r])=>`<div class="review"><div class="row between sm"><b>${n}</b><span class="stars">★★★★★</span></div><p class="sm muted" style="margin:4px 0 0">${r}</p></div>`).join('')}
    </div>
    <button class="btn alt" data-go="reservar">Reservar tutoría</button>
  </div>`},
reservar:()=>{const t=T();return `
  ${back('tutor','Perfil')}
  <div class="stack">
    <div class="row">${av(t)}<div><h2>Reservar con ${t.name.split(' ')[0]}</h2><span class="sm muted">Sesión de 1 hora · ${money(t.rate)}</span></div></div>
    <h3>Noviembre</h3>
    <div class="days">${DAYS.map(([d,n],i)=>`<button class="opt${st.day===i?' on':''}" data-day="${i}"><small>${d}</small>${n}</button>`).join('')}</div>
    <h3>Hora disponible</h3>
    <div class="slots">${SLOTS.map(s=>{const off=TAKEN[st.day].includes(s);return `<button class="opt${st.slot===s&&!off?' on':''}" data-slot="${s}" ${off?'disabled aria-label="'+s+' ocupado"':''}>${s}</button>`}).join('')}</div>
    <h3>Modalidad</h3>
    <div class="slots" style="grid-template-columns:1fr 1fr">${['Presencial','Virtual'].map(m=>`<button class="opt${st.mode===m?' on':''}" data-mode="${m}">${m}</button>`).join('')}</div>
    <p class="sm muted" style="margin:-4px 0 0">${st.mode==='Presencial'?'Punto de encuentro sugerido: Biblioteca UPB, salas de estudio grupal.':'Recibirás un enlace de videollamada al confirmar.'}</p>
    <h3>¿Qué quieres trabajar?</h3>
    <textarea id="topic" rows="3" aria-label="Tema de la tutoría">${st.topic}</textarea>
    <button class="btn" data-go="pago">Continuar al pago</button>
  </div>`},
pago:()=>{const t=T(),fee=Math.round(t.rate*0.10);return `
  ${back('reservar','Reserva')}
  <div class="stack">
    <h2>Resumen y pago</h2>
    <div class="card">
      <div class="row" style="margin-bottom:8px">${av(t)}<div><h3>${t.subj[0]}</h3><span class="sm muted">${t.name} · ${DAYS[st.day][0]} ${DAYS[st.day][1]} nov · ${st.slot} · ${st.mode}</span></div></div>
      <div class="line"><span>Tutoría (1 hora)</span><span>${money(t.rate)}</span></div>
      <div class="line muted"><span>Tarifa de servicio TutoPar (10%)*</span><span>${money(fee)}</span></div>
      <div class="line tot"><span>Total a pagar</span><span class="price">${money(t.rate+fee)}</span></div>
    </div>
    <h3>Medio de pago</h3>
    ${[['nequi','Nequi','Celular registrado'],['pse','PSE','Débito desde tu banco'],['card','Tarjeta','Crédito o débito']].map(([k,n,d])=>`
      <button class="card pay${st.pay===k?' on':''}" data-pay="${k}"><span class="dot"></span><span style="text-align:left"><span class="h3">${n}</span><span class="sm muted">${d}</span></span><span></span></button>`).join('')}
    <div class="card sm row" style="align-items:flex-start"><span class="ver">${I.shield}</span><span>El pago queda retenido y se libera al tutor cuando la sesión se marca como realizada. Si el tutor cancela, recibes el reembolso completo.</span></div>
    <button class="btn alt" data-go="confirmada">Pagar ${money(t.rate+fee)}</button>
    <p class="sm muted" style="margin:0">*Porcentaje de ejemplo. La comisión se definirá con la validación de mercado.</p>
  </div>`},
confirmada:()=>{const t=T();return `
  <div class="stack" style="text-align:center">
    <div class="ok">${I.check}</div>
    <h1>¡Tutoría agendada!</h1>
    <p class="muted" style="margin:0">Le avisamos a ${t.name.split(' ')[0]}. Te recordaremos 1 hora antes.</p>
    <div class="card stack" style="text-align:left;gap:6px">
      <div class="row">${av(t)}<div><h3>${t.subj[0]}</h3><span class="sm muted">con ${t.name}</span></div></div>
      <div class="line"><span class="muted">Fecha</span><span>${['Lunes','Martes','Miércoles','Jueves','Viernes'][st.day]} ${DAYS[st.day][1]} de noviembre</span></div>
      <div class="line"><span class="muted">Hora</span><span>${st.slot}</span></div>
      <div class="line"><span class="muted">Lugar</span><span>${st.mode==='Presencial'?'Biblioteca UPB':'Videollamada'}</span></div>
      <div class="line"><span class="muted">Estado del pago</span><span class="ver">Retenido hasta la sesión</span></div>
    </div>
    <button class="btn ghost" data-toast="Abrimos el chat con ${t.name.split(' ')[0]}">Escribir al tutor</button>
    <button class="btn" data-go="calificar">Simular: la sesión terminó</button>
  </div>`},
calificar:()=>{const t=T();return `
  <div class="stack" style="text-align:center;padding-top:10px">
    ${av(t,1).replace('class="av lg"','class="av lg" style="margin:0 auto;background:'+COLORS[t.c]+'"')}
    <h2>¿Cómo te fue con ${t.name.split(' ')[0]}?</h2>
    <p class="sm muted" style="margin:0">${t.subj[0]} · ${DAYS[st.day][0]} ${DAYS[st.day][1]} nov</p>
    <div class="big-stars" role="group" aria-label="Calificación">${[1,2,3,4,5].map(n=>`<button class="${n<=st.stars?'on':''}" data-star="${n}" aria-label="${n} estrellas">★</button>`).join('')}</div>
    <div class="chips" style="justify-content:center;flex-wrap:wrap">${['Explica claro','Puntual','Buen material','Paciente'].map((c,i)=>`<button class="chip${i<2?' on':''}" data-toggle>${c}</button>`).join('')}</div>
    <textarea id="rev" rows="3" aria-label="Reseña" style="text-align:left">Muy clara con los ejercicios tipo parcial. Repetiría.</textarea>
    <button class="btn alt" data-toast="Gracias. Tu reseña ya aparece en el perfil." data-after="buscar">Publicar reseña</button>
  </div>`},
panel:()=>`
  <div class="stack">
    <div><span class="sm muted">Modo tutor</span><h1 style="font-size:23px">Tu panel de tutor</h1></div>
    <div class="grid2">
      <div class="card stat"><span class="sm muted">Ingresos de noviembre</span><b>${money(270000)}</b><span class="sm muted">9 sesiones</span></div>
      <div class="card stat"><span class="sm muted">Calificación</span><b>4.9 <span class="stars" style="font-size:15px">★</span></b><span class="sm muted">37 reseñas</span></div>
    </div>
    <div class="card stack" style="gap:8px">
      <div class="row between"><h3>Perfil completo</h3><span class="sm muted">80%</span></div>
      <div class="bar"><i style="width:80%"></i></div>
      <span class="sm muted">Agrega un video corto de presentación para aparecer más arriba en las búsquedas.</span>
    </div>
    <div class="card stack" style="gap:10px">
      <h3>Mis materias y tarifas</h3>
      ${[['Cálculo Diferencial',30000],['Cálculo Integral',30000],['Ecuaciones Diferenciales',35000]].map(([s,r])=>`<div class="row between sm"><span>${s}</span><span class="price">${money(r)}/h</span></div>`).join('')}
      <button class="btn ghost" data-toast="Formulario para agregar materia (próxima versión)">Agregar materia</button>
    </div>
    <div class="card stack" style="gap:8px">
      <h3>Próximas sesiones</h3>
      <div class="row between sm"><span><b>Mar 10</b> · 4:00 p. m. · Andrés P.</span><span class="tag">Presencial</span></div>
      <div class="row between sm"><span><b>Jue 12</b> · 6:00 p. m. · Valentina R.</span><span class="tag">Virtual</span></div>
    </div>
    <div class="card stack" style="gap:8px">
      <h3>Disponibilidad semanal</h3>
      <div class="days">${DAYS.map(([d],i)=>`<span class="opt${[0,1,3].includes(i)?' on':''}"><small>${d}</small>${[0,1,3].includes(i)?'2–6 p. m.':'—'}</span>`).join('')}</div>
    </div>
    <span class="example" style="text-align:center">Datos de ejemplo</span>
  </div>`
};
const TABS=[['buscar','Buscar','search'],['confirmada','Sesiones','cal'],['panel','Tutor','cap'],['bienvenida','Perfil','user']];
let cur='bienvenida';
function render(){
  const v=document.getElementById('view');
  v.innerHTML=V[cur]();v.scrollTop=0;
  document.getElementById('flow').innerHTML=FLOW.map(([k,t,d],i)=>`<li><button data-go="${k}" aria-current="${k===cur}"><span class="n">${String(i+1).padStart(2,'0')}</span><span><b>${t}</b><small>${d}</small></span></button></li>`).join('');
  document.getElementById('tabbar').innerHTML=TABS.map(([k,l,ic])=>`<button data-go="${k}" aria-current="${k===cur||(k==='buscar'&&['tutor','reservar','pago'].includes(cur))}">${I[ic]}${l}</button>`).join('');
  const ta=document.getElementById('topic');if(ta)ta.oninput=e=>st.topic=e.target.value;
}
function go(k){if(!V[k])return;cur=k;if(location.hash.slice(1)!==k)history.replaceState(null,'','#'+k);render()}
function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('show'),2200)}
document.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;const d=b.dataset;
  if(d.role){st.role=d.role;render();return}
  if(d.subj){st.subject=d.subj;render();return}
  if(d.tutor){st.tutor=d.tutor;go('tutor');return}
  if(d.day){st.day=+d.day;if(TAKEN[st.day].includes(st.slot))st.slot=SLOTS.find(s=>!TAKEN[st.day].includes(s));render();return}
  if(d.slot){st.slot=d.slot;render();return}
  if(d.mode){st.mode=d.mode;render();return}
  if(d.pay){st.pay=d.pay;render();return}
  if(d.star){st.stars=+d.star;render();return}
  if('toggle' in d){b.classList.toggle('on');return}
  if(d.toast){toast(d.toast);if(d.after)setTimeout(()=>go(d.after),1200);return}
  if(d.go)go(d.go);
});
window.addEventListener('hashchange',()=>{const h=location.hash.slice(1);if(V[h]&&h!==cur){cur=h;render()}});
cur=V[location.hash.slice(1)]?location.hash.slice(1):'bienvenida';
render();
