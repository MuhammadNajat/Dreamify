<?php

use App\Http\Controllers\CollectionController;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->middleware(['verify.shopify'])->name('home');

Route::get('/about', [CollectionController::class, "showAboutPage"])->
        middleware(['verify.shopify'])->name('about');

Route::get('/createCollection', [CollectionController::class, "showCreateCollectionPage"])->
        middleware(['verify.shopify'])->name('createCollection');

Route::get('/seeCollections', [CollectionController::class, "showCollectionsPage"])->
        middleware(['verify.shopify'])->name('seeCollections');

Route::post('/submitCollection', [CollectionController::class, "processCollectionSubmission"])->
        middleware(['verify.shopify'])->name('submitCollection');