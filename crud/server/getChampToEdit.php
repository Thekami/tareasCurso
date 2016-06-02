<?

	require('mysql.php');
	$db = new mysql();

	$id = $_POST['id'];

	$consulta = "SELECT * FROM champs WHERE Ch_id = $id";

	echo json_encode($db->query_assoc($consulta));

?>	