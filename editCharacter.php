<?php
include 'connection.php';
if(!isset($_POST['id']) || !isset($_POST['name']) || !isset($_POST['title']) || !isset($_POST['alignment'])){
    echo json_encode(['error'=>'Form data missing']);
    exit;
}

$id = $_POST['id'];
$name = $_POST['name'];
$title = $_POST['title'];
$alignment = $_POST['alignment']; 

$sql = "UPDATE characters SET name =?, title = ?, alignment = ? WHERE  id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssi",$name,$title,$alignment,$id);

if($stmt->execute()){
    echo json_encode(['status'=>'success', 'message'=>'Character updated sucessfully']);
}

else{
    echo json_encode(['status'=>'error', 'message'=>'Failed to update Character.']);
}


$stmt->close();
$conn->close();
?>