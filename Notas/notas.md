PDW

Guia para o trabalho final


Passo1: 

Criando um projeto laravel

`comando: -laravel new novoProjeto`

----------------------------------------------------
Passo2:

Criando objetos, models para o projeto criado

`comando: php artisan make:model NomeDaModel -m`

-m faz migrations

------------------------------------------------------

Passo3:

Criando atributos no models:

Modelo Professor

Atributo:

protected $fillable = [

'name',
'age'

];

------------------------------------------------------
Passo4:
Ir na pasta database/migrations

Criar os campos da tabela:

$Schema::create('professor'){

$table->string('name');
$table->string('age');

});

------------------------------------------------------
Passo5:

Criar a base de dados

Ir no XAMPP e criar a base de dados


------------------------------------------------------

Passo6:

ir no arquivo .env e falar qual será o nome da base de dados

------------------------------------------------------

Passo7:

Fazer as migrações criadas

`comando: php artisan migrate`


migrate dos models


-----------------------------------------------------

Passo8:

Professor está dando exemplo de tabelas:

Professor -> Disciplina -> Aluno

Criar objeto Disciplina


`comando: php artisan make:model Disciplina -m `

-----------------------------------------------------

Passo9:

Ir no models/Disciplina

criando atributos

protected $fillable = [

'title',
'credits',
'professor_id' #Criando uma relação com o model professor

];



-----------------------------------------------------

Passo10:

Ir na pasta database/migrations


$Schema::create('professor'){

$table->string('title');
$table->integer('credits');
$table->unsignedBigInteger('professor_id');  #colocando o id do professor na tabela mysql/database
$table->('professor_id")->references('id')->on('professor');

$table -> timestamps
});


-----------------------------------------------------

Passo11:


Tabela no Plural

Modelo no Singular

-----------------------------------------------------

Passo12:

Fazer as migrações criadas

`comando: php artisan migrate`


migrate dos models

-----------------------------------------------------

Passo13:

Factories e Seeders

Testando tudo,

ir na pasta database/factories

Criando a factories do professor

comando:

`php artisam make::factory ProfessorFactory --model=Professor`

-----------------------------------------------------

Passo14:

Pasta database/factories/ProfessorFactory

Adicionar

use App\Models\Professor;


class ProfessorFactory extends Factory

{
protected $model = Professor::class;
}

return [

'name' => $this->faker->name,
'age' => $this->faker->numberBetween(30,70)


];
-----------------------------------------------------

Passo15:

Criando um seeders para chamar a factory e vai colcar esses dados fakes na tabela.

`comando: php artisan make:seeder ProfessorSeeder`


-----------------------------------------------------

Passo16:

fazer include

use App\Models\Professor;

run(){

Professor::factory()->count(50)->create();
}

-----------------------------------------------------

Passo17:

Executar o seeders

`comando: php artisan db:seed --class=ProfessorSeeder`

-----------------------------------------------------

Passo18:


Ir na tabela professors no Mysql e verificar as 50 linhas aleatorias


-----------------------------------------------------
Passo19:


Ir Models/Professor

criar a função

public function disciplines(){

return $this -> hasMany(Disciplina::class);

}
-----------------------------------------------------
Passo20:

Ir Models/Disciplina

public function professor(){

return $this -> belongsTo(Professor::class);

}


-----------------------------------------------------
Passo21:

Começar o projeto final

-----------------------------------------------------