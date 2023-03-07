<?php
//call includes components of class 
//include "includes/employeeRecord.inc.php";
//auto loader
spl_autoload_register('employee');
function employee($className){
    $path="class/";
    $extension =".class.php";
    $fullPath = $path.$className.$extension;
    include_once $fullPath; 
}
?>
<?php 
// includes head 
include "partials/head.partials.php";
?>
    <h1>Employee Records</h1>
    <?php
    //include adding record
    include "includes/addRecord.inc.php"
    ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>
