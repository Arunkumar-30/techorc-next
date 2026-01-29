<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
header('Content-Type: application/json');

// Read raw JSON
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

if ($data === null) {
    http_response_code(400);
    echo json_encode(array("error" => array("Invalid JSON", "Raw input: ".$raw)));
    exit;
}

// Extract safely without ??
$name        = isset($data['name']) ? trim($data['name']) : '';
$email       = isset($data['email']) ? trim($data['email']) : '';
$phone       = isset($data['phone']) ? trim($data['phone']) : '';
$field     = isset($data['field']) ? trim($data['field']) : '';

// Validation
$errors = array();
if ($name === '') $errors[] = "Name is required";
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "Valid email is required";
if ($phone === '') $errors[] = "Phone number is required";
if ($field === '') $errors[] = "Field is required";

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(array("error" => $errors));
    exit;
}

// Build email
$subject = "New Enquiry from ".$name;
$body = "
<table border='1' cellpadding='5'>
<tr><td>Name</td><td>$name</td></tr>
<tr><td>Email</td><td>$email</td></tr>
<tr><td>Phone</td><td>$phone</td></tr>
<tr><td>Field</td><td>$field</td></tr>
</table>
";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";

// From address
// $headers .= "From: info@rayzenpower.com" . "\r\n";

// Send mail
if (mail("info@techorc.in", $subject, $body, $headers)) {
// if (mail("Selvam.arun100@gmail.com", $subject, $body, $headers)) {
    echo json_encode(array("success" => true,"message"=>"Thank you! Your enquiry has been submitted."));
} else {
    http_response_code(500);
    echo json_encode(array("error" => array("Mail sending failed. Check server configuration.")));
}
?>
