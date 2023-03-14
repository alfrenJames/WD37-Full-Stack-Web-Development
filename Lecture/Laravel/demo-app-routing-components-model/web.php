<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Employees;


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
    return view('welcome', 
    [
        'title'=>"Main Page"
    ]);
});

Route::get('/main', function () {
    // dd($user);
    return view('welcome', 
    [
        'title'=>"Main Page"
    ]); 
});

Route::get('/about', function () {
    return view('about', 
    [
        'title'=>"About Page"
    ]);
});

Route::get('/employees', function () {
    return view('employees', 
    [
        'title'=>"Employee List Page",
        'employees'=>Employees::getAll()
    ]);
});

Route::get('/employee/{id}', function ($id) {
    return view('viewEmployee', 
    [
        'title'=>"Employee View Page",
        'employee'=>Employees::getById($id)
    ]);
});

Route::fallback(function(){
    return view('404', 
    [
        'title'=>"404 Page"
    ]);
});

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
