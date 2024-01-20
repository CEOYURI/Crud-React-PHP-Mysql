<?php
//cabeçalhos obrigatorios
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/json; charset-UTF-8");
//incluir conexao
include_once "conexao.php";

$id = filter_input(INPUT_GET, "id", FILTER_SANITIZE_NUMBER_INT);

$response ="";


$sql = "DELETE  FROM pessoas WHERE id=:id LIMIT 1";
$result = $conn->prepare($sql);
$result->bindParam(':id',$id, PDO::PARAM_INT);


if ($result->execute()) {
    $response = [
        "erro"=> false,
        "mensagem"=> "Usuario apagado com Sucesso"
    ];
    
} else{
    $response = [
        "erro"=> true,
        "mensagem"=> "Erro:Usuario não apagado"
    ];
    
}

http_response_code(200);
echo json_encode($response);



?>