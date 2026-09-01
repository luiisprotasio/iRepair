# 🛠️ Sistema Gerenciador de Ordens de Serviço

Uma aplicação web completa para gerenciamento de chamados e ordens de serviço (O.S.), com suporte a autenticação de usuários e controle de acessos.

---

## 🚀 Tecnologias Utilizadas

**Backend & Banco de Dados:**
* **Node.js** com **TypeScript**
* **Express.js** (API RESTful)
* **Prisma ORM**
* **MySQL**

**Frontend:**
* **React** (TypeScript)

**Infraestrutura & Containerização:**
* **Docker** & **Docker Compose**

---

## 📋 Funcionalidades

- **Autenticação & Autorização:**
  - Sistema de Login seguro.
  - Autenticação baseada em tokens JWT.
  - Níveis de permissão de usuário (ex: Administrador, Técnico, Cliente).
- **Gerenciamento de Usuários:**
  - Cadastro, edição, visualização e remoção de usuários.
- **Gerenciamento de Ordens de Serviço:**
  - Criação de novas ordens de serviço.
  - Acompanhamento de status (ex: *Pendente*, *Em Andamento*, *Concluída*).
  - Vinculação de técnicos e clientes às ordens de serviço.
  - Histórico e detalhes de atendimentos.
