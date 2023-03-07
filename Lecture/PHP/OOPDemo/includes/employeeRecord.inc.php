<?php
//varaibles
$name = "me";
//class 
class employeeRecord{
    const BR = "</BR>";
    //define properties
    public $name, $position, $company, $salary, $photo;
    public $dir = "img/";

    //constructor
    // function __construct($name, $position, $company, $salary, $photo){
    //     $this->name = $name;
    //     $this->position = $position;
    //     $this->company = $company;
    //     $this->salary = $salary;
    //     $this->photo = $photo;
    // }

    //accessor/getter
    function get_employee_record(){
        echo "<div>";
        echo $this->name.self::BR;
        echo $this->position.self::BR;
        echo $this->company.self::BR;
        echo $this->salary.self::BR;
        echo "<img src='{$this->dir}{$this->photo}' alt='{$this->name}'>";
        echo "</div>";
    }
    //setter/ mutator 
    function set_employee_record($name, $position, $company, $salary, $photo){
        $this->name = $name;
        $this->position = $position;
        $this->company = $company;
        $this->salary = $salary;
        $this->photo = $photo;
    }

}
//function 
function test(){
  return $GLOBALS['name'];
}
?>
