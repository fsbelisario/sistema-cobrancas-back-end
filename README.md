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
  * ### POST - Cadastro usuário
    * #### Dados recebidos
      * Nome de usuário (obrigatório)
      * E-mail (obrigatório)
      * Senha (obrigatório)
    * #### Dados retornados
      * Sucesso / Erro
    * #### Objetivos gerais
      * Validar nome, e-mail e senha
      * Verificar se o e-mail já existe no BD
      * Criptografar a senha
      * Cadastrar o usuário no BD
      * Retornar sucesso ou erro

  * ### POST - Login
    * #### Dados recebidos
      * E=-mail (obrigatório)
      * Senha (obrigatório)
    * #### Dados retornados
      * Sucesso / Erro
      * Token (com id)
    * #### Objetivos gerais
      * Validar e-mail e senha
      * Buscar o usário no BD através do e-mail
      * Verificar se a senha informada está correta
      * Gerar o token de autenticação com id do usuário
      * Retornar token ou erro

  * ### GET - Perfil
    * #### Dados recebidos
      * Token (com id ou nome de usuário)
    * #### Dados retornados
      * Nome
      * E-mail
      * Senha
      * CPF
      * Telefone
    * #### Objetivos gerais
      * Validar o token
      * Buscar o cadastro do usuário com a informação do token
      * Retornar as informações do perfil ou erro

  * ### PUT - Perfil
    * #### Dados recebidos
      * Token (com id ou nome de usuário)
      * Nome
      * E-mail
      * Senha
      * CPF
      * Telefone
    * #### Dados retornados
      * Sucesso / Erro
    * #### Objetivos gerais
      * Exigir ao menos 1 campo para atualizar
      * Validar o token
      * Buscar o cadastro do usuário com a informação do token
      * Criptografar a senha (se for informada)
      * Verificar se o e-mail já existe no BD (se for informado)
      * Atualizar as informações do usuário no BD
      * Retornar sucesso ou erro

  * ### POST - Cadastro cliente
    * #### Dados recebidos
      * Nome do cliente (obrigatório)
      * E-mail (obrigatório)
      * CPF (obrigatório)
      * Telefone (obrigatório)
      * CEP
      * Logradouro
      * Complemento
      * Bairro
      * Cidade
      * Estado
    * #### Dados retornados
      * Sucesso / Erro
    * #### Objetivos gerais
      * Validar nome, e-mail e senha
      * Verificar se o e-mail já existe no BD
      * Criptografar a senha
      * Cadastrar o usuário no BD
      * Retornar sucesso ou erro

---

# Front-end

* ## Login:
  * Botão de login desabilitado até que o email e senha estejam preenchidos

* ## Home:
  * Clientes e cobranças: fazer card componentizado para alimentar através de mapeamento
  * Imagem de usuário: pode ser apenas um ícone de usuário (não precisa ser foto do usuário)

* ## Edição de perfil:
  * Modal (formulário sobre a tela atual)
  * Alertas de sucesso ou erro (usando Alert ou Toastfy)
  * Fechar formulário de edição automaticamente ao fechar o alerta

* ## Cadastro de cliente:
  * Modal (formulário sobre a tela atual)
  * Alertas de sucesso ou erro (usando Alert ou Toastfy)
  * Fechar formulário de edição automaticamente ao fechar o alerta
  * Consultar endereço usando ViaCEP

---

## Deploy
* Heroku

---

## Figma
[https://www.figma.com/file/KV0rQOsEBphvJehWCBD3Mp/Desafio-Cubos-Academy-(Sprint-1)?node-id=0%3A1](https://)