<?php

use App\Http\Controllers\CollectionController;
use App\Http\Controllers\ProductController;
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

//Default route
Route::get('/', function () {
    return view('welcome');
})->middleware(['verify.shopify'])->name('home');


//About route
Route::get('/about', [CollectionController::class, "showAboutPage"])->
        middleware(['verify.shopify'])->name('shop');


//Collection routes
Route::get('/seeCollections', [CollectionController::class, "showCollectionsPage"])->
        middleware(['verify.shopify'])->name('collections');

Route::get('/createCollection', [CollectionController::class, "showCreateCollectionPage"])->
        middleware(['verify.shopify'])->name('createCollection');

Route::post('/submitCollection', [CollectionController::class, "processCollectionSubmission"])->
        middleware(['verify.shopify'])->name('submitCollection');

Route::get('/seeProducts', [CollectionController::class, "showProductsPage"])->
        middleware(['verify.shopify'])->name('products');


//Product routes

Route::get('/createProduct', [ProductController::class, "showCreateProductPage"])->
        middleware(['verify.shopify'])->name('createProduct');

Route::post('/submitProduct', [ProductController::class, "processProductSubmission"])->
        middleware(['verify.shopify'])->name('submitProduct');