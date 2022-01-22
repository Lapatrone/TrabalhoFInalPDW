<?php

namespace App\Http\Controllers;

use App\Models\Despesas;
use Illuminate\Http\Request;

class DespesasController extends BaseController
{
   
  public function __construct()
  {
      $this -> classe = Despesas::class;
  }
    
}