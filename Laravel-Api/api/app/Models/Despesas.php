<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Despesas extends Model
{
   public $timestamps = false;
   protected $fillable = ['nome'];
   protected $appends = ['links'];

   public function categoria(){

    return $this->hasMany(Categoria::class);
   }

   public function getLinksAttribute(): array
   {
      return [
         'self' => '/api/v1/despesa/' . $this->id,
         'categoria' => '/api/v1/despesa/' . $this-> id . '/categoria',
      ];
   }
}
