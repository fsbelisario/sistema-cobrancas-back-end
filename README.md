# SISTEMA DE COBRANÇAS
---
# Sprint 1
---
# Back-end (API)

* ## O que o usuário pode fazer:
  * Cadastrar usuário
  * Acessar o sistema (login)
  * Consultar dados do perfil
  * Atualizar dados do perfil
  * Cadastrar cliente
  * Editar cliente cadastrado
  * Listar clientes cadastrados
  * Cadastrar cobrança
  * Listar cobranças cadastradas
  * Editar cobrança cadastrada
  * Excluir cobrança cadastrada

* ## End-points
  * ### POST - Cadastro usuário (OK)
    * #### Dados recebidos
      * name - Nome do usuário (obrigatório)
      * email - E-mail (obrigatório)
      * password - Senha (obrigatório)
    * #### Dados retornados
      * Sucesso ou Erro
    * #### Objetivos gerais
      * Validar dados recebidos no body
      * Verificar se o e-mail já existe no BD
      * Criptografar a senha
      * Cadastrar o usuário no BD
      * Retornar sucesso ou erro

  * ### POST - Login (OK)
    * #### Dados recebidos
      * email - E-mail (obrigatório)
      * password - Senha (obrigatório)
    * #### Dados retornados
      * Sucesso + token ou Erro
    * #### Objetivos gerais
      * Validar dados recebidos no body
      * Buscar o usário no BD através do e-mail
      * Verificar se a senha informada está correta
      * Gerar o token de autenticação com id do usuário
      * Retornar token ou erro

  * ### GET - Consulta perfil (OK)
    * #### Dados recebidos
      * token (obrigatório)
    * #### Dados retornados
      * name - Nome do usuário
      * email - E-mail
      * taxId - CPF
      * phone - Telefone
    * #### Objetivos gerais
      * Validar o token
      * Buscar o cadastro do usuário com a informação do token
      * Retornar as informações do perfil ou erro

  * ### PUT - Edição perfil (OK)
    * #### Dados recebidos
      * token (obrigatório)
      * name - Nome do usuário (obrigatório)
      * email - E-mail (obrigatório)
      * password - Senha
      * taxId - CPF
      * phone - Telefone
    * #### Dados retornados
      * Sucesso ou Erro
    * #### Objetivos gerais
      * Validar o token
      * Validar dados recebidos no body
      * Verificar se o e-mail já existe no BD (se for alterado)
      * Verificar se o CPF já existe no BD (se for alterado)
      * Criptografar a senha (se for informada)      
      * Atualizar as informações do usuário no BD
      * Retornar sucesso ou erro

  * ### POST - Cadastro cliente (OK)
    * #### Dados recebidos
      * token (obrigatório)
      * name - Nome do cliente (obrigatório)
      * email - E-mail (obrigatório)
      * taxId - CPF (obrigatório)
      * phone - Telefone (obrigatório)
      * zipCode - CEP
      * street - Logradouro
      * number - Número
      * addressDetails - Complemento
      * reference - Ponto de referência
      * district - Bairro
      * city - Cidade
      * state - Estado
    * #### Dados retornados
      * Sucesso ou Erro
    * #### Objetivos gerais
      * Validar o token
      * Validar dados recebidos no body
      * Verificar se o e-mail já existe no BD
      * Verificar se o CPF já existe no BD
      * Cadastrar o cliente no BD
      * Retornar sucesso ou erro

  * ### GET - Consulta lista de clientes (OK)
    * #### Dados recebidos
      * token (obrigatório)
    * #### Dados retornados
      * Lista de clientes com:
        * id - ID do cliente
        * name - Nome do cliente
        * email - E-mail
        * tax_id - CPF
        * phone - Telefone
        * zip_code - CEP
        * street - Logradouro
        * number - Número
        * address_details - Complemento
        * reference - Ponto de referência
        * district - Bairro
        * city - Cidade
        * state - Estado
        * billings - Valor total de cobranças
        * payments - Valor total de pagamentos recebidos
        * status - Status do cliente (EM DIA ou INADIMPLENTE)
        * billingList - lista de cobranças do cliente:
          * id - ID da cobrança
          * client_id - ID do cliente associado à cobrança
          * description - Descrição da cobrança
          * status - Status da cobrança
          * value - Valor da cobrança
          * due_date - Data de vencimento da cobrança
    * #### Objetivos gerais
      * Validar o token
      * Buscar os dados dos clientes cadastrados
      * Retornar a lista ou erro

  * ### PUT - Edição cliente (OK)
    * #### Dados recebidos
      * token (obrigatório)
      * name - Nome do cliente (obrigatório)
      * email - E-mail (obrigatório)
      * taxId - CPF (obrigatório)
      * phone - Telefone (obrigatório)
      * zipCode - CEP
      * street - Logradouro
      * number - Número
      * addressDetails - Complemento
      * reference - Ponto de referência
      * district - Bairro
      * city - Cidade
      * state - Estado
    * #### Dados retornados
      * Sucesso ou Erro
    * #### Objetivos gerais
      * Validar o token
      * Validar dados recebidos no body
      * Verificar se o e-mail já existe no BD (se for alterado)
      * Verificar se o CPF já existe no BD (se for alterado)
      * Atualizar as informações do usuário no BD
      * Retornar sucesso ou erro

  * ### POST - Cadastro cobrança (OK)
    * #### Dados recebidos
      * token (obrigatório)
      * clientId - ID do cliente (obrigatório)
      * description - Descrição da cobrança (obrigatório)
      * status - Status da cobrança (PENDENTE ou PAGO) (obrigatório)
      * value - Valor da cobrança (obrigatório)
      * dueDate - Data de vencimento da cobrança (obrigatório)
    * #### Dados retornados
      * Sucesso ou Erro
    * #### Objetivos gerais
      * Validar o token
      * Validar dados recebidos no body
      * Atualizar as informações do usuário no BD
      * Cadastrar a cobrança no BD
      * Retornar sucesso ou erro

  * ### GET - Consulta lista de cobranças (OK)
    * #### Dados recebidos
      * token (obrigatório)
    * #### Dados retornados
      * Lista de clientes com:
        * id - ID da cobrança
        * name - Nome do cliente
        * description - Descrição da cobrança
        * due_date - Data de vencimento da cobrança
        * value - Valor da cobrança
        * status - Status da cobrança (PENDENTE, PAGO ou VENCIDO)
    * #### Objetivos gerais
      * Validar o token
      * Buscar os dados das cobranças cadastradas
      * Retornar a lista ou erro

  * ### PUT - Edição cobrança (OK)
    * #### Dados recebidos
      * token (obrigatório)
      * id - ID da cobrança (obrigatório)
      * clientId - ID do cliente (obrigatório)
      * description - Descrição da cobrança (obrigatório)
      * status - Status da cobrança (PENDENTE ou PAGO) (obrigatório)
      * value - Valor da cobrança (obrigatório)
      * dueDate - Data de vencimento da cobrança (obrigatório)
    * #### Dados retornados
      * Sucesso ou Erro
    * #### Objetivos gerais
      * Validar o token
      * Validar id da cobrança recebido no params
      * Validar dados recebidos no body
      * Atualizar as informações da cobrança no BD
      * Retornar sucesso ou erro

  * ### DELETE - Exclusão de cobrança (OK)
    * #### Dados recebidos
      * token (obrigatório)
      * id - ID da cobrança (obrigatório)
    * #### Dados retornados
      * Sucesso ou Erro
    * #### Objetivos gerais
      * Validar o token
      * Validar id da cobrança recebido no params
      * Efetivar exclusão da cobrança no BD
      * Retornar sucesso ou erro

  * ### GET - Consultar resumo na Home (OK)
    * #### Dados recebidos
      * token (obrigatório)
    * #### Dados retornados
      * Quantidade de clientes em dia
      * Quantidade de clientes inadimplentes
      * Valor total de cobranças pendentes
      * Valor total de cobranças vencidas
      * Valor total de cobranças pagas
    * #### Objetivos gerais
      * Validar o token
      * Buscar os dados das cobranças cadastradas
      * Retornar a dados ou erro

---

## Deploy
* Heroku

---

## Figma
* [Figma sprint 1](https://www.figma.com/file/KV0rQOsEBphvJehWCBD3Mp/Desafio-Cubos-Academy-(Sprint-1))
* [Figma sprint 2](https://www.figma.com/file/ZSA5Vx2DcGA5LY7Bd5lLrl/Desafio-Cubos-Academy-(Sprint-2))
* [Figma sprint 3](https://www.figma.com/file/QFdwbyQilN8gJ0omEawVdp/Desafio-Cubos-Academy-(Sprint-3))
