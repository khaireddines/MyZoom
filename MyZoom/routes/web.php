<?php

use App\Events\MessageSent;
use App\Http\Controllers\PrivateChatController;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/{path?}/{path2?}', 'welcome');
//Route::view('/','test');
Route::get('/test/test/{msg}',function ($msg)
{
    
   //broadcast(new MessageSent($msg))->toOthers(); 
});
