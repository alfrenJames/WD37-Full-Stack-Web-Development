<?php
require_once("registration.class.php");
$all = new registration();
$users= $all->getAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- BootStrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <style>
        img{
            height: 100px;
            width: 100px;
        }
    </style>
    <title>Document</title>
</head>
<body>
    <div class="container">
        <button class="btn btn-primary mt-3 mb-3">
        <a href="registration.page.php" class="text-decoration-none text-light">Register</a>
        </button>
    </div>
    <div class="container">
        <table class="table table-striped table-hover">
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Action</th>
                <th>Photo</th>
            </tr>
            <?php foreach($users as $key=>$val) {?>
            <tr>
                <td><?= $val ['id']?></td>
                <td><?= $val ['firstName']?></td>
                <td><?= $val ['lastName']?></td>
                <td><?= $val ['address']?></td>
                <td><img src="uploads/<?= $val ['photo']?>" alt="<?= $val ['firstName']?>"></td>
                <td>
                    <button class="btn btn-danger">
                      <a class="text-decoration-none text-dark" href="delete.php?id=<?= $val['id']?>&req=delete">
                      Delete</a> 
                    </button>
                    <button class="btn btn-warning">
                        <a href="edit.page.php?id=<?= $val['id']?>" class="text-decoration-none text-dark">Update</a>
                    </button>
                </td>
            </tr>
            <?php }?>
        </table>
    </div>
</body>
</html>
