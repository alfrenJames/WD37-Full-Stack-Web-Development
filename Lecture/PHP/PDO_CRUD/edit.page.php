<?php
require_once("registration.class.php");
$data = new registration();
$id = $_GET['id'];
$data->setId($id);
$user= $data->getByID();
$val = $user[0];


if(isset($_POST['edit'])){
    $data->setFirstName($_POST['firstName']);
    $data->setLastName($_POST['lastName']);
    $data->setAddress($_POST['address']);
    $data->setPhoto($_POST['photo']);
    echo $data->updateRecord();
    echo "<script>
            alert('Record Updated!💾✅');
            document.location='index.php';
            </script>";
}

$message = '';
$newFileName = '';
$clsMsg = ""; 
if (isset($_POST['uploadBtn']) && $_POST['uploadBtn'] == 'Upload')
{
        if (isset($_FILES['uploadedFile']) && $_FILES['uploadedFile']['error'] === UPLOAD_ERR_OK)
        {
        // get details of the uploaded file
        $fileTmpPath = $_FILES['uploadedFile']['tmp_name'];
        $fileName = $_FILES['uploadedFile']['name'];
        $fileSize = $_FILES['uploadedFile']['size'];
        $fileType = $_FILES['uploadedFile']['type'];
        $fileNameCmps = explode(".", $fileName);
        $fileExtension = strtolower(end($fileNameCmps));
        // sanitize file-name
        $newFileName = $fileName;
        // check if file has one of the following extensions
        $allowedfileExtensions = array('jpg', 'gif', 'png', 'jpeg');
        if (in_array($fileExtension, $allowedfileExtensions))
        {
        // directory in which the uploaded file will be moved
        $uploadFileDir = 'uploads/';
        $dest_path = $uploadFileDir . $newFileName;
        if(move_uploaded_file($fileTmpPath, $dest_path)) 
        {
            $message ='File is successfully uploaded.';
            $clsMsg = '_success';
        }
        else 
        {
            $message = 'There was some error moving the file to upload directory. Please make sure the upload directory is writable by web server.';
            $clsMsg = '_error';
        }
        }
        else
        {
        $message = 'Upload failed. Allowed file types: ' . implode(',', $allowedfileExtensions);
        $clsMsg = '_error';
        }
    }
    else
    {
        $message = 'There is some error in the file upload. Please check the following error.<br>';
        $message .= 'Error:' . $_FILES['uploadedFile']['error'];
        $clsMsg = '_error';
    }
}  
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <style>
        ._error{
            color: red;
        }
        ._success{
            color: green;
        }
        img{
            height: 100px;
            width: 100px;
        }
    </style>
    <title>Registration Page</title>
</head>
<body>
    <div class="container">
        <h1>Update Record</h1>
        <form method="post" enctype="multipart/form-data">
        <div class="input-group mb-3">
            <?php echo "<span class='{$clsMsg}'>{$message}</span>"; ?>
                Upload a File:<br><input type="file" name="uploadedFile" />
                <input type="submit" name="uploadBtn" value="Upload" />
            </div>
        </form>
        <form action="" method="post">
            <div class="input-group mb-3">
                <span class="input-group-text" id="photo">Avatar</span>
                <input type="text" name="photo" id="photo" class="form-control" placeholder="upload image" value="<?= $newFileName?>" aria-describedby="photo">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="firstName">First Name</span>
                <input type="text" name="firstName" id="firstName" value="<?php echo $val['firstName'];?>"
                class="form-control" placeholder="Enter First Name"  aria-describedby="firstName">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="lastName">Last Name</span>
                <input type="text" name="lastName" id="lastName" value="<?php echo $val['lastName'];?>" 
                class="form-control" placeholder="Enter Last Name"  aria-describedby="lastName">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="address">Location</span>
                <input type="text" name="address" id="address" value="<?php echo $val['address'];?>" 
                class="form-control" placeholder="Enter Location"  aria-describedby="address">
            </div>
            <input type="submit" value="Update" name="edit" id="edit" class="btn btn-primary"/>
        </form>
        <div class="input-group mb-3">
            AVATAR:
                <img src="uploads/<?= $val['photo']?>" alt="<?= $val['firstName']?>">
        </div>
    </div>    
</body>
</html>
