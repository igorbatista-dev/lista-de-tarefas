const test = require("node:test");
const assert = require("node:assert");
const Tarefas = require("./logic.js");

test("criar adiciona tarefa com id incremental", () => {
  let l = Tarefas.criar([], "Estudar Git");
  l = Tarefas.criar(l, "Fazer commit");
  assert.strictEqual(l.length, 2);
  assert.strictEqual(l[1].id, 2);
});

test("criar ignora texto vazio", () => {
  assert.deepStrictEqual(Tarefas.criar([], "   "), []);
});

test("alternar marca e desmarca", () => {
  let l = Tarefas.criar([], "A");
  l = Tarefas.alternar(l, 1);
  assert.strictEqual(l[0].feita, true);
  l = Tarefas.alternar(l, 1);
  assert.strictEqual(l[0].feita, false);
});

test("remover tira a tarefa certa", () => {
  let l = Tarefas.criar(Tarefas.criar([], "A"), "B");
  l = Tarefas.remover(l, 1);
  assert.deepStrictEqual(l.map((x) => x.texto), ["B"]);
});

test("filtrar e contar pendentes", () => {
  let l = Tarefas.criar(Tarefas.criar([], "A"), "B");
  l = Tarefas.alternar(l, 1);
  assert.strictEqual(Tarefas.filtrar(l, "feitas").length, 1);
  assert.strictEqual(Tarefas.filtrar(l, "pendentes").length, 1);
  assert.strictEqual(Tarefas.contarPendentes(l), 1);
});
