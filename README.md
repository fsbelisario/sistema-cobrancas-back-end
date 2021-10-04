# SISTEMA DE COBRANÇAS
---
# Sprint 1
---
# Back-end (API)

* ## O que o usuário pode fazer:
  * Cadastro
  * Login
  * Consultar dados do perfil
  * Atualizar dados do perfil
  * Cadastro de cliente

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

  * ### GET - Perfil (OK)
    * #### Dados recebidos
      * token
    * #### Dados retornados
      * name - Nome do usuário
      * email - E-mail
      * taxId - CPF
      * phone - Telefone
    * #### Objetivos gerais
      * Validar o token
      * Buscar o cadastro do usuário com a informação do token
      * Retornar as informações do perfil ou erro

  * ### PUT - Perfil (OK)
    * #### Dados recebidos
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
      * Verificar se o e-mail já existe no BD
      * Criptografar a senha (se for informada)      
      * Atualizar as informações do usuário no BD
      * Retornar sucesso ou erro

  * ### POST - Cadastro cliente (OK)
    * #### Dados recebidos
      * userId - ID do usuário ao qual o cliente está vinculado (obrigatório)
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
      * Validar dados recebidos no body
      * Verificar se o e-mail já existe no BD
      * Cadastrar o cliente no BD
      * Retornar sucesso ou erro

---

## Deploy
* Heroku

---

## Figma
[Figma sprint 1](https://https://www.figma.com/file/KV0rQOsEBphvJehWCBD3Mp/Desafio-Cubos-Academy-(Sprint-1)?node-id=0%3A1)