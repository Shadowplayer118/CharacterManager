<?php
include 'connection.php';
if(!isset($_POST['id']) || !isset($_POST['name']) || !isset($_POST['title']) || !isset($_POST['alignment'])  || !isset($_POST['timeline'])  || !isset($_POST['race'])){
    echo json_encode(['error'=>'Form data missing']);
    exit;
}

$id = $_POST['id'];
$name = $_POST['name'];
$title = $_POST['title'];
$alignment = $_POST['alignment']; 
$timeline = $_POST['timeline']; 
$race = $_POST['race']; 

$sql = "UPDATE characters SET name =?, title = ?, alignment = ?, timeline = ?, race = ? WHERE  id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssi",$name,$title,$alignment,$timeline,$race,$id);

if($stmt->execute()){
    echo json_encode(['status'=>'success', 'message'=>'Character updated sucessfully']);
}

else{
    echo json_encode(['status'=>'error', 'message'=>'Failed to update Character.']);
}


$stmt->close();
$conn->close();
?>