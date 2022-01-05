# Laravel

## Server ON

**php artisan serve**

## Criando Rotas

Definição: Métodos http

/Routes/web.php

Get
Post
Update
Delete

## Criando Controllers

**Definição: Os controllers fazem as ações das rotas**

Cada rota tem um controller

comando para criar rota:

`php artisan make:controller NomeController`

## Conectando a uma view

Ir em /App/Http/Controller

**Dentro da function, escrever o seguinte comando:**

`return view('site.principal')`

## Inicio

Criando um model, fazendo migration e por fim o controller

comando:

`php artisan make:model --migration --controller --resource Despesa `

ou 

`php artisan make:model -mcr Categoria`

ou 

`php artisan make:model --all Subcategoria`

ou 

`php artisan make:model -a Subcategoria`

Criado 

Model, Controllers, Migrations


## Fazendo migrate

Comando: 

`php artisan migrate`  

## Remover os métodos 

Edit e create

## Instalando o JWT

`composer require tymon/jwt-auth` 

## Configurando o JWT

Add the service **provider** to the providers array in the **config/app.php** config file as follows:

'providers' => [

    ...

    Tymon\JWTAuth\Providers\LaravelServiceProvider::class,
]


link : `https://jwt-auth.readthedocs.io/en/develop/laravel-installation/`

link2 : https://jwt-auth.readthedocs.io/en/develop/quick-start/

## Funções criadas

Recuperar dados do usuário, atulizando o JWT e invalidando o JWT