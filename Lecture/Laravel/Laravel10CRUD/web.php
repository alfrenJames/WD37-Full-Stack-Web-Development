//this is laravel route 
// create routes by adding controller 
//use php artisan make:controller CompanyName
use App\Http\Controllers\<controllerName>;
 
Route::resource('companies', <controllerName>::class);
