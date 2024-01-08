<?php
    include_once "../Database.php";

    $field = $_GET['field'];
    $table = $_GET['table'];
    $query = "SELECT $field FROM $table";
    $result = Database::GetConnection()->Query($query);

    if ($result && $result->rowCount() > 0)
    {
        $rows = $result->fetchAll(PDO::FETCH_ASSOC);
        $response = array
        (
            "status" => "success",
            "data" => $rows
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