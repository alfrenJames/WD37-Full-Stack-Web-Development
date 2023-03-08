<!DOCTYPE HTML>  
<html>
<head>
<style>
._error {color: #FF0000;}
div{
        width: 650px;
        min-height: 500px;
        margin: 0px auto;
        background-color: rgb(26, 01, 15);
        color: white;
        }
form{
    margin: 50px;
    padding: 5px;
    border: 1px solid #eee;
}
.upload{
    text-align: left;
}
ul li{ list-style-type: none;}
</style>
</head>
<body>  

<?php
    // define variables and set to empty values
    $name_err = $email_err = $password_err = $date_err = "";
    $lname = $fname = $email = $confirm = $password = $birth_date = "";
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
        }
  
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $passwordSize = 6;
        $lname = test_input($_POST["last_name"]);
        $fname = test_input($_POST["first_name"]);
        $email = test_input($_POST["email"]);
        $confirm = test_input($_POST["confirm"]);
        $password = test_input($_POST["password"]);
        $birth_date = test_input($_POST["birth_date"]);

        if (empty($_POST["last_name"]) || empty($_POST["first_name"])) {
            $name_err = "Required Field";
        } else {
            // check if name only contains letters and whitespace
            if (!preg_match("/^[a-zA-Z-' ]*$/",$lname) || !preg_match("/^[a-zA-Z-' ]*$/",$fname)) {
            $name_err = "Only letters are Allowed";
            }
        }
        if (empty($_POST["email"])) {
            $email_err = "Email is required";
        } else {
            // check if e-mail address is well-formed
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $email_err = "Invalid email format";
            }
        }
        if (empty($_POST["password"])) {
            $password_err = "Password is Required";
        }else{
            if($password != $confirm){
                $password_err = "Password not Match";
            }else if(strlen($password) < $passwordSize){
                $password_err = "Weak Password Min. of 6 character";
            }
        }
        if (empty($_POST["birth_date"])){
            $date_err =  "Date is Required";
        }else{
            $dataDate = explode("-", $birth_date);
            $year = date("Y") - $dataDate[0];
            echo $year;
            if($birth_date > date("Y-m-d") || $year > 151){
                $date_err = "Invalid Date";
            }
        }
    
    }    
?>
    <div>
        <h2>PHP Form Validation Without Database</h2>
        <form method="post" >
            E-mail: <input type="text" name="email" value="<?php echo $email;?>">
             <?php echo "<span class='_error'>{$email_err}</span>"; ?>
            <br><br>
            Last Name: <input type="text" name="last_name" value="<?php echo $lname;?>">
           <?php echo" <span class='_error'>{$name_err}</span>";?>
            <br><br>
            First Name: <input type="text" name="first_name" value="<?php echo $fname;?>">
             <?php echo "<span class='_error'>$name_err</span>";?>
            <br><br>
            Password: <input type="password" name="password" value="<?php echo $password;?>">
             <?php echo"<span class='_error'>{$password_err}</span>";?>
            <br><br>
            Confirm: <input type="password" name="confirm" value="<?php echo $confirm;?>">
             <?php echo "<span class='_error'>{$password_err}</span>";?>
            <br><br>
            Birth Date: <input type="date" name="birth_date" value="<?php echo $birth_date;?>">
            <?php echo "<span class='_error'>{$date_err} </span>";?>
            <br><br>
            <input type="submit" name="submit" value="Submit"/>  
        </form>
        <form method="POST" action="upload.php" enctype="multipart/form-data">
        <?php
           session_start();
           if (isset($_SESSION['message']) && $_SESSION['message'])
             {
                printf('<b>%s</b>', $_SESSION['message']);
                unset($_SESSION['message']);
            }
        ?>
            Upload a File:<br><input type="file" name="uploadedFile" />
            <input type="submit" name="uploadBtn" value="Upload" />
        </form>
      
    </div>
    <?php
    echo "<h2>Your Input:</h2>";
    echo $lname;
    echo "<br>";
    echo $fname;
    echo "<br>";
    echo $email;
    echo "<br>";
    echo $password;
    echo "<br>";
    echo $birth_date;
    ?>
</body>
</html>
