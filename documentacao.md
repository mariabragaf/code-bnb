## Requisitos

### 1.1 Requisitos Funcionais do Sistema

| ID | Requisito | Descrição |
| --- | --- | --- |
| RF01 | Realizar Login | Permitir que o usuário entre no sistema utilizando suas credenciais e informar caso os dados estejam incorretos. |
| RF02 | Exibir Tela Principal | Apresentar a página inicial do sistema após a autenticação do usuário. |
| RF03 | Cadastrar Usuário | Registrar novos usuários no sistema, preenchendo os campos obrigatórios. |
| RF04 | Consultar Usuário | Pesquisar usuários cadastrados utilizando informações como nome ou e-mail. |
| RF05 | Atualizar Usuário | Modificar os dados de um usuário previamente cadastrado. |
| RF06 | Excluir Usuário | Remover um usuário do sistema mediante confirmação da ação. |
| RF07 | Cadastrar Cliente | Registrar novos clientes preenchendo os campos obrigatórios, como nome e CPF. |
| RF08 | Consultar Cliente | Pesquisar clientes cadastrados utilizando o nome ou CPF como referência. |
| RF09 | Atualizar Cliente | Modificar as informações de um cliente existente. |
| RF10 | Excluir Cliente | Remover um cliente do cadastro mediante confirmação do usuário. |
| RF11 | Cadastrar Imóvel | Adicionar imóveis ao sistema informando seus dados, como endereço, tipo e valor do aluguel. |
| RF12 | Consultar Imóvel | Pesquisar imóveis cadastrados utilizando informações como endereço ou disponibilidade. |
| RF13 | Atualizar Imóvel | Editar as informações de um imóvel previamente registrado. |
| RF14 | Excluir Imóvel | Retirar um imóvel do cadastro mediante confirmação da ação. |
| RF15 | Cadastrar Aluguel | Registrar um novo aluguel vinculando um cliente a um imóvel e informando os dados do contrato. |
| RF16 | Consultar Aluguel | Pesquisar aluguéis cadastrados utilizando informações do cliente, imóvel ou período. |
| RF17 | Atualizar Aluguel | Alterar informações de um aluguel existente, como datas, valores ou cliente associado. |
| RF18 | Excluir Aluguel | Cancelar ou remover um aluguel previamente cadastrado mediante confirmação. |
| RF19 | Exibir Calendário de Aluguéis | Apresentar os aluguéis organizados em um calendário, permitindo visualizar os períodos de ocupação dos imóveis. |
| RF20 | Encerrar Login | Finalizar o acesso do usuário ao sistema por meio da opção de logout. |

### 1.2 Requisitos Não Funcionais

| ID | Requisito | Descrição |
| --- | --- | --- |
| RNF01 | Proteção de Dados | Garantir a segurança das informações armazenadas e impedir acessos indevidos. |
| RNF02 | Integridade dos Dados | Manter os registros consistentes, evitando informações incorretas ou duplicadas. |
| RNF03 | Controle de Acesso | Restringir o acesso às funcionalidades conforme a autenticação e as permissões do usuário. |

## 2 Requisitos de Infraestrutura

| Tecnologia | Versão / ambiente |
| --- | --- |
| JavaScript | Node.js 24 |
| Next.js | 16 |
| React e React DOM | 19 |
| bcryptjs | 3 |
| jsonwebtoken | 9 |
| node:crypto | Integrado ao Node.js |
| PostgreSQL | 18 |
| Prisma e Prisma Client | 6 |
| Ant Design | 6 |
