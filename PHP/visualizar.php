<?php
header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset-UTF-8");
//incluir conexao
include_once "conexao.php";

$valor = filter_input(INPUT_GET, "id", FILTER_SANITIZE_NUMBER_INT);

$sql = "SELECT id,nome,sexo,estado,infor,Contacto FROM pessoas Where id = :id ";
$result = $conn->prepare($sql);
$result->bindParam(':id',$valor, PDO::PARAM_INT );

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