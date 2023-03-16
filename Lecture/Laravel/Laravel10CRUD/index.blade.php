<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Laravel 10 CRUD Tutorial From Scratch</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<style>
    img{
        height: 100px;
        width: 100px;
    }
</style>
</head>
<body class="container">
<div class="container mt-2">
<div class="row">
<div class="col-lg-12 margin-tb">
<h2>Laravel 10 CRUD Example Tutorial</h2>
</div>
{{-- @if(count($employees) === 20 )
<div class="alert alert-success">
    <p>No Record Found</p>
    </div>
@endif --}}
<a class="btn btn-success" href="employees/create"> Create Company</a>
</div>
</div>
</div>
@if ($message = Session::get('success'))
<div class="alert alert-success">
<p>{{ $message }}</p>
</div>
@endif
<table class="table table-bordered table-striped">
<tr>
<th>id</th>
<th>Name</th>
<th>photo</th>
<th>email address</th>
<th width="280px">Action</th>
</tr>
@foreach ($employees as $employee)
<tr>
<td>{{ $employee->id }}</td>
<td>{{ $employee->name }}</td>
<td><img src="{{ $employee->photo }}" alt="{{ $employee->name }}"></td>
<td>{{ $employee->email }}</td>
<td>
<form action="{{ route('employees.destroy',$employee->id) }}" method="Post">
<a class="btn btn-primary" href="{{ route('employees.edit',$employee->id) }}">Edit</a>
@csrf
@method('DELETE')
<button type="submit" class="btn btn-danger">Delete</button>
</form>
</td>
</tr>
@endforeach
</table>
{!! $employees->links() !!}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>
</html>
