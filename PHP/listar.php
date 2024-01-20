<?php
//cabeçalhos obrigatorios
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset-UTF-8");
//incluir conexao
include_once "conexao.php";
$sql = "SELECT id, nome,sexo,estado,infor,Contacto,data_entrada FROM pessoas ";
$result = $conn->prepare($sql);
$result->execute();

if(($result) AND ($result->rowCount() != 0)){
    while($row = $result->fetch(PDO:: FETCH_ASSOC)){
        extract($row);

        $lista["records"][$id] =[
            'id'=> $id,
            'nome'=>$nome,
            'sexo'=>$sexo,
            'infor'=> $infor,
            'estado'=>$estado,
            'Contacto'=> $Contacto,
            'data_entrada'=> $data_entrada
      
        ];
    }
    http_response_code(200);
     echo json_encode($lista);
}

?>