<?php
    include_once "Database.php";

    $field = $_GET['field'];
    $language = $_GET['language'];
    $query = "SELECT $field FROM cms WHERE language = '$language'";
    $result = Database::GetConnection()->Query($query);

    if ($result && $result->rowCount() > 0)
    {
        $row = $result->fetch(PDO::FETCH_ASSOC);
        $response = array
        (
            "status" => "success",
            "data" => $row[$field]
        );
    }
    else
    {
        $response = array
        (
            "status" => "error",
            "message" => "Field not found."
        );
    }

    header("Content-Type: application/json");
    echo json_encode($response);