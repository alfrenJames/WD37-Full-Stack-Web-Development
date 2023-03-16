//this is laravel route 
// create routes by adding controller 
//use php artisan make:controller CompanyName
use App\Http\Controllers\<controllerName>;
 //define your route for example CRUD for Employees Record 'employees'
Route::resource('yourRoute', <controllerName>::class);
