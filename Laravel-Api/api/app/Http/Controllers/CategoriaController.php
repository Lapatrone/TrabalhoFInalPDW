<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends BaseController
{
   
  public function __construct()
  {
      $this -> classe = Categoria::class;
  }

  public function buscaPorCategoria(int $despesaId)
  {
    $categoria = Categoria::query()
    ->where('despesa_id', $despesaId)
    ->paginate();

    return $categoria;
  }

}