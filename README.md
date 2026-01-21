Este é um guia sugerido para o seu projeto, estruturado para ser profissional e útil para quem for visualizar seu repositório no GitHub.

API REST com Node.js e TypeScript
Esta é uma API REST desenvolvida para estudos, focada na gestão de produtos. O projeto explora conceitos fundamentais como roteamento, middlewares, tratamento de erros customizados e validação de dados.

🚀 Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript.

TypeScript: Adição de tipagem estática ao JavaScript.

Express: Framework web para Node.js.

Zod: Biblioteca de declaração e validação de esquemas. 

TSX: Executor de TypeScript rápido para desenvolvimento.

🛠️ Funcionalidades
Listagem de Produtos: Suporte a paginação via query strings (page e limit).

Criação de Produtos: Validação rigorosa de dados com Zod (nome mínimo de 6 caracteres e preço positivo).

Middleware Customizado: Interceptação de requisições para atribuição de IDs de usuário.

Tratamento de Erros Global: Captura de erros de validação (Zod), erros de aplicação (AppError) e erros inesperados (500). 

📂 Estrutura de Arquivos Principal

src/server.ts: Ponto de entrada da aplicação e configuração dos middlewares globais de erro. 

src/controllers/ProductsController.ts: Lógica de negócio para as rotas de produtos.

src/middlewares/my-middleware.ts: Exemplo de middleware para manipulação do objeto Request.

src/utils/AppError.ts: Classe padronizada para lançar exceções conhecidas na API.

src/@types/request.d.ts: Extensão de tipos do Express para incluir o campo user_id.

🔧 Como Executar

Instale as dependências:

Bash
npm install
----------------------------------------------
Execute o servidor em modo de desenvolvimento:

Bash:
npm run dev

O servidor iniciará na porta 3333.
----------------------------------------------

🛣️ Rotas da API

Método: GET	Rota:/products?page=1&limit=10	Descrição: Lista produtos com paginação.

Método: POST	Rota:/products	Descrição: Cria um novo produto (Requer name e price).

Exemplo de Corpo para POST:

JSON:

{
  "name": "Teclado Mecânico",
  "price": 250.00
}
