<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeCRUDController extends Controller
{
    /**
* Display a listing of the resource.
*
* @return \Illuminate\Http\Response
*/
public function index()
{
$data['employees'] = Employee::orderBy('name','desc')->paginate(10);
return view('index', $data);
}
/**
* Show the form for creating a new resource.
*
* @return \Illuminate\Http\Response
*/
public function create()
{
return view('create');
}
/**
* Store a newly created resource in storage.
*
* @param  \Illuminate\Http\Request  $request
* @return \Illuminate\Http\Response
*/
public function store(Request $request)
{
$request->validate([
'name' => 'required',
'photo' => 'required',
'email' => 'required',
'jobTitle' => 'required',
'salary' => 'required',
]);
$employee = new Employee;
$employee->name = $request->name;
$employee->photo = $request->photo;
$employee->email = $request->email;
$employee->jobTitle = $request->jobTitle;
$employee->salary = $request->salary;
$employee->save();
return redirect('/employees')
->with('success','Employee Record has been created successfully.');
}
/**
* Display the specified resource.
*
* @param  \App\company  $company
* @return \Illuminate\Http\Response
*/
public function show(Employee $employee)
{
return view('employees.show',compact('employee'));
} 
/**
* Show the form for editing the specified resource.
*
* @param  \App\Company  $company
* @return \Illuminate\Http\Response
*/
public function edit(Employee $employee)
{
return view('edit',compact('employee'));
}
/**
* Update the specified resource in storage.
*
* @param  \Illuminate\Http\Request  $request
* @param  \App\company  $company
* @return \Illuminate\Http\Response
*/
public function update(Request $request, $id)
{
$request->validate([
'name' => 'required',
'email' => 'required',
'photo' => 'required',
'jobTitle' => 'required',
'salary' => 'required',
]);
$company = Employee::find($id);
$company->name = $request->name;
$company->photo = $request->photo;
$company->email = $request->email;
$company->jobTitle = $request->jobTitle;
$company->salary = $request->salary;
$company->save();
return redirect('/employees')
->with('success','Employee Has Been updated successfully');
}
/**
* Remove the specified resource from storage.
*
* @param  \App\Company  $company
* @return \Illuminate\Http\Response
*/
public function destroy(Employee $employee)
{
$employee->delete();
return redirect('/employees')
->with('success',' Record has been deleted successfully');
}
}
