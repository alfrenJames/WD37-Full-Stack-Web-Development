<?php
if(isset($_POST['save'])){
    require_once('registration.class.php');
    $addUser = new registration();
    $addUser->setFirstName($_POST['firstName']);
    $addUser->setLastName($_POST['lastName']);
    $addUser->setAddress($_POST['address']);
    $addUser->setPhoto($_POST['photo']);
    $addUser->addNewRecord();
    echo "<script>alert('New Record Addeded to the Database➕✅');document.location='index.php'</script>";
}
?>
