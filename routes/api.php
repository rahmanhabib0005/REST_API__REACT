<?php

use App\Http\Controllers\api\ClientController as ApiClientController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('default',[ApiClientController::class,'index']);
Route::post('store',[ApiClientController::class,'store']);
Route::get('client/{id}/show',[ApiClientController::class,'show']);
Route::put('client/{id}/edit',[ApiClientController::class,'edit']);
Route::delete('delete/{id}',[ApiClientController::class,'deletes']);
