<?php

include 'connection.php';


$name = $_POST['name'];
$title = $_POST['title'];
$alignment = $_POST['alignment'];

$sql = "INSERT INTO characters (name,title,alignment) VALUES(?,?,?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss",$name,$title,$alignment);

if($stmt->execute()){
    $response = ['status' => 'success','message' => 'Character added successfully.'];
    echo json_encode($response);
}
else{
    $response = ['status' => 'error','message' => 'Failed to add character.'];
    echo json_encode($response);
}

$stmt->close();
$conn->close();
?>