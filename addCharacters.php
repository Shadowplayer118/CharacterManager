<?php

include 'connection.php';


$name = $_POST['name'];
$title = $_POST['title'];
$alignment = $_POST['alignment'];
$timeline = $_POST['timeline'];
$race = $_POST['race'];


$sql = "INSERT INTO characters (name,title,alignment,timeline,race) VALUES(?,?,?,?,?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss",$name,$title,$alignment,$timeline,$race);

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