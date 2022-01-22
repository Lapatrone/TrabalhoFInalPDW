<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    
   protected $table = "Categoria";
   public $timestamps = false;
   protected $fillable = [
      'nome', 'descricao', 'data', 'valor', 'despesa_id',
  ];
  protected $appends = ['links'];

   public function despesa(){

    return $this->belongsTo(Despesas::class);
   }

   public function getLinksAttribute(): array
   {
      return [
         'self' => '/api/v1/categoria/' . $this->id,
         'despesa' => '/api/v1/despesa/' . $this->despesa_id
      ];
   }
}