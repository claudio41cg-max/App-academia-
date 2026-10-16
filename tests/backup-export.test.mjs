import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const html=readFileSync('index.html','utf8');
test('existing app inline scripts remain valid JavaScript',()=>{
 const chunks=html.split('<script>');
 assert.ok(chunks.length>1);
 for(const chunk of chunks.slice(1)){
  const script=chunk.split('</script>')[0];
  if(script.trim())new vm.Script(script);
 }
});
test('exports workout backup without payment credentials',()=>{
 assert.ok(html.includes('id="btn-exportar-backup"'));
 const start=html.indexOf('function exportarBackupAcademia()');
 const end=html.indexOf('function salvarEstado()',start);
 assert.ok(start>=0&&end>start,'export function must be defined');
 const source=html.slice(start,end);
 const items=[];
 const fakeLink={click(){items.push('download');},remove(){}};
 const mock={
  localStorage:{getItem:()=>JSON.stringify({aluno:{nome:'Teste'},historicoCarga:[12],pagamento:{senha:'secret'}})},
  STORAGE_KEY:'smartphysical_v30',estado:{},JSON,Date,Blob,
  URL:{createObjectURL:()=>'/blob',revokeObjectURL:()=>{}},
  document:{createElement:()=>fakeLink,body:{appendChild(){}}},
  mostrarToast:()=>{},console,setTimeout:()=>{}
 };
 new vm.Script(source+'; exportarBackupAcademia();').runInNewContext(mock);
 assert.deepEqual(items,['download']);
 assert.ok(source.includes('delete seguro.pagamento'));
});

test('progress indicators use actual saved loads and preserve exercise media',()=>{
 assert.ok(html.includes('function recordeCargaDoExercicio(exercicioId)'));
 assert.ok(html.includes("mostrarToast('🏆 Novo recorde pessoal de carga!')"));
 assert.ok(html.includes('const ultimoRegistro = registrosCargaDoExercicio(ex.id)[0]'));
 assert.ok(html.includes('totalDiasTreinadosNoMes(ano, mes)'));
 assert.ok(html.includes('treino-registrado-cal'));
 assert.ok(html.includes('gif.src = ex.gif'));
});

test('exercise cards open approved detail screen without replacing GIFs',()=>{
 assert.ok(html.includes("card.addEventListener('click',()=>abrirDetalheExercicio(ex,'view-treino-dia'))"));
 assert.ok(html.includes('gif.src = ex.gif'));
});
test('long press reveals a single trash icon without numeric prompts',()=>{
 assert.ok(html.includes('function configurarPressaoLonga('));
 assert.ok(html.includes("lixo.textContent='🗑️'"));
 assert.ok(html.includes("function excluirTreinoSemanal("));
 assert.ok(html.includes("function excluirExercicioSemanal("));
 assert.ok(html.includes("configurarPressaoLonga(cardHoje,"));
 assert.ok(!html.includes('function exclusaoTreinoMenu('));
 assert.ok(!html.includes('function menuRemoverExercicio('));
 assert.ok(html.includes("if(e.target===lixo)return;"));
 const a=html.slice(html.indexOf('function excluirTreinoSemanal('),html.indexOf('function renderizarTreinosVertical()'));
 assert.ok(!a.includes('estado.historicoCarga='));
});

test('new chest exercise appears first without replacing existing ten entries',()=>{
 const section=html.slice(html.indexOf('const DATABASE_EXERCICIOS = [];'),html.indexOf('const GLUTEO_INFO = {'));
 assert.ok(section.includes("id:'e101'"));
 assert.ok(section.includes("ordem:0.5"));
 assert.ok(section.includes("nome:'Flexão de Braços no Solo'"));
 assert.ok(section.includes("fonteMidia:'https://commons.wikimedia.org/wiki/File:Pushups.gif'"));
 assert.ok(section.includes("licencaMidia:'CC BY-SA 4.0'"));
 for(const id of ['e3','e6','e10','e4','e7','e2','e1','e5','e8','e9'])assert.ok(section.includes(id+': {'));
});


test('weight card full width in its original home position',()=>{
 const a=html.indexOf('id="btn-menu-exercicios"'),b=html.indexOf('id="btn-evolucao-peso"'),d=html.indexOf('id="btn-menu-x5"');
 assert.ok(a>=0&&b>a&&d>b);
 assert.ok(html.includes('.peso-card-home{grid-column:1/-1'));
 assert.ok(html.includes('<strong>Evolução e Meta</strong>'));
 assert.ok(html.includes('id="view-evolucao-peso"'));
 assert.ok(html.includes('id="peso-svg"'));
});
test('weight records are validated and persisted',()=>{
 const source=html.slice(html.indexOf('function pesoRegistros()'),html.indexOf('// EVENTOS GERAIS'));
 const matches=[...source.matchAll(/\/\^([^\n]+?)\$\/\.test\(/g)];
 assert.ok(matches.length>=2);
 for(const m of matches){const re=new RegExp('^'+m[1]+'$');assert.ok(re.test('2026-10-15'));assert.ok(!re.test('15/10/2026'));}
 assert.ok(html.includes('estado.pesoRegistros.push({data,kg})'));
 assert.ok(html.includes('estado.pesoMeta=v'));
 assert.ok(html.includes('salvarEstado();document.getElementById'));
});
test('reference chart and weight sheet are implemented',()=>{
 assert.ok(html.includes("const X=t=>t0===t1?180"));
 assert.ok(html.includes("area.addEventListener('pointermove'"));
 assert.ok(html.includes("area.addEventListener('pointerdown'"));
 assert.ok(html.includes("pesoDia(selected.d)+' · '+pesoFmt(selected.y)+' kg'"));
 assert.ok(html.includes('id="peso-overlay"'));
 assert.ok(html.includes('id="peso-slider"'));
 assert.ok(html.includes('data-peso-delta="-0.5"'));
 assert.ok(html.includes('Média semanal'));
 assert.ok(html.includes('id="view-pesagens"'));
});

test('simple horizontal weight card and dark green palette retain full tracking',()=>{
 const card=html.slice(html.indexOf('id="btn-evolucao-peso"'),html.indexOf('id="btn-menu-x5"'));
 assert.ok(card.includes('class="peso-card-copy"'));
 assert.ok(card.includes('Evolução e Meta'));
 assert.ok(!card.includes('peso-mini-svg'));
 assert.ok(html.includes('.peso-card-simples{display:flex!important;flex-direction:row!important'));
 assert.ok(html.includes('min-height:86px!important'));
 assert.ok(html.includes('--gold:#2bd45c'));
 assert.ok(html.includes('id="peso-svg"'));
 assert.ok(html.includes('id="peso-overlay"'));
 assert.ok(html.includes('id="view-pesagens"'));
});

test('visual contrast pass retains layout and weight tracking',()=>{
 assert.ok(html.includes('id="treino-hoje-card"'));
 assert.ok(html.includes('id="btn-menu-treinos"'));
 assert.ok(html.includes('id="btn-menu-exercicios"'));
 assert.ok(html.includes('id="btn-evolucao-peso"'));
 assert.ok(html.includes('id="peso-svg"'));
 assert.ok(html.includes('#treino-hoje-card{background:#1c1c20!important'));
 assert.ok(html.includes('.btn-dash .icon-stage{background:#29292c!important'));
 assert.ok(html.includes('.bottom-item.active{color:#2cdb61!important'));
});

test('profile and weekly calendar share one card, with original app features untouched',()=>{
 const card=html.slice(html.indexOf('class="vip-banner" id="dash-banner-btn"'),html.indexOf('<!-- TREINO DE HOJE -->'));
 assert.ok(card.includes('id="dash-nome"'));
 assert.ok(card.includes('id="perfil-semana-dias"'));
 assert.ok(card.includes('id="perfil-semana-anterior"'));
 assert.ok(!card.includes('Plano Black'));
 assert.ok(html.includes('brand-green">PHYSICAL'));
 assert.ok(html.includes('function renderizarSemanaPerfil()'));
 assert.ok(html.includes('estado.historicoCarga||[]'));
 assert.ok(html.includes('treinoIdsNaData(iso)'));
 assert.ok(html.includes('renderizarSemanaPerfil();'));
 assert.ok(html.includes('id="btn-evolucao-peso"'));
});
