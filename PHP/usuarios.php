<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");
include 'conexao.php';

$valor = filter_input(INPUT_GET, "nome");

$sql = "SELECT nome,sexo,estado FROM pessoas Where nome LIKE &:nome& ";
$result = $conn->prepare($sql);
$result->bindParam(':nome',$valor, PDO::PARAM_STR );


if ($result->execute()){
    if(($result) AND ($result->rowCount() != 0)){
        while($row = $result->fetch(PDO:: FETCH_ASSOC)){
            extract($row);
    
              $lista["records"][$id] =[
                'id'=> $id,
                'nome'=>$nome,
                'sexo'=> $sexo,
                'estado'=> $estado,
                'infor'=>$infor,
                'Contacto'=> $Contacto,
            ];
        }
       
    }
    }
    http_response_code(200);
    echo json_encode($lista);
?> 