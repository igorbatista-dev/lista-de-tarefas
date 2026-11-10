// Regras do app (sem DOM), para poder testar com Node.
const Tarefas = {
  criar(lista, texto) {
    const t = String(texto || "").trim();
    if (!t) return lista;
    const id = lista.length ? Math.max(...lista.map((x) => x.id)) + 1 : 1;
    return [...lista, { id, texto: t, feita: false }];
  },
  alternar(lista, id) {
    return lista.map((x) => (x.id === id ? { ...x, feita: !x.feita } : x));
  },
  remover(lista, id) {
    return lista.filter((x) => x.id !== id);
  },
  filtrar(lista, filtro) {
    if (filtro === "feitas") return lista.filter((x) => x.feita);
    if (filtro === "pendentes") return lista.filter((x) => !x.feita);
    return lista;
  },
  contarPendentes(lista) {
    return lista.filter((x) => !x.feita).length;
  },
};

if (typeof module !== "undefined") module.exports = Tarefas;
