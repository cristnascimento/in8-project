<?php

$siglas = ['ES', 'MG', 'RJ', 'SP'];
$nomes = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'];

sort($nomes);
$limite = count($siglas) - 1;

$siglas_e_nomes = array();

foreach (range(0, $limite) as $index) {
   $siglas_e_nomes[$siglas[$index]] = $nomes[$index];   
}

foreach ($siglas_e_nomes as $sigla => $nome) {
   echo "$sigla-$nome\n";
}
?>
