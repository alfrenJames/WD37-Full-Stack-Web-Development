<?php
require_once('database.php');
class registration{
    //define properties
    private $id;
    private $firstName;
    private $lastName;
    private $address;
    private $photo;
    protected $dbCon;
    //constructor 

    public function __construct($id=0, $firstName="", $lastName="",$address="",$photo="")
    {
        $this-> id = $id;
        $this-> firstName = $firstName;
        $this-> lastName = $lastName;
        $this-> address = $address;
        $this-> photo = $photo;

        $this->dbCon = new PDO(
            DB_TYPE.
            ":host=".DB_HOST.
            ";dbname=".DB_NAME,
            DB_USER,DB_PWD,[PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]
        );
    }
 
    public function setId($id){
        $this->id = $id;
    }
    public function getId(){
        return $this->id;
    }
    public function setFirstName($firstName){
        $this->firstName = $firstName;
    }
    public function getFirstName(){
        return $this->firstName;
    }
    public function setLastName($lastName){
        $this->lastName = $lastName;
    }
    public function getLastName(){
        return $this->lastName;
    }
    public function setAddress($address){
        $this->address = $address;
    }
    public function getAddress(){
        return $this->address;
    }
    public function setPhoto($photo){
        $this->photo = $photo;
    }
    public function getPhoto(){
        return $this->photo;
    }


    public function addNewRecord(){
        try {
            $sqlStament = $this->dbCon->prepare("INSERT INTO users(firstName,lastName,address,photo) VALUES(?,?,?,?)");
            $sqlStament->execute([$this->firstName,$this->lastName,$this->address,$this->photo]);
            // echo "<script>
            // alert('New Record Addeded to the Database➕✅');
            // document.location='index.php';
            // </script>";
        } catch (Exception $error) {
            return $error->getMessage();
        }
    }
    public function getAll(){
        try {
            $sqlStament = $this->dbCon->prepare("SELECT * FROM users");
            $sqlStament->execute();
            return $sqlStament->fetchAll(); 
        } catch (Exception $error) {
            return $error->getMessage();
        }
    }
    public function getByID(){
        try {
            $sqlStament = $this->dbCon->prepare("SELECT * FROM users WHERE id=?");
            $sqlStament->execute([$this->id]);
            return $sqlStament->fetchAll();
        } catch (Exception $error) {
            return $error->getMessage();
        }
    }
    public function updateRecord(){
        try {
            $sqlStament = $this->dbCon->prepare("UPDATE users SET firstName=?, lastName=?, address=?, photo=?  WHERE id=?");
            $sqlStament->execute([$this->firstName,$this->lastName,$this->address,$this->photo,$this->id]);
            // echo "<script>
            // alert('Record Updated!💾✅');
            // document.location='index.php';
            // </script>";
        } catch (Exception $error) {
            return $error->getMessage();
        }
    }
    public function deleteRecord(){
        try {
            $sqlStament = $this->dbCon->prepare("DELETE FROM users WHERE id=?");
            $sqlStament->execute([$this->id]);
            return $sqlStament->fetchAll();
            // echo "<script>
            // alert('Record DELETED!!❌');
            // document.location='index.php';
            // </script>";
        } catch (Exception $error) {
            return $error->getMessage();
        }
    }
}
?>
