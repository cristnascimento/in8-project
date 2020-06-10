<?php

$soma_multiplos = 0;

foreach (range(1, 999) as $valor) {
   $mod_3 = $valor % 3;
   $mod_5 = $valor % 5;

   if ($mod_3 == 0 || $mod_5 == 0)
      $soma_multiplos += $valor;
}

echo $soma_multiplos;
?>
