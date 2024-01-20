<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset-UTF-8");
header("Access-Control-Allow-Headers: * ");
//header("Access-Control-Allow-Methods: *");
include "conexao.php";

        
$dados = json_decode( file_get_contents('php://input', true) );

$sql = "UPDATE pessoas SET nome=:nome, sexo=:sexo,estado=:estado, infor=:infor,Contacto=:Contacto WHERE id= :id";
$result = $conn->prepare($sql);
 
$result->bindParam(':nome',$dados->nome);
$result->bindParam(':sexo',$dados->sexo);
$result->bindParam(':estado',$dados->estado);
$result->bindParam(':infor',$dados->infor );
$result->bindParam(':Contacto',$dados->Contacto );
$result->bindParam(':id',$dados->id );


if ($result->execute()) {
 $response =[
     "erro"=> false,
     "mensagem"=> "Usuario Editado com sucesso"
 ];

}
else{
 $response =[
     "erro"=> true,
     "mensagem"=> "Usuario nao Editado"
 ];
}
http_response_code(200);
echo json_encode($response);
?> 