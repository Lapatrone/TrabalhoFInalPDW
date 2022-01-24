<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->middleware('jwt.auth')->group(function() {
    Route::post('me', 'App\Http\Controllers\AuthController@me');
    Route::post('logout', 'App\Http\Controllers\AuthController@logout');
    Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
    //Route::apiResource('despesa', 'App\Http\Controllers\DespesasController');
    //Route::apiResource('categoria', 'App\Http\Controllers\CategoriaController');
    Route::apiResource('despesa/{despesa_id}/categoria', 'App\Http\Controllers\CategoriaController');
});

Route::apiResource('despesa', 'App\Http\Controllers\DespesasController');
Route::apiResource('categoria', 'App\Http\Controllers\CategoriaController');
Route::post('login', 'App\Http\Controllers\AuthController@login');
Route::post('register', 'App\Http\Controllers\AuthController@register');

/*
$router->group(['prefix' => 'api'], function () use ($router){

    $router->group(['prefix' => 'despesa'], function () use ($router){
        $router->post('', 'DespesasController@store');
        $router->get('', 'DespesasController@index');
        $router->get('{id}', 'DespesasController@show');
        $router->put('{id}', 'DespesasController@update');
        $router->delete('{id}', 'DespesasController@destroy');

        $router->get('{despesaId}/categoria', 'CategoriaController@buscaPorCategoria');
    });

    $router->group(['prefix' => 'categoria'], function () use ($router){
        $router->post('', 'CategoriaController@store');
        $router->get('', 'CategoriaController@index');
        $router->get('{id}', 'CategoriaController@show');
        $router->put('{id}', 'CategoriaController@update');
        $router->delete('{id}', 'CategoriaController@destroy');
    });

});*/
