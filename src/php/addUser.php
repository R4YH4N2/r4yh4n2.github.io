<?php
// Gets around the CORS Policy Blockage
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
// Variable pulls the parameters from the URL
$username = isset($_POST['Username']) ? $_POST['Username'] : null;
$email = isset($_POST['Email']) ? $_POST['Email'] : null;
$password = isset($_POST['Password']) ? $_POST['Password'] : null;
$firstName = isset($_POST['FirstName']) ? $_POST['FirstName'] : null;
$surname = isset($_POST['Surname']) ? $_POST['Surname'] : null;
$telephone = isset($_POST['Telephone']) ? $_POST['Telephone'] : null;
// Server connection details
$server = "RM-L2\SQLEXPRESS";
// Database entry details
$connectionInfo = array("Database" => "adlotto",
    "UID" => "masterUser",
    "PWD" => "Rakhrawan9!",
    "ReturnDatesAsStrings" => true);
// Actually connecting to the database
$link = sqlsrv_connect($server, $connectionInfo);
// If the connection fails
if ($link === false) {
    // End everything and print the error
    die(print_r(sqlsrv_errors(), true));
}
// Call the Stored Procedure
$sqlQuery = "{call dbo.ADDUser(?, ?, ?, ?, ?, ?)}";
$params = array();
$params['Username'] = $username;
$params['Email'] = $email;
$params['Password'] = $password;
$params['FirstName'] = $firstName;
$params['Surname'] = $surname;
$params['Telephone'] = $telephone;
$sqlQueryParams = array(
    array(&$params['Username'], SQLSRV_PARAM_IN),
    array(&$params['Email'], SQLSRV_PARAM_IN),
    array(&$params['Password'], SQLSRV_PARAM_IN),
    array(&$params['FirstName'], SQLSRV_PARAM_IN),
    array(&$params['Surname'], SQLSRV_PARAM_IN),
    array(&$params['Telephone'], SQLSRV_PARAM_IN),
);
// Connect to the Database with the stored procedure to be executed
$queryResult = sqlsrv_query($link, $sqlQuery, $sqlQueryParams);
// If the execution fails
if ($queryResult === false) {
    echo "Query failed";
    echo json_encode($sqlQueryParams);
} else {
    echo "User Added";
}
