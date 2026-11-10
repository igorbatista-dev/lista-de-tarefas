# Lista de Tarefas

Projeto fictício feito para a aula de GitHub. É uma lista de tarefas simples em HTML, CSS e JavaScript, com testes automáticos e deploy no GitHub Pages.

## Funcionalidades
- Adicionar, concluir e remover tarefas
- Filtros: todas, pendentes e feitas
- Contador de tarefas pendentes
- Dados salvos no navegador (localStorage)

## Rodando os testes
```bash
npm test
```

## Estrutura
| Arquivo | Função |
|---|---|
| `index.html` | Página |
| `style.css` | Estilo |
| `script.js` | Interação com a página |
| `logic.js` | Regras do app (testáveis) |
| `logic.test.js` | Testes |
| `.github/workflows/ci-cd.yml` | Pipeline: test, build e deploy |

## Autor
Igor Batista Cardoso dos Santos
