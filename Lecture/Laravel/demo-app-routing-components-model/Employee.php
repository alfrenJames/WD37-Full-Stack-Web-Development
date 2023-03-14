<?php
namespace App\Models;
class Employees{
//function to get all employee
    public static function getAll(){
    return [
        [
            'id'=>1,
            'empName'=>'Jerald',
            'photo'=>"https://th.bing.com/th?id=OIP.zRG7_6cFjh5TdxTbdW_SkgHaH_&w=240&h=259&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
            'jobTitle'=>'WebDev',
            'salary'=>305454.34,
            'active'=>true
        ],
        [
            'id'=>2,
            'empName'=>'Jerome',
            'photo'=>"https://th.bing.com/th/id/OIP.8DDnZg9-q5BkyTcfOAYsbwHaGA?pid=ImgDet&rs=1",
            'jobTitle'=>'System Analyst',
            'salary'=>305454.34,
            'active'=>true
        ],
        [
            'id'=>3,
            'empName'=>'John Paul',
            'photo'=>"https://www.pngitem.com/pimgs/m/41-415019_profile-man-male-free-picture-male-avatar-clipart.png",
            'jobTitle'=>'System Analyst',
            'salary'=>305454.34,
            'active'=>true
        ],
    ];
}
//get employee by id
public static function getById($id){
$employees = self::getAll();
foreach($employees as $employee){
    if($employee['id'] == $id ){
        return $employee;
    }
}
}
}
?>
