<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/pizza/{id}', function($key) {
    return Inertia::render('PizzaView', [
        'id' => intval($key)
    ]);
});

Route::get('/pizza/{id}/edit', function($key){
    return Inertia::render('EditPizza', [
        'id' => intval($key)
    ]);
})->middleware(['auth', 'verified']);

Route::get('/restaurant', function(){
    return Inertia::render('Restaurants');
});

Route::get('/restaurant/{id}', function($key){
    return Inertia::render('ViewRestaurant', [
        'id' => intval($key)
    ]);
});

Route::get('/restaurant/{id}/edit', function($key){
    return Inertia::render('EditRestaurant', [
        'id' => intval($key)
    ]);
})->middleware(['auth', 'verified']);

require __DIR__.'/auth.php';
