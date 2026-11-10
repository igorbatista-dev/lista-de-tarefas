let lista = [];
let filtro = "todas";
try { lista = JSON.parse(localStorage.getItem("tarefas")) || []; } catch (e) { lista = []; }

const $form = document.getElementById("form");
const $input = document.getElementById("texto");
const $ul = document.getElementById("lista");
const $contador = document.getElementById("contador");

function salvar() {
  try { localStorage.setItem("tarefas", JSON.stringify(lista)); } catch (e) {}
}

function render() {
  $ul.innerHTML = "";
  Tarefas.filtrar(lista, filtro).forEach((t) => {
    const li = document.createElement("li");
    if (t.feita) li.classList.add("feita");

    const span = document.createElement("span");
    span.textContent = t.texto;
    span.addEventListener("click", () => { lista = Tarefas.alternar(lista, t.id); salvar(); render(); });

    const del = document.createElement("button");
    del.textContent = "✕";
    del.className = "del";
    del.setAttribute("aria-label", "Remover tarefa");
    del.addEventListener("click", () => { lista = Tarefas.remover(lista, t.id); salvar(); render(); });

    li.append(span, del);
    $ul.appendChild(li);
  });
  const n = Tarefas.contarPendentes(lista);
  $contador.textContent = n + (n === 1 ? " tarefa pendente" : " tarefas pendentes");
  document.querySelectorAll(".filtros button").forEach((b) =>
    b.classList.toggle("ativo", b.dataset.filtro === filtro));
}

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  lista = Tarefas.criar(lista, $input.value);
  $input.value = "";
  salvar();
  render();
});

document.querySelectorAll(".filtros button").forEach((b) =>
  b.addEventListener("click", () => { filtro = b.dataset.filtro; render(); }));

render();
