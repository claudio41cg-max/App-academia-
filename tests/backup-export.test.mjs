import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const html=readFileSync('index.html','utf8');
test('existing app inline scripts remain valid JavaScript',()=>{
 const scripts=[...html.matchAll(/<script(?:\\s[^>]*)?>([\\s\\S]*?)<\\/script>/gi)].map(m=>m[1]).filter(s=>s.trim());
 assert.ok(scripts.length>0);
 for(const script of scripts)new vm.Script(script);
});
test('exports workout backup without payment credentials',()=>{
 assert.match(html,/id="btn-exportar-backup"/);
 const source=html.match(/function exportarBackupAcademia\\(\\) \\{[\\s\\S]*?\\n    \\}/)?.[0];
 assert.ok(source,'export function must be defined');
 const items=[];
 const fakeLink={click(){items.push('download');},remove(){}};
 const mock={
  localStorage:{getItem:()=>JSON.stringify({aluno:{nome:'Teste'},historicoCarga:[12],pagamento:{senha:'secret'}})},
  STORAGE_KEY:'smartphysical_v30',estado:{},JSON,Date,Blob,
  URL:{createObjectURL:()=>'/blob',revokeObjectURL:()=>{}},
  document:{createElement:()=>fakeLink,body:{appendChild(){}}},
  mostrarToast:()=>{},console,
  setTimeout:()=>{}
 };
 const fn=new vm.Script(source+'; exportarBackupAcademia();');
 fn.runInNewContext(mock);
 assert.deepEqual(items,['download']);
 assert.match(html,/delete seguro\\.pagamento/);
});
