<?

	require('mysql.php');
	$db = new mysql();

	$consulta = "SELECT * FROM champs";

	echo json_encode($db->query_assoc($consulta));

?>	