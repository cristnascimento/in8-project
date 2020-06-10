<?php

function menor_numero($numero_atual) {
   $mod_2 = $numero_atual % 2;
   $mod_3 = $numero_atual % 3;
   $mod_10 = $numero_atual % 10;

   if ($mod_2 == 0 && $mod_3 == 0 && $mod_10 == 0) {
      echo "$numero_atual";
   }
   else {
      menor_numero($numero_atual + 1);
   }
}

$valor_inicial = 1;
menor_numero($valor_inicial);

?>
