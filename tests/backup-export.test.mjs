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
