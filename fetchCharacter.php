<?php

include 'connection.php';

if (!isset($_GET['id'])) {
    echo json_encode(['error' => 'ID parameter missing']);
    exit;
}

$id = $_GET['id'];

$sql = "SELECT * FROM characters WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);

$stmt->execute();

$stmt->bind_result($id, $name, $title, $alignment, $timeline, $race);

if ($stmt->fetch()) {
    echo json_encode([
        'id' => $id,
        'name' => $name,
        'title' => $title,
        'alignment' => $alignment,
        'timeline' => $timeline,
        'race' => $race
    ]);
} else {
    echo json_encode(['error' => 'Character not found']);
}

$stmt->close();
$conn->close();

?>
