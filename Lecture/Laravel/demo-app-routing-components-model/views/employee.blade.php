@extends('layouts.main')
@section('content')
    <h1>View Employee</h1>
    <div class="card text-dark" style="width: 18rem;">
        <img src="{{$employee['photo']}}" class="card-img-top" alt="{{$employee['empName']}}">
        <div class="card-body">
          <h5 class="card-title">Name: {{$employee['empName']}}</h5>
          <h6 class="card-text">Position: {{$employee['jobTitle']}}</h6>
          <h6 class="card-text">Salary: {{$employee['salary']}}</h6>
          <h6 class="card-text">Employement Status: {{$employee['active']}}</h6>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
@endsection
