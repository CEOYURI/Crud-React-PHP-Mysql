<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");
// header("Access-Control-Allow-Methods: GET, PUT,POST, DELETE");

include "conexao.php";

$dados = json_decode( file_get_contents('php://input', true) );



$sql = "INSERT INTO pessoas(nome,sexo,estado,infor,Contacto)VALUES(:nome, :sexo,:estado,:infor,:Contacto)";
    $result = $conn->prepare($sql);
   
    $result->bindParam(':nome',$dados->nome);
    $result->bindParam(':sexo',$dados->sexo);
    $result->bindParam(':estado',$dados->estado);
    $result->bindParam(':infor',$dados->infor);
    $result->bindParam(':Contacto',$dados->Contacto);
   
if($result->execute()){
    $response =[
        "erro"=> false,
        "mensagem"=> "Usuario  Cadastrado com sucesso"
    ];

}else{
    $response =[
        "erro"=> true,
        "mensagem"=> "Usuario nao Cadastrado"
    ];
}

echo json_encode($response);

?> 