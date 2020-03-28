<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$where = $_POST['where'];

$utm_source = $_POST['utm_source'];
$utm_medium = $_POST['utm_medium'];
$utm_campaign = $_POST['utm_campaign'];
$utm_content = $_POST['utm_content'];
$utm_term = $_POST['utm_term'];

$to1 = 'premiumline26@yandex.ru';
$to1 = 'rizaeve@bk.ru'; //TODO убрать
$subject = 'Заявка на сайте ';
$message = 'На сайт ' . $_SERVER['SERVER_NAME'] . ' поступила новая заявка.<br>';

$message .= 'Фамилия Имя Отчество : ' . $name . '<br>';
$message .= 'Контактный телефон : ' . $phone . '<br>';
$message .= 'Форма : ' . $where . '<br>';


$message .= 'utm_source : '.$utm_source .'<br>';
$message .= 'utm_medium : '.$utm_medium .'<br>';
$message .= 'utm_campaign : '.$utm_campaign .'<br>';
$message .= 'utm_content : '.$utm_content .'<br>';
$message .= 'utm_term : '.$utm_term .'<br>';
$message .= '<br>' . 'IP Адрес : ' . $_SERVER['REMOTE_ADDR'] . '<br>';

$message .= '<br>Письмо отправлено автоматически и не требует ответа';
$headers = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: ROBOT <robot@" . $_SERVER['SERVER_NAME'] . ">\r\n";
if(mail($to1, $subject, $message, $headers)){
    header('Location: thanks.html');
}
